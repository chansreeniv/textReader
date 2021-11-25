const Reader = require('../models/reader');
const path = require('path');
const DatabaseObj = require('../models/string2json');

const filePath = path.join(path.dirname(require.main.filename), 'data', 'textread.txt');

exports.getParsedText = (req, res, next) =>{
    const reader = new Reader(filePath);
    reader.textParser((result)=>{
        res.render('index',{response: result}); 
        const databaseObj = new DatabaseObj(result);
        databaseObj.string2json();
    });
}