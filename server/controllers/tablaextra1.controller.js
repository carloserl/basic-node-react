const objectmodel = require("../models/tablaextra1.model");
const objectconsult = require("../models/configuracioncampo.model");
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
  //console.log('TabNombre: '+TabNombre);
  
  let dataType, dataSize;

   objectconsult.findOne({
    attributes: ['TraValidacion', 'TraTamano'], 
    where: { TraTabla: "tablaextra1"}, 
    raw: true
    }
  ).then(obj => {
    dataType = Object.values(obj)[0];
    dataSize = Object.values(obj)[1];
    console.log("dataType= " + dataType);
    console.log("dataSize= " + dataSize);
    if ((typeof TabNombre === dataType) && (dataSize >= 0) && (TabNombre.length >= dataSize)){
      console.log("llego y es verdadero");
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
    }else{
      console.log("llego y es falso");
      console.log(info.message);
      errors.TabNombre = 'Tipo de dato invalido';
      next(new ValidationError(errors));
      //res.status(300).end('Tipo de dato invalido');
    }
  }
  );

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
            name: "Update TablaExtra1"
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
