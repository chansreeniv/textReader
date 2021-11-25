const Reader = require('../models/reader');
const path = require('path');
const DatabaseObj = require('../models/string2json');

const filePath = path.join(path.dirname(require.main.filename), 'data', 'textread.txt');

exports.getParsedText = (req, res, next) =>{
    const reader = new Reader(filePath);
    reader.textParser((ParsedResult)=>{
        const databaseObj = new DatabaseObj(ParsedResult);
        databaseObj.string2json(JSONresult =>{
            res.render('index',{response: JSONresult}); 
        });
    });
}