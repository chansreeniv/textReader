const path = require('path');

const Reader = require('../models/reader');
const DatabaseObj = require('../models/string2json');
const Filter = require('../models/filters');

const filter = Filter.Filters;
const filePath = path.join(path.dirname(require.main.filename), 'data', 'textread.txt');

exports.getParsedText = (req, res, next) =>{
    const parsing = (filter) => {
        new Reader(filePath, filter)   
        const reader = new Reader(filePath, filter);
        reader.cleanSearchResult((ParsedResult)=>{
            const databaseObj = new DatabaseObj(ParsedResult);
            databaseObj.string2jsonCRN(JSONresult =>{
                res.render('index',{response: JSONresult}); 
            });
        });
    }
    parsing(filter.CRNOsearch);
    // parsing(filter.dateSearch);
}