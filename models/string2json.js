module.exports = class databaseObj{
    constructor(textString){
        this.textString = textString;
    }
    string2jsonCRN(cb){
        const CRNO = this.textString.slice(0,4);
        const name = this.textString.slice(5,15);
        const phoneNo = this.textString.slice(16,26);
        const age = this.textString.slice(28,30);
        const converting2JSON = JSON.stringify({CRNO: CRNO, name: name, phoneNo: phoneNo, age:age});
        console.log(converting2JSON);
        cb(converting2JSON);
    }
}