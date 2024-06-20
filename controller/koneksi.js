const mysql = require("mysql");
require("dotenv").config();

const dbConfig = {
  host: process.env.DB_HOST, // Misalnya: localhost
  user: process.env.DB_USER, // Misalnya: root
  password: process.env.DB_PASSWORD, // Misalnya: password
  database: process.env.DB_NAME, // Misalnya: crud_express
};

// Membuat koneksi ke database
const db = mysql.createConnection(dbConfig);

// Menghubungkan ke database
db.connect((err) => {
  if (err) {
    console.error(`Database gagal terhubung: ${err.stack}`);
    return;
  }
  console.log(`Terhubung ke database dengan ID: ${db.threadId}`);
});

module.exports = db;
