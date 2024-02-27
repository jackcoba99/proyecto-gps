const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');

const app = express();
const port = 3000;

// Middleware para analizar solicitudes con datos en formato JSON
app.use(bodyParser.json());

// Middleware para analizar solicitudes con datos en formato de formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Conexión a la base de datos MongoDB
mongodb.MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        const db = client.db('proyecto');
        const collection = db.collection('usuarios');

        // Ruta para el registro de usuarios
        app.post('/registro', async (req, res) => {
            try {
                // Verificar si la contraseña y la confirmación de contraseña coinciden
                if (req.body.contrasena !== req.body.confirmar_contrasena) {
                    return res.status(400).send('Las contraseñas no coinciden.');
                }

                // Eliminar el campo de confirmación de contraseña antes de guardar en la base de datos
                delete req.body.confirmar_contrasena;

                await collection.insertOne(req.body);
                res.sendStatus(200);
            } catch (error) {
                console.error(error);
                res.sendStatus(500);
            }
        });
    })
    .catch(error => console.error(error));

app.listen(port, () => console.log(`Servidor en ejecución en http://localhost:${port}`));