const fs = require('fs');
fs.readFile('./data.txt', {encoding:'utf8'}, (err, data)=> {
    if(!err) {
        console.log(data);
    }
});