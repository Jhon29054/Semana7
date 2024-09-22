const Cliente = require("../model/Cliente");

module.exports.mostrar = async (req, res) => {
    try {
        const clientes = await Cliente.find({});
        return res.render('index', { clientes });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al mostrar los clientes'
        });
    }
}

module.exports.crear = async (req, res) => {
    const cliente = new Cliente({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        direccion: req.body.direccion
    });

    try {
        await cliente.save();
        res.redirect('/');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear al cliente'
        });
    }
}

module.exports.editar = async (req, res) => {
    const id = req.body.id_editar.trim();
    const { nombre, apellidos, direccion } = req.body;

    try {
        await Cliente.findByIdAndUpdate(id, { nombre, apellidos, direccion });
        res.redirect('/');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar el cliente',
        });
    }
}

module.exports.eliminar = async (req, res) => {
    const id = req.params.id;

    try {
        await Cliente.findByIdAndRemove(id);
        res.redirect('/');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar al cliente'
        });
    }
}

