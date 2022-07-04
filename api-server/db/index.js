//导入MySQL
const mysql = require('mysql');

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '031941319',
    database: 'school'
});

module.exports = db;