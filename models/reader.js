const fs = require('fs');
const path = require('path');
const txt = require('txt');

module.exports = class Reader{
    constructor(){

    }

    edit(){
        const p = path.join(path.dirname(require.main.filename), 'data', 'textread.txt');
        fs.readFile(p,'utf8', (err, datafile) =>{
            const fileData = datafile;
            // console.log(fileData);
            this.txtReader(fileData);
        })
    }

    txtReader(data){
       const textFile = txt.eachMatch(data, 'paamanabha58@oksbi', (match, detail) => {return 'myUPI';})
       console.log(textFile);
    }
}