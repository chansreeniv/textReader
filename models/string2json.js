module.exports = class databaseObj {
  constructor(textString) {
    this.textString = textString;
    console.log("the text string" + this.textString);
    this.converting2JSON = [];
  }

  string2JSON(cb) {
    if (!isNaN(this.textString.slice(0, 9))) {
      this.dateVal();
      // cb(this.dateVal());
    } else {
      this.CRN();
      // cb(this.CRN());
    }
    cb(this.converting2JSON);
  }

  CRN() {
    const CRNO = this.textString.slice(0, 4);
    const name = this.textString.slice(5, 15);
    const phoneNo = this.textString.slice(16, 26);
    const age = this.textString.slice(28, 30);
    this.converting2JSON = JSON.stringify({
      CRNO: CRNO,
      name: name,
      phoneNo: phoneNo,
      age: age,
    });
    console.log(this.converting2JSON + "converting to JSON CRN");
    // cb(converting2JSON);
  }

  dateVal() {
    const date = this.textString.slice(0, 10);
    this.converting2JSON = JSON.stringify({ date: date });
    console.log(this.converting2JSON + "json date");
  }
};
