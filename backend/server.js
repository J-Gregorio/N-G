const conectarDB = require("./db");
conectarDB();

const express = require("express");
const cors = require("cors");
const path = require("path");

const Producto = require("./models/producto");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../frontend")));


app.get("/insertar-productos", async (req, res) => {
  try {
    await Producto.create([
      {
        nombre: "Camisa Casual Azul",
        categoria: "Ropa Casual",
        precio: 299,
        imagen: "pazul.jpg"
      },
      {
        nombre: "Playera Básica Negra",
        categoria: "Ropa Casual",
        precio: 199,
        imagen: "pnegra.jpg"
      },
      {
        nombre: "Sudadera con Capucha",
        categoria: "Ropa Casual",
        precio: 399,
        imagen: "sudadera.jpg"
      },
      {
        nombre: "Pantalón Formal Negro",
        categoria: "Ropa Formal",
        precio: 499,
        imagen: "pannegro.png"
      },
      {
        nombre: "Camisa Formal Blanca",
        categoria: "Ropa Formal",
        precio: 349,
        imagen: "cablanca.png"
      },
      {
        nombre: "Saco Formal Gris",
        categoria: "Ropa Formal",
        precio: 899,
        imagen: "sagris.png"
      },
      {
        nombre: "Sudadera Personalizada Logo NG",
        categoria: "Ropa Personalizada",
        precio: 450,
        imagen: "sudng.png"
      },
      {
        nombre: "Playera Personalizada Tu Diseño",
        categoria: "Ropa Personalizada",
        precio: 250,
        imagen: "ppersonalizada.png"
      },
      {
        nombre: "Gorra Personalizada",
        categoria: "Ropa Personalizada",
        precio: 180,
        imagen: "gpersonalizada.png"
      },
      {
        nombre: "Chamarra Casual Beige",
        categoria: "Ropa Casual",
        precio: 650,
        imagen: "chbeige.png"
      }
    ]);

    res.send("10 productos insertados correctamente");
  } catch (err) {
    res.status(500).send("Error al insertar productos");
  }
});


app.get("/productos", async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al traer productos" });
  }
});


app.get("/clima", (req, res) => {
  res.json({
    ciudad: "Ciudad Nicolás Romero",
    temperatura: 24
  });
});


app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
