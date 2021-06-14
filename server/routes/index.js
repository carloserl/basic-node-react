const express = require("express");
const router = express.Router();

//sequealize
router.use(require("./hello.route"));
router.use(require("./usuario.route"));
router.use(require("./tablaextra1.route"));
router.use(require("./tablaextra2.route"));
router.use(require("./tablaextra3.route"));
router.use(require("./tablaextra4.route"));
router.use(require("./tablaextra5.route"));

module.exports = router;
