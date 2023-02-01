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
//! AUTHENTICATION ROUTES

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // console.log(req.body);
    const admin = await pool.query(
      `SELECT * FROM admins WHERE username = '${username}'`
    );

    if (admin.rows.length <= 0) {
      res.status(401).send('Username or password is wrong');
    }

    const validPassword = await bcrypt.compare(
      password,
      admin.rows[0].password
    );

    if (!validPassword) {
      res.status(401).send('Username or password is wrong');
    }
    const token = generateJWT(admin.rows[0]);

    res.json({ token });
  } catch (error) {
    console.log(error);
  }
});

app.post('/addAdmin', async (req, res) => {
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

    const admin = await pool.query(
      `SELECT * FROM admins WHERE username = '${username}'`
    );

    if (admin.rows.length > 0) {
      res.status(401).send('User already exist');
    }

    // bcrypt
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(password, salt);

    const newAdmin = await pool.query(
      `INSERT INTO admins (firstname, lastname, contactnumber, address, email, password, username) VALUES ('${firstname}', '${lastname}', ${contactNumber}, '${address}', '${email}', '${bcryptPassword}', '${username}') RETURNING *`
    );

    const token = generateJWT(newAdmin.rows[0]);

    res.json({ token });
  } catch (error) {
    console.log(error);
  }
});

//! PRIVATE ROUTES
//* ADMIN
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

    const admin = await pool.query(
      `SELECT * FROM admins WHERE username = '${username}'`
    );

    if (admin.rows.length > 0) {
      res.status(401).send('User already exist');
    }

    // bcrypt
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(password, salt);

    const newAdmin = await pool.query(
      `INSERT INTO admins (firstname, lastname, contactnumber, address, email, password, username) VALUES ('${firstname}', '${lastname}', ${contactNumber}, '${address}', '${email}', '${bcryptPassword}', '${username}') RETURNING *`
    );

    const token = generateJWT(newAdmin.rows[0]);

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

app.get('/allAdmins', auth, async (req, res) => {
  try {
    const getAdmin = await pool.query(`SELECT * FROM admins`);

    res.json(getAdmin.rows);
  } catch (error) {
    console.log(error.message);
  }
});

app.delete('/admins/:id', async (req, res) => {
  try {
    const id = req.params['id'];
    await pool.query(`DELETE FROM admins WHERE id = ${id}`);

    res.json({ msg: `Deleted admin with an id of ${id}` });
  } catch (error) {
    console.log(error);
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

// Client Email
app.get('/email/:email', auth, async (req, res) => {
  try {
    const email = req.params['email'];
    const getClient = await pool.query(
      `SELECT * FROM clients WHERE email = '${email}';`
    );

    res.json(getClient.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

// New Client
app.post('/addClient', async (req, res) => {
  try {
    const { firstname, lastname, contactNumber, address, email, username } =
      req.body;

    const user = await pool.query(
      `SELECT * FROM clients WHERE username = '${username}'`
    );

    if (user.rows.length > 0) {
      res.status(401).send('User already exist');
    }

    const newClient = await pool.query(
      `INSERT INTO clients(firstname, lastname, contactnumber, address, email,  username) VALUES ('${firstname}', '${lastname}', ${contactNumber}, '${address}', '${email}', '${username}') RETURNING *`
    );

    res.json(newClient);
  } catch (error) {
    console.log(error);
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
      `SELECT c.firstname, c.id, l.id, l.type, l.gross_loan, l.amort, l.terms, l.date_released, l.maturity_date, l.balance, l.status, l.client_id FROM loans AS l INNER JOIN clients AS c ON l.client_id = c.id WHERE c.id = '${id}'`
    );

    res.json(getClient.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// Get loan
app.get('/loan/:id', auth, async (req, res) => {
  try {
    const id = req.params['id'];

    const getLoan = await pool.query(
      `SELECT c.firstname, c.lastname, l.id, l.client_id, l.type, l.gross_loan, l.amort, l.terms, l.date_released, l.maturity_date, l.balance, l.status FROM loans AS l INNER JOIN clients AS c ON l.client_id = c.id WHERE l.id = '${id}'`
    );

    res.json(getLoan.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

// Get loan's maturity date
app.get('/dates', auth, async (req, res) => {
  try {
    const id = req.params['id'];

    const getLoan = await pool.query(`SELECT maturity_date FROM loans`);

    res.json(getLoan.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// Create loan for borrower page
app.post('/loans/:id', auth, async (req, res) => {
  try {
    const id = req.params['id'];

    const {
      type,
      gross_loan,
      balance,
      amort,
      terms,
      date_released,
      maturity_date,
    } = req.body;

    const newLoan = await pool.query(
      `INSERT INTO loans(client_id, type, status, balance, gross_loan, amort, terms, date_released, maturity_date) VALUES (${id}, '${type}', 'Pending', ${balance}, ${gross_loan}, ${amort}, ${terms}, '${date_released}', '${maturity_date}') RETURNING *`
    );

    res.json(newLoan.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

// Create loan for loans page
app.post('/loans/', auth, async (req, res) => {
  const timenow = new Date();
  const formatTime = (t) => {
    const x = new Date(t);
    let hour = x.getHours();

    if (hour < 10) {
      hour = '0' + hour;
    }
    let min = x.getMinutes();
    if (min < 10) {
      min = '0' + min;
    }

    let sec = x.getSeconds();
    if (sec < 10) {
      sec = '0' + sec;
    }

    return hour + ':' + min + ':' + sec;
  };

  // console.log(formatTime(timenow));
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

    const timestamp = date_released + ' ' + formatTime(timenow);

    const newLoan = await pool.query(
      `INSERT INTO loans(client_id, type, status, balance, gross_loan, amort, terms, date_released, maturity_date) VALUES (${client_id}, '${type}', '${status}',${balance}, ${gross_loan}, ${amort}, ${terms}, '${timestamp}', '${maturity_date}') RETURNING *`
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

    // console.log(updateLoan.rows);
    res.json(updateLoan.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// UPDATE LOAN PAYMENT
app.patch('/loan/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;

    const updateLoan = await pool.query(
      `UPDATE loans SET balance = payments.new_balance FROM payments WHERE payments.loan_id = ${id} RETURNING *`
    );

    // If id is not the real user
    // if (updateLoan.rows.length === 0) {
    //   return res.json('This loan is not yours');
    // }

    // console.log(updateLoan.rows);
    res.json(updateLoan.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// Delete payment
app.delete('/payment/:id', auth, async (req, res) => {
  try {
    // const id = req.params['id'];
    const { id } = req.params;
    // console.log(id);
    // console.log(req.user.id);
    const deletePayment = await pool.query(
      `DELETE FROM payments WHERE id = ${id} RETURNING * `
    );

    if (deletePayment.rows.length === 0) {
      res.json('You are not authorize to delete loan');
    }

    res.json({ msg: `Deleted payment with an id of ${id}` });
  } catch (error) {
    console.log(error.message);
  }
});

// Delete loan
app.delete('/loans/:id', auth, async (req, res) => {
  try {
    // const id = req.params['id'];
    const { id } = req.params;
    // console.log(id);
    // console.log(req.user.id);
    const deleteLoan = await pool.query(
      `DELETE FROM loans WHERE id = ${id} RETURNING * `
    );

    if (deleteLoan.rows.length === 0) {
      res.json('You are not authorize to delete loan');
    }

    res.json({ msg: `Deleted loan with an id of ${id}` });
  } catch (error) {
    console.log(error.message);
  }
});

//* PAYMENTS
// View all payments
app.get('/allPayments', auth, async (req, res) => {
  try {
    const getPayments = await pool.query(
      `SELECT c.firstname, c.lastname, p.id, p.amount, p.collection_date, p.new_balance, p.collected_by, p.method, p.loan_id FROM payments AS p INNER JOIN clients AS c ON p.client_id = c.id WHERE c.id = p.client_id`
    );

    res.json(getPayments.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// View all client payments to single loan
app.get('/payments/:id', auth, async (req, res) => {
  try {
    const id = req.params['id'];

    const getPayments = await pool.query(
      // `SELECT p.loan_id, l.type, l.gross_loan, l.amort, l.terms, l.date_released, l.maturity_date, l.balance, l.status, p.id, p.amount, p.collection_date, p.new_balance, p.collected_by, p.method FROM payments AS p INNER JOIN loans AS l ON p.loan_id = l.id WHERE l.id = ${id};`
      `SELECT * FROM payments WHERE client_id = ${id};`
    );

    res.json(getPayments.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// Create payment for single loan
app.post('/payments/:id', auth, async (req, res) => {
  try {
    const id = req.params['id'];

    const {
      amount,
      collection_date,
      collected_by,
      new_balance,
      method,
      client_id,
    } = req.body;

    const addPayment = await pool.query(
      `INSERT INTO PAYMENTS (amount, collection_date, collected_by, new_balance, method, client_id, loan_id) VALUES (${amount}, '${collection_date}', '${collected_by}', ${new_balance}, '${method}', ${client_id}, ${id}) RETURNING *`
    );

    res.json(addPayment.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

app.post('/loans/', auth, async (req, res) => {
  try {
    const {
      amount,
      collection_date,
      collected_by,
      new_balance,
      method,
      loan_id,
    } = req.body;

    const addPayment = await pool.query(
      `INSERT INTO payments (amount, collection_date, collected_by, new_balance, method, loan_id) VALUES (${amount}, '${collection_date}', '${collected_by}', ${new_balance}, '${method}', ${loan_id}) RETURNING *`
    );

    res.json(addPayment.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

// PAYMENT W. CLIENT ID AND LOAN ID
app.get('/payment/:client/:loan', auth, async (req, res) => {
  try {
    const client_id = req.params['client'];
    const loan_id = req.params['loan'];

    const getPayments = await pool.query(
      `SELECT * FROM payments WHERE client_id = ${client_id} AND loan_id = ${loan_id};`
    );

    res.json(getPayments.rows);
  } catch (error) {
    console.log(error.message);
  }
});

//
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
