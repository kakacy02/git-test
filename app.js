const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
fs.readFile('./data.txt', {encoding:'utf8'}, (err, data)=> {
    if(!err) {
        console.log(data);
    } else {
        console.log(err.message);
    }
});