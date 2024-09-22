const mongoose = require('mongoose')
const Schema = mongoose.Schema

const proveedorSchema = new Schema ({
    nombrecia: { type: String, maxlength: 50 }
}, { versionKey : false })

module.exports = mongoose.model('proveedores', proveedorSchema )