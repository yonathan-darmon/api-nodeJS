var mysql = require("mysql")
let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'api-symfony'
});
module.exports=db;