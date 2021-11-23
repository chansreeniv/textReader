const express = require('express');

const app = express();

const Reader = require('./models/reader');

app.set('view engine', 'ejs');
app.set('views','views');

app.use(express.urlencoded({extended: false}));

app.use('/', (req, res, next) => {
    res.render('index');
    const reader = new Reader;
    reader.edit();
    // reader.pdf2txt();
})

app.listen(3000);