const Proveedor = require("../model/Proveedor");

// Para mostrar datos de proveedores
module.exports.mostrar = async (req, res) => {
    try {
        const proveedores = await Proveedor.find({});
        return res.render('proveedores', { proveedores });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al mostrar los proveedores'
        });
    }
}

// Para obtener todos los proveedores en formato JSON
module.exports.listar = async (req, res) => {
    try {
        const proveedores = await Proveedor.find({});
        return res.json(proveedores);
    } catch (error) {
        return res.status(500).json({
            message: 'Error al obtener los proveedores'
        });
    }
};

// Para crear nuevo proveedor
module.exports.crear = async (req, res) => {
    const proveedor = new Proveedor({
        nombrecia: req.body.nombre,
        // Agrega aquí otros campos según tu modelo
    });

    try {
        await proveedor.save();
        res.redirect('/proveedor');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear el proveedor'
        });
    }
}

// Para actualizar un proveedor existente
module.exports.editar = async (req, res) => {
    const id = req.body.id_editar.trim();
    const nombre = req.body.nombre_editar.trim();
    // Agrega aquí otros campos según tu modelo

    try {
        await Proveedor.findByIdAndUpdate(id, { nombre });
        res.redirect('/proveedor');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar el proveedor',
        });
    }
}

module.exports.eliminar = async (req, res) => {
    const id = req.params.id;

    try {
        await Proveedor.findByIdAndRemove(id);
        res.redirect('/proveedor');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar el proveedor'
        });
    }
}
