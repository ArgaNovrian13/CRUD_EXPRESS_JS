const db = require("../controller/koneksi");

const read = (req, res) => {
  const sql = `SELECT * FROM data_mahasiswa`;
  db.query(sql, (err, results) => {
    if (err) {
      console.error(err); // Menangani error dengan log untuk debugging
      res.status(500).send("Error in database query");
      return;
    }
    res.render("read", { mahasiswa: results });
  });
};

module.exports = read;
