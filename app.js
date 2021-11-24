const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views','views');

const routing = require('./routes/routing');

app.use(express.urlencoded({extended: false}));

// app.use('/', (req, res, next) => {
//     res.render('index');
//     const reader = new Reader;
//     reader.edit();
//     // reader.pdf2txt();
// })

app.use(routing);

app.listen(3000);