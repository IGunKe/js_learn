const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);

console.log(daysDiff(new Date('2021-05-10'), new Date('2021-11-25')));
// 199
