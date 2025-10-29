const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// API de prueba
app.get("/api", (req, res) => {
  res.json({ mensaje: "Servidor N&G Wear funcionando 🚀" });
});

// API de productos
app.get("/productos", (req, res) => {
  const productos = [
    { nombre: "Camisa Casual", categoria: "Ropa Casual" },
    { nombre: "Pantalón Formal", categoria: "Ropa Formal" },
    { nombre: "Sudadera Personalizada", categoria: "Ropa Personalizada" }
  ];
  res.json(productos);
});

// API de clima de ejemplo
app.get("/clima", (req, res) => {
  res.json({
    ciudad: "Ciudad Nicolás Romero",
    temperatura: 24
  });
});

// Servir index.html para cualquier otra ruta (catch-all)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
