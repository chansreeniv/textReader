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
           let cleanedText = textReader.replace(/Name:\[| Ph:\[| \| |Age:\[/gi," ")
           console.log(cleanedText);
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
        console.log(detail);
        return match;
    })
        return textFile;
    ;}

    // pdf2txt(datafile){
    //     const p = path.join(path.dirname(require.main.filename), 'data', 'CBC.pdf');
    //     fs.readFile(p, (err, datafile) =>{
    //         pdf(datafile).
    //         then((res)=>{
    //             console.log(res);
    //         })
    //     //    console.log(textReader);
    //     })
        
    // }
}