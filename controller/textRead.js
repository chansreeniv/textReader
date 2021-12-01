const path = require('path');

const Reader = require('../models/reader');
const DatabaseObj = require('../models/string2json');
const Filter = require('../models/filters');

const filter = Filter.Filters;
const filePath = path.join(path.dirname(require.main.filename), 'data', 'textread.txt');

let combineAll = [];

exports.getParsedText = (req, res, next) =>{
    const parsing = (filter) => {
        new Reader(filePath, filter)   
        const reader = new Reader(filePath, filter);
        reader.cleanSearchResult((parsedResult)=>{
            console.log(parsedResult + 'parsed resuit');
            combineAll.push(parsedResult);
            console.log(combineAll + 'all combined');
        });
    }
    // filter.map(parsing);
    parsing(filter.CRNOsearch);
    parsing(filter.dateSearch);
    parsing(filter.primaryContactSearch);
    res.render('index',{response: "combineAll"});
}

// {
//         const databaseObj = new DatabaseObj(ParsedResult);
//         databaseObj.string2JSON(JSONresult =>{
//             console.log(JSONresult + "jsonresult")
//             JSONoutput = JSONresult;
//         });
//     }