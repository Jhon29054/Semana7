const express = require('express')
const router = express.Router()

const clienteController = require('../controller/clienteController')
const insumoController = require('../controller/insumoController');
const proveedorController = require('../controller/proveedorController');


router.get('/', clienteController.mostrar)

router.post('/add', clienteController.crear)

router.post('/edit', clienteController.editar)

router.get('/delete/:id', clienteController.eliminar)

router.get('/insumo', insumoController.mostrar);
router.post('/insumo/add', insumoController.crear);
router.post('/insumo/edit', insumoController.editar);
router.get('/insumo/delete/:id', insumoController.eliminar);

router.get('/proveedor', proveedorController.mostrar);
router.get('/proveedor/listar', proveedorController.listar);
router.post('/proveedor/add', proveedorController.crear);
router.post('/proveedor/edit', proveedorController.editar);
router.get('/proveedor/delete/:id', proveedorController.eliminar);


module.exports = router