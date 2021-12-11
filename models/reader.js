const fs = require("fs");
const txt = require("txt");

const Filters = require("./filters");
const cleaningFilters = Filters.cleaningFilters;

module.exports = class Reader {
  constructor(filePath, filter) {
    this.filePath = filePath;
    this.textMatch = filter;
    this.filter = filter;
  }

  cleanSearchResult(cb) {
    fs.readFile(this.filePath, "utf8", (err, datafile) => {
      const textReader = this.searchText(datafile);
      console.log(this.filter);
      console.log("search Pattern " + textReader);
      // if (textReader.slice(0, 4) === "Date") {
      //   this.cleanedText = textReader.replace(cleaningFilters.date, "");
      //   console.log("the Date" + this.cleanedText);
      // } else if (textReader.slice(0, 4) === "CR N") {
      //   console.log("its cR NO");
      //   this.cleanedText = textReader.replace(cleaningFilters.crno, " ");
      //   console.log(this.cleanedText + "cleaned text");
      // } else if (textReader.slice(0, 4) === "Prim") {
      //   console.log("primary contact");
      //   this.cleanedText = textReader.replace(
      //     cleaningFilters.primaryContact,
      //     " "
      //   );
      // }

      cleaningFilters.map((result)=>{
        // console.log(result + 'Match')
        const cleanedText = textReader.replace(result, " ");
        // console.log(cleanedText + 'cleaned text');
      })
      // cb(this.cleanedText);
    });
  }

  searchText(data) {
    let textFile = 0;
    txt.eachMatch(data, this.textMatch, (match, detail) => {
      textFile = match;
    });
    return textFile;
  }
};
