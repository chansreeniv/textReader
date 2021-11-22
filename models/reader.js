const fs = require('fs');
const path = require('path');
const txt = require('txt');
const pdf = require('pdf-parse');

module.exports = class Reader{
    constructor(){

    }

    edit(){
        const p = path.join(path.dirname(require.main.filename), 'data', 'textread.txt');
        fs.readFile(p,'utf8', (err, datafile) =>{
           const textReader = this.txtReader(datafile);
           console.log(textReader);
        })

        // fs.readFile(p, (err, datafile)=>{
        //     this.pdf2txt(datafile);
        // })
    }

    txtReader(data){

        // const textMatch = /Date: \[.*/g; //working 
        const textMatch = /Name:\[.*/g;
        let textFile = 0; 
        txt.eachMatch(data, textMatch, (match, detail) => {
        textFile = match;
        return match;
    })
        return textFile;
    ;}

    // pdf2txt(datafile){
    //     pdf(datafile).
    //     then((res)=>{
    //         console.log(res);
    //     })
    // }
}