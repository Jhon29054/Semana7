const mongoose = require('mongoose')
const Schema = mongoose.Schema

const proveedorSchema = new Schema ({
    nominsumo: { type: String, maxlength: 150 },
    idProveedor: { type: Schema.Types.ObjectId, ref: 'proveedores' },
    preUni : { type: Number, min: 0 },
    stock : { type: Number, min: 0 },
}, { versionKey : false })

module.exports = mongoose.model('insumos', proveedorSchema )