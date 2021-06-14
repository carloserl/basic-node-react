const objectmodel = require("../models/tablaextra2.model");
const config = require('../utils/config')
const userController = {};
const passport = require('passport');
const ValidationError = require('../errors/validationError');

userController.lista = (req, res) => {
  objectmodel.findAll().then(obj => {
    res.json(obj);
  });
};

  // GET one
  userController.unidad = (req, res) => {
    const TabID = req.params.TabID;
    objectmodel.findOne({ where: { TabID: TabID } }).then(obj => {
        res.json(obj);
      });
  };

//post
userController.insertar = (req, res) => {
  const { TabSeleccionado, TabCodigo, TabNombre, TabCampo1, TabCampo2, TabCampo3, TabCampo4, TabCampo5, TabCampoRelacion } = req.body;
  console.log('TabNombre: '+TabNombre);
  objectmodel.create({
    TabSeleccionado: TabSeleccionado, 
    TabCodigo: TabCodigo, 
    TabNombre: TabNombre, 
    TabCampo1: TabCampo1, 
    TabCampo2: TabCampo2, 
    TabCampo3: TabCampo3, 
    TabCampo4: TabCampo4, 
    TabCampo5: TabCampo5, 
    TabCampoRelacion: TabCampoRelacion
  }).then(() => {
    res.status(200).end('Data grabada correctamente');
    //console.log('Paso el then insert, codigo: '+TabCodigo);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};


//Update
userController.actualizar = (req, res) => {
  const TabID = req.params.TabID;
  const { TabSeleccionado, TabCodigo, TabNombre, TabCampo1, TabCampo2, TabCampo3, TabCampo4, TabCampo5, TabCampoRelacion } = req.body;
  
  objectmodel.update( { 
    TabSeleccionado: TabSeleccionado,
    TabCodigo: TabCodigo,
    TabNombre: TabNombre,
    TabCampo1: TabCampo1,
    TabCampo2: TabCampo2,
    TabCampo3: TabCampo3,
    TabCampo4: TabCampo4,
    TabCampo5: TabCampo5,
    TabCampoRelacion: TabCampoRelacion
   }, 
				 { where: { TabID: TabID } }
			   ).then(() => {
          res.status(200).json({
            status: "OK",
            message: "Data actualizada",
            name: "Update TablaExtra2"
    })
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
  
}


userController.borrar = (req, res) => {
  const TabID = req.params.TabID;
  objectmodel.destroy({
    where: { TabID: TabID }
  }).then(() => {
    res.status(200).send('deleted successfully, id = ' + TabID);
  });
}


module.exports = userController;
