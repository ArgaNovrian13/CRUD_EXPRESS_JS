const db = require("../controller/koneksi");

const deleteData = (req, res) => {
  const id = req.params.id;
  const sql = `DELETE FROM data_mahasiswa WHERE id = ?`;
  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Ada Kesalahan Kueri Database" });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ message: "Data Tidak Ditemukan" });
    } else {
      res.status(200).json({ message: "Data Berhasil Dihapus" });
    }
  });
};

module.exports = deleteData;
