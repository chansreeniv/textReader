const express = require('express');

const app = express();

const txt = require('txt');
const fs = require('fs');


app.set('view engine', 'ejs');
app.set('views','views');

app.use(express.urlencoded({extended: false}));

app.use('/', (req, res, next) => {
    res.render('index');
    fs.readFile('textread.txt', () => {
        txt.eachMatch('success', 'PARIMALA', (match, details)=>{
            return '';
        })
    });
})

app.listen(3000);