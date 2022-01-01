exports.cleaningFilters = [
  /Date: \[/gi, //date filter
  /CR No.:\[/, //CRno
  /.*Name:\[/, //Name
  /.*Ph:\[| \|/, //Phone No
  /.*\| Age:\[/gi, //Age
  /.* CT Value: \[/gi,  //CT value
  /.*\| SRF ID:\[/gi, //Sf Id
  /.*\|BUNo.:\[/gi,
  /.* \(WBC\):/gi,
  /.* Troponin: \[/gi,
  /CRP:/,   
  /.* Chest X-Ray:/,
  /.*RBS/      
];


exports.Filters = [
    /Date: \[.*/g, //date search 
    /CR No.:\[.*/g, //crno line search
    /Primary contact :.*/g, //primary contact search
    /RT-PCR:.*/g, //RTPCR test results line
    /CBC: .*/g,
    /CRP: .*/g
];