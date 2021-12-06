// exports.Filters = {
//   dateSearch: /Date: \[.*/g,
//   CRNOsearch: /CR No.:\[.*/g,
//   primaryContactSearch: /Primary contact :.*/g,
// };

// exports.CleaningFilters = {
//   date: /Date: \[/gi,
//   crno: /CR No.:\[|Name:\[| Ph:\[| \| |Age:\[/gi,
//   primaryContact: /Primary contact :/gi,
// };

exports.cleaningFilters = [
  /Date: \[/gi,
  /CR No.:\[/,
  /Name:\[/,
  / Ph:\[| \|/,
  / |Age:\[/gi,
];


exports.Filters = [
    /Date: \[.*/g, //date search 
    /CR No.:\[.*/g, //crno line search
    /Primary contact :.*/g, //primary contact search
    /RT-PCR:.*/g //RTPCR test results line
];