const mysql = require("mysql");

const db = mysql.createConnection({
	host: "127.0.0.1",
	user: "root",
	password: "031941319",
	database: "school",
});

//测试代码
/* db.query('select * from student where sid>12', (err, result) => {
    if (err) return console.error(err.message);
    console.log(result);
});
const insert = 'insert into student(sid,sname,sex) values(?,?,?)';

db.query(insert, [22, "qwe", "女"], (err, result) => {
    if (err) return console.log(err.message);
    if (result.affectedRows === 1) {
        console.log('insert ok');
    }
});

db.query('select * from student where sid=22', (err, result) => {
    if (err) return console.log(err.message);
    console.log(result);
});
 */
/* const insertData = {
    sid: 200,
    sname: 'asdas'
}
db.query('insert into student set ?', insertData, (err, result) => {
    if (err) return console.log(err.message);
    if (result.affectedRows === 1) {
        console.log('insert ok');
    }
});
db.query('select * from student where sid=200', (err, result) => {
    console.log(result);
}); */

/* const sqlUpdate = {
    sex: '男'
}

db.query('update student set ? where sid=?', [sqlUpdate,200], (err, result) => {
    if (err) return console.log(err.message);
    console.log(result);
}); */

db.query("delete from student where sid=?", 22, (err, result) => {
	if (err) return console.log(err.message);
	console.log(result);
});
