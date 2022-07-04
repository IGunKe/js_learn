//导入数据库模块
const db = require('../db/index');
//导入加密模块，对密码进行加密处理
const bcrypt = require('bcryptjs');
// 注册用户的处理函数
exports.regUser = (req, res) => {
    //获取用户信息
    const userInfo = req.body;
    //进行合法性校验
   /*  if (!userInfo.username || !userInfo.password) {
        /* return res.send({
            status: 1,
            msg: '用户名或密码不可为空！'
        }); 
        return res.cc('用户名或密码不可为空！');
    } */
    const sql1 = 'select count(*) as total from ev_users where username=?';
    db.query(sql1, [userInfo.username], (err, result) => {
        if (err) {
            /* return res.send({
                status: 1,
                msg: err.message
            }); */
            return res.cc(err);
        }
        console.log(result[0].total);
        if (result[0].total === 1)
        {
            /* return res.send({
                status: 1,
                msg: '用户名被占用'
            }); */
            return res.cc('用户名被占用');
        }
        //确认用户名可用之后，调用 bcrypt.hashSync
        //(明文密码, 随机盐的长度) 方法，对用户的密码进行加密处理
        userInfo.password = bcrypt.hashSync(userInfo.password, 10);
        const sql2 = "insert into ev_users(username, password) values(? ,?)";
        db.query(sql2, [userInfo.username,userInfo.password], (err, result) => {
            if (err) {
                /* return res.send({
                    status: 1,
                    msg: err.message
                }); */
                res.cc(err);
            }
            return res.send('reguser ok');
        })
        
    }); 
}

// 登录的处理函数
exports.login = (req, res) => {
    res.send('login ok');
}