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
      cleaningFilters
        .map((result) => {
          const cleanedText = textReader.replace(result, "");
            console.log(cleanedText + "cleaned text");
        })
        .filter((result) => {
        });
        // cb(this.cleanedText);
      
    });
  }

  searchText(data) {
    let textFile;
    txt.eachMatch(data, this.textMatch, (match, detail) => {
      textFile = match;
    });
    return textFile;
  }
};
