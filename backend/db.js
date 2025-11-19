const mongoose = require("mongoose");

const uri = "mongodb+srv://fcruz121212_db_user:N1qo2ox4N69zZt3b@cluster0.jjumxfx.mongodb.net/NG?retryWrites=true&w=majority&appName=Cluster0";

async function conectarDB() {
    try {
        await mongoose.connect(uri);
        console.log("Conectado a MongoDB Atlas");
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
    }
}

module.exports = conectarDB;
