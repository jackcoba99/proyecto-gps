const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre: String,
    cedula: String,
    telefono: String,
    email: String,
    contrasena: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;