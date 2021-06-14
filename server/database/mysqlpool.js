const mysql = require('mysql');
const config = require('../utils/config');


var pool = mysql.createPool({
    connectionLimit : 20,
    host : config.BD.server,
    user :config.BD.user,
    password: config.BD.password,
    database :config.BD.database,
    debug    :  false
});  



pool.getConnection((err, connection) => {
  if (err) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
          console.error('Database connection was closed.')
      }
      if (err.code === 'ER_CON_COUNT_ERROR') {
          console.error('Database has too many connections.')
      }
      if (err.code === 'ECONNREFUSED') {
          console.error('Database connection was refused.')
      }
  }
  if (connection) connection.release()
  return
})
module.exports = pool