const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/mi_base_de_datos', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Conexión a MongoDB establecida correctamente');
})
.catch(err => {
    console.error('Error al conectar a MongoDB:', err);
});

app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});