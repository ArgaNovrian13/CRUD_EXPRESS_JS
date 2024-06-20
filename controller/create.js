const db = require("../controller/koneksi");

const create = (req, res) => {
  const { nama, nim, prodi, kelas, email, fakultas } = req.body;
  const sql = `INSERT INTO data_mahasiswa (nama, nim, prodi, kelas, email, fakultas) VALUES (?, ?, ?, ?, ?, ?)`;
  db.query(sql, [nama, nim, prodi, kelas, email, fakultas], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Ada Kesalahan Kueri Database");
      return;
    } else {
      res.render("create", {
        message: "Data Berhasil Ditambahkan",
        redirectUrl: "/read",
      });
    }
  });
};

module.exports = create;
