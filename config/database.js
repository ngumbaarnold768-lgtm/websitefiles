const { Pool } = require('pg');

// PostgreSQL connection pool configuration
const pool = new Pool({
  user: 'your_username', // replace with your PostgreSQL user
  host: 'localhost',
  database: 'your_database', // replace with your database name
  password: 'your_password', // replace with your password
  port: 5432, // default PostgreSQL port
});

// Function to initialize connection pool
const initializePool = async () => {
  try {
    await pool.connect();
    console.log('PostgreSQL connection pool initialized');
  } catch (error) {
    console.error('Error initializing PostgreSQL connection pool:', error);
  }
};

module.exports = { pool, initializePool };