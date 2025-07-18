const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Conexión con MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // pon tu contraseña aquí
  database: "c&a",
});

// Ruta para obtener productos
app.get("/api/productos", (req, res) => {
  const sql =
    "SELECT Id AS id,Nombre AS nombre, Descripcion AS descripcion, Imagen AS imagen, Precio As precio, Tipo As tipo FROM productos";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

app.get("/api/productos/ropa-hombre", (req, res) => {
  const sql =
    "SELECT Id AS id,Nombre AS nombre, Descripcion AS descripcion, Imagen AS imagen, Precio As precio, Tipo As tipo FROM productos WHERE Tipo = 'Hombre' OR Tipo = 'Unisex'";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

app.get("/api/productos/ropa-mujer", (req, res) => {
  const sql =
    "SELECT Id AS id,Nombre AS nombre, Descripcion AS descripcion, Imagen AS imagen, Precio As precio, Tipo As tipo FROM productos WHERE Tipo = 'Mujer' OR Tipo = 'Unisex'";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

app.get("/api/productos/ropa-ninos", (req, res) => {
  const sql =
    "SELECT Id AS id,Nombre AS nombre, Descripcion AS descripcion, Imagen AS imagen, Precio As precio, Tipo As tipo FROM productos WHERE Tipo = 'Niño'";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
