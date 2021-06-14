const express = require('express');
const router = express.Router();

const controller = require('../controllers/tablaextra1.controller');

const Tabla = 'tablaextra1';
const Tablaid = 'ID';
const Tablacod = '';
// const path = '/';
const path = '/my/';

router.get(path+Tabla, controller.lista);
router.get(path+Tabla+'/:TabID', controller.unidad);
router.post(path+Tabla, controller.insertar);
router.put(path+Tabla+'/:TabID', controller.actualizar);
router.delete(path+Tabla+'/:TabID', controller.borrar);
module.exports = router;