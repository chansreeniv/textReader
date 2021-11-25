const fs = require("fs");
const txt = require("txt");

module.exports = class Reader {
  constructor(filePath, filter) {
    this.filePath = filePath;
    this.textMatch = filter;
  }

  cleanSearchResult(cb) {
    fs.readFile(this.filePath, "utf8", (err, datafile) => {
      const textReader = this.searchText(datafile);
      this.cleanedText = textReader.replace(
        /CR No.:\[|Name:\[| Ph:\[| \| |Age:\[/gi,
        " "
      );
      console.log(this.cleanedText + "cleaned text");
      cb(this.cleanedText);
    });
    return this.cleanedText;
  }

  searchText(data) {
    let textFile = 0;
    txt.eachMatch(data, this.textMatch, (match, detail) => {
      textFile = match;
      return match;
    });
    return textFile;
  }
};
