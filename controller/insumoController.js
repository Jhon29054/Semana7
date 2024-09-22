const Insumo = require("../model/Insumo");

module.exports.mostrar = async (req, res) => {
    try {
        const insumos = await Insumo.find({});
        return res.render('insumos', { insumos });
    } catch (error) {
        return res.status(500).json({
            message: 'Error al mostrar los insumos'
        });
    }
}

module.exports.crear = async (req, res) => {
    const insumo = new Insumo({
        nominsumo: req.body.nominsumo,
        idProveedor: req.body.idProveedor,
        preUni: req.body.preUni,
        stock: req.body.stock
    });

    try {
        await insumo.save();
        res.redirect('/insumo');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear el insumo'
        });
    }
}

module.exports.editar = async (req, res) => {
    const id = req.body.id_editar.trim();
    const { nominsumo, idProveedor, preUni, stock } = req.body;

    try {
        await Insumo.findByIdAndUpdate(id, { nominsumo, idProveedor, preUni, stock });
        res.redirect('/insumo');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al actualizar el insumo',
        });
    }
}

module.exports.eliminar = async (req, res) => {
    const id = req.params.id;

    try {
        await Insumo.findByIdAndRemove(id);
        res.redirect('/insumo');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar el insumo'
        });
    }
}
