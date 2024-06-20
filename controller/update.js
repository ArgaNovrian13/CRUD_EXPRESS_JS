const db = require("../controller/koneksi");

const update = (req, res) => {
  const { nama, nim, prodi, kelas, email, fakultas } = req.body;
  const id = req.params.id;
  const sql = `UPDATE data_mahasiswa SET nama = ?, nim = ?, prodi = ?, kelas = ?, email = ?, fakultas = ? WHERE id = ?`;
  db.query(
    sql,
    [nama, nim, prodi, kelas, email, fakultas, id],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send("Ada Kesalahan Kueri Database");
        return;
      } else {
        res.render("update", {
          mahasiswa: { id, nama, nim, prodi, kelas, email, fakultas },
          message: "Data Berhasil Diperbarui",
          redirectUrl: "/read",
        });
      }
    }
  );
};

module.exports = update;
