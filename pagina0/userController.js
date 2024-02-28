const User = require('./modelo');

const UserController = {
    registrarUsuario: (req, res) => {
        const { nombre, cedula, telefono, email, contrasena } = req.body;
        const usuario = new User({ nombre, cedula, telefono, email, contrasena });

        usuario.save((err) => {
            if (err) {
                console.error('Error al registrar usuario:', err);
                res.status(500).send('Error al registrar usuario');
            } else {
                console.log('Usuario registrado correctamente');
                res.status(200).send('Usuario registrado correctamente');
            }
        });
    }
};

module.exports = UserController;