const objectmodel = require("../models/usuario.model");
const userController = {};



userController.add = (req, res) => {
  const {
    UsuUsuario,
    UsuNombre,
    UsuClave
  } = req.body;
  objectmodel.create({
    UsuUsuario,
    UsuNombre,
    UsuClave
  }).then(usr => {
    // Send created customer to client
    res.json(usr);
  });
};

userController.list = (req, res) => {

  console.log("list usuario");

  objectmodel.findAll().then(usuario => {
    res.json(usuario);
  });
};


module.exports = userController;