const fs = require('fs');
const txt = require('txt');
const pdf = require('pdf-parse');
const path = require('path');

const p = path.join(path.dirname(require.main.filename), 'data', 'textread.txt');

module.exports = class Reader{
    constructor(){
    }

    textParser(){
        fs.readFile(p,'utf8', (err, datafile) =>{
           const textReader = this.searchText(datafile);
           let cleanedText = textReader.replace(/CR No.:\[|Name:\[| Ph:\[| \| |Age:\[/gi," ")
           console.log(cleanedText);
        })

        // fs.readFile(p, (err, datafile)=>{
        //     this.pdf2txt(datafile);
        // })
    }

    searchText(data){

        // const textMatch = /Date: \[.*/g; //working 
        const textMatch = /CR No.:\[.*/g;
        let textFile = 0; 
        txt.eachMatch(data, textMatch, (match, detail) => {
        textFile = match;
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