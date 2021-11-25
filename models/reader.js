const fs = require("fs");
const txt = require("txt");
// const pdf = require('pdf-parse');

module.exports = class Reader {
  constructor(filePath) {
    this.filePath = filePath;
  }

  textParser(cb) {
    fs.readFile(this.filePath, "utf8", (err, datafile) => {
      const textReader = this.searchText(datafile);
      this.cleanedText = textReader.replace(
        /CR No.:\[|Name:\[| Ph:\[| \| |Age:\[/gi,
        " "
      );
      console.log(this.cleanedText + 'cleaned text');
      cb(this.cleanedText);
    });

    // fs.readFile(p, (err, datafile)=>{
    //     this.pdf2txt(datafile);
    // })
    return this.cleanedText
  }

  searchText(data) {
    // const textMatch = /Date: \[.*/g; //working
    const textMatch = /CR No.:\[.*/g;
    let textFile = 0;
    txt.eachMatch(data, textMatch, (match, detail) => {
      textFile = match;
      return match;
    });
    return textFile;
  }

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
};
