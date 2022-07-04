//导入自定义格式化时间模块
const data_time = require('./date_format');

const dt = new Date();

const newdt = data_time.dateformat(dt);

//使用dayjs模块格式化
const dayjs = require('dayjs');

const dtime = dayjs().format('YYYY-MM-DD HH:mm:ss');

console.log(dtime);