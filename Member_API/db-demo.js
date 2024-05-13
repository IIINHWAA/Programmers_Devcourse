const mysql = require('mysql2');
const PASSWORD = "비밀번호"

const connection  = mysql.createConnection({
    host: '127.0.0.1',
    port: '3307',
    user: 'root',
    password : PASSWORD,
    database: 'Youtuber',
});
module.exports = connection