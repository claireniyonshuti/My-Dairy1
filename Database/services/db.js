const pg = require('pg');

const config = {
  user: 'postgres', 
  database: 'mydiary',
  password: 'claire',
  port: 5432,
  max: 10, 
  idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
  console.log('connected to the Database');
});

const createTables = () => {
  const entryTable = `CREATE TABLE IF NOT EXISTS
      DiaryEntry(
        entry_id SERIAL PRIMARY KEY,
        entry_title VARCHAR(128) NOT NULL,
        entry_date VARCHAR(128) NOT NULL,
        entry_view VARCHAR(128) NOT NULL,
        entry_post VARCHAR(128) NOT NULL,
        entry_content VARCHAR(128) NOT NULL
      )`;

      const userTable = `CREATE TABLE IF NOT EXISTS
      DairyUsers(
        user_id SERIAL PRIMARY KEY,
        names VARCHAR(128) NOT NULL,
        email VARCHAR(128) NOT NULL,
        username VARCHAR(128) NOT NULL,
        new_password VARCHAR(128) NOT NULL,
        confirm_password VARCHAR(128) NOT NULL
      )`;
      
      const loginTable = `CREATE TABLE IF NOT EXISTS
      DairyUsers(
        user_id SERIAL PRIMARY KEY,
        username VARCHAR(128) NOT NULL
        password VARCHAR(128) NOT NULL,
        
      )`;

  pool.query(`${entryTable};${userTable};${loginTable};`)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

pool.on('remove', () => {
  console.log('client removed');
});



module.exports = {
  createTables,
  pool,
};



require('make-runnable');