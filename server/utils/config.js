require("dotenv").config();
const port = process.env.PORT;

const secretOrKey = process.env.JWT_SECRET;
const expire = process.env.JWT_EXPIRATION;

const BD = {
    type: 'mysql',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    server: process.env.DATABASE_HOST,
    database: process.env.MYSQL_DATABASE
};

const IPCPMSERVER = process.env.IPCPMSERVER;
const URLCPMSERVER = process.env.URLCPMSERVER;
const URLWINSERVER = process.env.URLWINSERVER;

module.exports = {
    port,
    BD,
    URLCPMSERVER,
    URLWINSERVER,
    IPCPMSERVER,
    secretOrKey,
    expire
}