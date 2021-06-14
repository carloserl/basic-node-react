const config = require('../utils/config');

let BDConnection = null;

if (config.BD.type == 'mssql'){
     BDConnection = '../database/sqlserver';
}else{
    BDConnection = '../database/mysql';
}

module.export = BDConnection;