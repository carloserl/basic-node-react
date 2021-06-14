const express = require("express");
const router = express.Router();

const controller = require("../controllers/usuario.controller");

const Tabla = "usuario";
const Tablaid = "TraID";
const Tablacod = "";
// const path = '/';
const path = "/";

//mysql
router.post(path + Tabla, controller.add);

router.get(path + Tabla, controller.list);

module.exports = router;
