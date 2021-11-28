const path = require('path');

const Reader = require('../models/reader');
const DatabaseObj = require('../models/string2json');
const Filter = require('../models/filters');

const filter = Filter.Filters;
const filePath = path.join(path.dirname(require.main.filename), 'data', 'textread.txt');

exports.getParsedText = (req, res, next) =>{
    let JSONoutput = 'no Value';
    const parsing = (filter, cb) => {
        new Reader(filePath, filter)   
        const reader = new Reader(filePath, filter);
        reader.cleanSearchResult((ParsedResult)=>{
            const databaseObj = new DatabaseObj(ParsedResult);
            databaseObj.string2JSON(JSONresult =>{
                console.log(JSONresult + "jsonresult")
                JSONoutput = JSONresult;
            });
        });
    }
    // filter.map(parsing);
    parsing(filter.dateSearch);
    parsing(filter.CRNOsearch);
    res.render('index',{response: JSONoutput});
}