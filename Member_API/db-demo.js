const mysql = require('mysql2');
var dotenv = require('dotenv');
dotenv.config();

const connection  = mysql.createConnection({
    host: '127.0.0.1',
    port: '3307',
    user: 'root',
    password : 'DB비밀번호',
    database: 'Youtuber',
});
module.exports = connection