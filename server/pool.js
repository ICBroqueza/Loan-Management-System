import pg from 'pg';

const connectDatabase = () => {
  return new pg.Pool({
    user: 'postgres',
    password: '121397',
    database: 'lendingapp',
    host: 'localhost',
  });
};

export { connectDatabase };
