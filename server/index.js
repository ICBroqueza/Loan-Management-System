import express from 'express';
import bodyParser from 'body-parser';
import { connectDatabase } from './pool.js';
import bcrypt from 'bcryptjs';
import { generateJWT } from './utils/jwtGenerator.js';
import { auth } from './middlewares/auth.js';
import cors from 'cors';
const pool = connectDatabase();
const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = 8000;

//* LOGIN SESSIONS
// AUTHENTICATION ROUTES

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await pool.query(
      `SELECT * FROM clients WHERE username = '${username}'`
    );

    if (user.rows.length <= 0) {
      res.status(401).send('Username or password is wrong');
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!validPassword) {
      res.status(401).send('Username or password is wrong');
    }
    const token = generateJWT(user.rows[0]);

    res.json({ token });
  } catch (error) {
    console.log(error);
  }
});

app.post('/register', async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      contactNumber,
      address,
      email,
      username,
      password,
    } = req.body;

    const user = await pool.query(
      `SELECT * FROM clients WHERE username = '${username}'`
    );

    if (user.rows.length > 0) {
      res.status(401).send('User already exist');
    }

    // bcrypt
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(password, salt);

    const newUser = await pool.query(
      `INSERT INTO clients(firstname, lastname, contactnumber, address, email, password, username) VALUES ('${firstname}', '${lastname}', ${contactNumber}, '${address}', '${email}', '${bcryptPassword}', '${username}') RETURNING *`
    );

    const token = generateJWT(newUser.rows[0]);

    res.json({ token });
  } catch (error) {
    console.log(error);
  }
});

app.get('/profile', auth, async (req, res) => {
  try {
    res.json(req.user);
  } catch (error) {
    console.log(err);
  }
});

//* CLIENTS
app.get('/allClients', auth, async (req, res) => {
  try {
    const getClient = await pool.query(`SELECT * FROM clients`);

    res.json(getClient.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// app.patch('/clients', auth, async (req, res) => {
//   try {
//     const { firstname, lastname, contactNumber, address, email } = req.body;

//     const updateClient = await pool.query(
//       `UPDATE clients SET firstname = '${firstname}', lastname = '${lastname}', contactNumber = ${contactNumber}, address = '${address}', email = '${email}' WHERE id = ${req.user.id} RETURNING *;`
//     );

//     res.json(updateClient.rows);
//   } catch (error) {
//     console.log(error);
//   }
// });

app.get('/client/:id', auth, async (req, res) => {
  try {
    const id = req.params['id'];
    const getClient = await pool.query(
      `SELECT * FROM clients WHERE id = ${id};`
    );

    res.json(getClient.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

app.patch('/clients/:id', async (req, res) => {
  try {
    const id = req.params['id'];
    const { firstname, lastname, contactNumber, email, address } = req.body;

    // const updateClient = await pool.query(
    //   `UPDATE clients SET firstname = '${firstname}', lastname = '${lastname}', contactNumber = '${contactNumber}', email = '${email}', address = '${address}' WHERE id = ${id} RETURNING *`

    const updateClient = await pool.query(
      `UPDATE clients SET firstname = '${firstname}', lastname = '${lastname}', contactNumber = ${contactNumber}, address = '${address}', email = '${email}' WHERE id = ${id} RETURNING *;`
    );

    res.json(updateClient.rows);
  } catch (error) {
    console.log(error);
  }
});

app.delete('/clients/:id', async (req, res) => {
  try {
    const id = req.params['id'];
    await pool.query(`DELETE FROM clients WHERE id = ${id}`);

    res.json({ msg: `Deleted client with an id of ${id}` });
  } catch (error) {
    console.log(error);
  }
});

// app.put('/loans/:id', auth, async (req, res) => {
//   try {
//     const { id } = req.params;

//     const { type, gross_loan, amort, terms, date_released, maturity_date } =
//       req.body;

//     const updateLoan = await pool.query(
//       `UPDATE loans SET type = '${type}', gross_loan = ${gross_loan}, amort = ${amort}, terms = ${terms}, date_released = '${date_released}', maturity_date = '${maturity_date}' WHERE id = ${id} AND client_id = ${req.user.id} RETURNING *`
//     );

//     // If id is not the real user
//     if (updateLoan.rows.length === 0) {
//       return res.json('This loan is not yours');
//     }

//     res.json(updateLoan.rows);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

//* LOANS

// Get all loans
app.get('/allLoans', auth, async (req, res) => {
  try {
    const getLoans = await pool.query(
      `SELECT c.firstname, c.lastname, l.id, l.type, l.gross_loan, l.amort, l.terms, l.date_released, l.maturity_date, l.balance, l.status FROM loans AS l INNER JOIN clients AS c ON l.client_id = c.id WHERE c.id = l.client_id`
    );

    res.json(getLoans.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// Get loans of one client
app.get('/loans/:id', auth, async (req, res) => {
  try {
    const id = req.params['id'];

    const getClient = await pool.query(
      `SELECT c.firstname, c.id, l.id, l.type, l.gross_loan, l.amort, l.terms, l.date_released, l.maturity_date, l.balance, l.status FROM loans AS l INNER JOIN clients AS c ON l.client_id = c.id WHERE c.id = '${id}'`
    );

    res.json(getClient.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// app.get('/loans/:id', auth, async (req, res) => {
//   try {
//     const { id } = req.params;

//     const getClient = await pool.query(
//       `SELECT c.firstname, l.id, l.type, l.gross_loan, l.amort, l.terms, l.date_released, l.maturity_date, l.balance, l.status FROM loans AS l INNER JOIN clients AS c ON l.client_id = c.id WHERE c.id = '${id}'`
//     );

//     res.json(getClient.rows);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// Create loan for borrower page
app.post('/loans/:id', auth, async (req, res) => {
  try {
    const id = req.params['id'];

    const {
      type,
      status,
      gross_loan,
      balance,
      amort,
      terms,
      date_released,
      maturity_date,
    } = req.body;

    const newLoan = await pool.query(
      `INSERT INTO loans(client_id, type, status, balance, gross_loan, amort, terms, date_released, maturity_date) VALUES (${id}, '${type}', '${status}',${balance}, ${gross_loan}, ${amort}, ${terms}, '${date_released}', '${maturity_date}') RETURNING *`
    );

    res.json(newLoan.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

// Create loan for loans page
app.post('/loans/', auth, async (req, res) => {
  try {
    const {
      client_id,
      type,
      status,
      gross_loan,
      balance,
      amort,
      terms,
      date_released,
      maturity_date,
    } = req.body;

    const newLoan = await pool.query(
      `INSERT INTO loans(client_id, type, status, balance, gross_loan, amort, terms, date_released, maturity_date) VALUES (${client_id}, '${type}', '${status}',${balance}, ${gross_loan}, ${amort}, ${terms}, '${date_released}', '${maturity_date}') RETURNING *`
    );

    res.json(newLoan.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

// Update loan
app.patch('/loans/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;

    const {
      type,
      balance,
      gross_loan,
      amort,
      terms,
      date_released,
      maturity_date,
      status,
    } = req.body;

    const updateLoan = await pool.query(
      `UPDATE loans SET type = '${type}', balance = '${balance}', gross_loan = ${gross_loan}, amort = ${amort}, terms = ${terms}, date_released = '${date_released}', maturity_date = '${maturity_date}', status = '${status}' WHERE id = ${id} RETURNING *`
    );

    // If id is not the real user
    // if (updateLoan.rows.length === 0) {
    //   return res.json('This loan is not yours');
    // }

    console.log(updateLoan.rows);
    res.json(updateLoan.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// Pay Loan
// app.put('/loans/:id', auth, async (req, res) => {
//   try {
//     const { id } = req.params;

//     const { payment } = req.body;

//     const updateLoan = await pool.query(
//       `UPDATE loans SET balance = ${payment} WHERE id = ${id} AND client_id = ${req.user.id} RETURNING *`
//     );

//     // If id is not the real user
//     if (updateLoan.rows.length === 0) {
//       return res.json('This loan is not yours');
//     }

//     res.json(updateLoan.rows);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// Delete loan
app.delete('/loans/:id', auth, async (req, res) => {
  try {
    // const id = req.params['id'];
    const { id } = req.params;
    // console.log(id);
    // console.log(req.user.id);
    const deleteLoan = await pool.query(
      `DELETE FROM loans WHERE id = ${id} AND client_id = ${req.user.id} RETURNING * `
    );

    if (deleteLoan.rows.length === 0) {
      res.json('You are not authorize to delete loan');
    }

    res.json({ msg: `Deleted loan with an id of ${id}` });
  } catch (error) {
    console.log(error.message);
  }
});

//* CLIENTS
// app.get('/profile', auth, async (req, res) => {
//   try {
//     res.json(req.user.client_id);
//   } catch (error) {
//     console.log(err);
//   }
// });

// app.post('/login', async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     const user = await pool.query(
//       `SELECT * FROM clients WHERE username = '${username}'`
//     );

//     if (user.rows.length <= 0) {
//       res.status(401).send('Username or password is wrong');
//     }

//     const validPassword = await bcrypt.compare(password, user.rows[0].password);

//     if (!validPassword) {
//       res.status(401).send('Username or password is wrong');
//     }
//     const token = generateJWT(user.rows[0]);

//     res.json({ token });
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.post('/register', async (req, res) => {
//   try {
//     const { firstname, lastname, address, email, password, username } =
//       req.body;

//     const user = await pool.query(
//       `SELECT * FROM clients WHERE username = '${username}'`
//     );

//     if (user.rows.length > 0) {
//       res.status(401).send('User already exist');
//     }

//     // bcrypt
//     const saltRound = 10;
//     const salt = await bcrypt.genSalt(saltRound);

//     const bcryptPassword = await bcrypt.hash(password, salt);

//     const newUser = await pool.query(
//       `INSERT INTO clients(firstname, lastname, address, email, password, username) VALUES ('${firstname}', '${lastname}', '${address}','${email}', '${bcryptPassword}', '${username}') RETURNING *`
//     );

//     const token = generateJWT(newUser.rows[0]);

//     res.json({ token });
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.get('/profile', auth, async (req, res) => {
//   try {
//     res.json(req.user);
//   } catch (error) {
//     console.log(err);
//   }
// });

// CLIENTS NEW
// app.get('/clients', async (req, res) => {
//   try {
//     const clients = await pool.query(`SELECT * FROM clients`);

//     res.json(clients.rows);
//   } catch (err) {
//     console.log('Something is wrong');
//   }
// });

// app.post('/clients', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     const newClient = await pool.query(
//       `INSERT INTO clients(client_name, client_email, client_password) VALUES ('${name}', '${email}', '${password}') RETURNING *`
//     );

//     res.json(newClient.rows);
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.patch('/clients/:id', async (req, res) => {
//   try {
//     const id = req.params['id'];
//     const { firstname, lastname, contact_number, email, address } = req.body;

//     const updateClient = await pool.query(
//       `UPDATE clients SET firstname = '${firstname}', lastname = '${lastname}', contact_number = '${contact_number}', email = '${email}', address = '${address}' WHERE id = ${id} RETURNING *`
//     );

//     res.json(updateClient.rows);
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.delete('/clients/:id', async (req, res) => {
//   try {
//     const id = req.params['id'];
//     await pool.query(`DELETE FROM clients WHERE id = ${id}`);

//     res.json({ msg: `Deleted client with an id of ${id}` });
//   } catch (error) {
//     console.log(error);
//   }
// });

// CLIENTS

// app.get('/clients', async (req, res) => {
//   try {
//     const clients = await pool.query(`SELECT * FROM clients`);

//     res.json(clients.rows);
//   } catch (err) {
//     console.log('Something is wrong');
//   }
// });

// app.post('/clients', async (req, res) => {
//   try {
//     const {
//       firstname,
//       lastname,
//       contactnumber,
//       email,
//       address,
//       password,
//       username,
//     } = req.body;

//     const newClient = await pool.query(
//       `INSERT INTO clients(firstname, lastname, contactnumber, email, address, password, username) VALUES ('${firstname}', '${lastname}', '${contactnumber}', '${email}', '${address}', '${password}', '${username}') RETURNING *`
//     );

//     res.json(newClient.rows);
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.patch('/clients/:id', async (req, res) => {
//   try {
//     const id = req.params['id'];
//     const { firstname, lastname, contact_number, email, address } = req.body;

//     const updateClient = await pool.query(
//       `UPDATE clients SET firstname = '${firstname}', lastname = '${lastname}', contact_number = '${contact_number}', email = '${email}', address = '${address}' WHERE id = ${id} RETURNING *`
//     );

//     res.json(updateClient.rows);
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.delete('/clients/:id', async (req, res) => {
//   try {
//     const id = req.params['id'];
//     await pool.query(`DELETE FROM clients WHERE id = ${id}`);

//     res.json({ msg: `Deleted client with an id of ${id}` });
//   } catch (error) {
//     console.log(error);
//   }
// });

// // LOANS INFO
// app.get('/loans_info', async (req, res) => {
//   try {
//     const info = await pool.query(`SELECT * FROM loans_info`);

//     res.json(info.rows);
//   } catch (err) {
//     console.log('Something is wrong');
//   }
// });

// //? How to get loan info of a certain client
// app.post('/loans_info_client', async (req, res) => {
//   try {
//     const { clients_id } = req.body;
//     // console.log(clients_id);
//     // console.log(req.body);
//     const info = await pool.query(
//       `SELECT * FROM loans_info WHERE clients_id = ${clients_id}`
//     );

//     res.json(info.rows);
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// //? How to add a loan to a certain client
// app.post('/loans_info', async (req, res) => {
//   try {
//     const { current_date, gross_loan, terms } = req.body;

//     const newLoan = await pool.query(
//       `INSERT INTO loans_info (loan_date, loan_due, gross_loan, terms)
//       VALUES (${current_date}, ${current_date} + INTERVAL '1 month', ${gross_loan}, ${terms}) RETURNING *`
//     );

//     res.json(newLoan.rows);
//   } catch (error) {
//     console.log(error);
//   }
// });

// // LOAN OFFERS

// app.get('/loan_offers', auth, async (req, res) => {
//   try {
//     const offers = await pool.query(`SELECT * FROM loan_offers`);

//     res.json(offers.rows);
//   } catch (err) {
//     console.log('Something is wrong');
//   }
// });

// app.post('/loan_offers', async (req, res) => {
//   try {
//     const { monthly_amort, gross_loan, net_proceeds, terms } = req.body;

//     const newOffer = await pool.query(
//       `INSERT INTO loan_offers (monthly_amort, gross_loan, net_proceeds, terms)
//       VALUES (${monthly_amort}, ${gross_loan}, ${net_proceeds}, ${terms}) RETURNING *`
//     );

//     res.json(newOffer.rows);
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.patch('/loan_offers/:id', async (req, res) => {
//   try {
//     const id = req.params['id'];
//     const { monthly_amort, gross_loan, net_proceeds, terms } = req.body;

//     const updateOffer = await pool.query(
//       `UPDATE loan_offers SET monthly_amort = '${monthly_amort}', gross_loan = '${gross_loan}', net_proceeds = '${net_proceeds}', terms = '${terms}' WHERE id = ${id} RETURNING *`
//     );

//     res.json(updateOffer.rows);
//   } catch (error) {
//     console.log(error);
//   }
// });

// app.delete('/loan_offers/:id', async (req, res) => {
//   try {
//     const id = req.params['id'];
//     await pool.query(`DELETE FROM loan_offers WHERE id = ${id}`);

//     res.json({ msg: `Deleted loan with an id of ${id}` });
//   } catch (error) {
//     console.log(error);
//   }
// });

pool.connect((err) => {
  if (err) {
    console.log(err.message);
  }
  {
    app.listen(PORT, () => {
      console.log(`Server has started on http://localhost:${PORT}`);
    });
  }
});
