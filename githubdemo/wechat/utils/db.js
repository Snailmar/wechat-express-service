const mysql = require("mysql2");
const config=require('../config/sql')
const pool = mysql.createPool({
    ...config,waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
module.exports=pool