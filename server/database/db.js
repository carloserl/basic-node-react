const Sequelize = require("sequelize")
const db = {}
const config = require('../utils/config');


const sequelize = new Sequelize(config.BD.database, config.BD.user,config.BD.password, {
    host: config.BD.server,
    dialect: config.BD.type,
    operatorsAliases: false,
    logging:false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db 