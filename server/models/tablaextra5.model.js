const Sequelize = require("sequelize")
const db = require("../database/db")

// https://grokonez.com/node-js/sequelize-orm-build-crud-restapis-with-nodejs-express-sequelize-mysql
// http://docs.sequelizejs.com/manual/tutorial/models-definition.html


module.exports = db.sequelize.define(
  'tablaextra5', {
    TabID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    TabSeleccionado: {
      type: Sequelize.TINYINT,
      allowNull: false
    },
    TabCodigo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    TabNombre: {
      type: Sequelize.STRING,
      allowNull: false
    },
    TabCampo1: {
      type: Sequelize.STRING,
      allowNull: true
    },
    TabCampo2: {
      type: Sequelize.STRING,
      allowNull: true
    },
    TabCampo3: {
      type: Sequelize.STRING,
      allowNull: true
    },
    TabCampo4: {
      type: Sequelize.STRING,
      allowNull: true
    },
    TabCampo5: {
      type: Sequelize.STRING,
      allowNull: true
    },
    TabCampoRelacion: {
      type: Sequelize.STRING,
      allowNull: true
    },
  }, {
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,

    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done). paranoid will only work if
    // timestamps are enabled
    //   paranoid: true,

    // don't use camelcase for automatically added attributes but underscore style
    // so updatedAt will be updated_at
    //   underscored: true,

    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,

    // define the table's name
    //   tableName: 'my_very_custom_table_name'
  }
);