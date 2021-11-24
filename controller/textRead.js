const Reader = require('../models/reader');

exports.getParsedText = (req, res, next) =>{
    res.render('index');
    const reader = new Reader;
    reader.textParser();
}