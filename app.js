const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const db = require("./controller/koneksi");
const read = require("./controller/read");
const create = require("./controller/create");
const update = require("./controller/update");
const deleteData = require("./controller/delete");
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Rute untuk halaman utama
app.get("/", (req, res) => {
  res.render(path.join(__dirname, "index"));
});
app.get("/index", (req, res) => {
  res.render(path.join(__dirname, "index"));
});
// Rute untuk menampilkan data
app.get("/read", read);

// Rute untuk menampilkan tambah data
app.get("/create", (req, res) => {
  res.render(path.join(__dirname, "views/create"));
});

// Rute untuk menambah data
app.post("/create", create);

// Rute untuk menampilkan update data
app.get("/update/:id", (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM data_mahasiswa WHERE id = ?`;
  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Ada Kesalahan Kueri Database");
      return;
    }
    if (results.length === 0) {
      res.status(404).send("Data Tidak Ditemukan");
      return;
    }
    res.render(path.join(__dirname, "views/update"), { mahasiswa: results[0] });
  });
});

// Rute untuk memperbarui data
app.post("/update/:id", update);

// Rute untuk menghapus data
app.delete("/delete/:id", deleteData);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
