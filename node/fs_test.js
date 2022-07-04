const fs = require('fs');

fs.readFile('2.txt','utf8', (err, success) => {
    if (err === null) {
        console.log("read success!\n" + success);
    }

    const oldData = success.split(' ');

    const newData = [];

    oldData.forEach(item => {
        newData.push(item.replace("=", ": "));
    });

    fs.writeFile("2.txt", newData.join("\r\n"), (err) => {
        if (err === null) {
            return console.log("write success!");
        }
    });
});