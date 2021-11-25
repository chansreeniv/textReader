const path = require('path');

const Reader = require('../models/reader');
const DatabaseObj = require('../models/string2json');
const Filter = require('../models/filters');

const filter = Filter.Filters.CRNOsearch;
const filePath = path.join(path.dirname(require.main.filename), 'data', 'textread.txt');

exports.getParsedText = (req, res, next) =>{
    const reader = new Reader(filePath, filter);
    reader.cleanSearchResult((ParsedResult)=>{
        const databaseObj = new DatabaseObj(ParsedResult);
        databaseObj.string2json(JSONresult =>{
            res.render('index',{response: JSONresult}); 
        });
    });
}