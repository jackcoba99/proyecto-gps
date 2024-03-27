const mongoose = require("mongoose");

const dbconnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        
    }).then(() => {
        console.log("Conexión exitosa");
    }).catch((err) => {
        console.log("Error de conexión:", err);
    });
};

module.exports = dbconnect;