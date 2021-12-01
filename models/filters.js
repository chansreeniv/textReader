exports.Filters = {
    dateSearch: /Date: \[.*/g,
    CRNOsearch: /CR No.:\[.*/g,
    primaryContactSearch: /Primary contact :.*/g    
}

exports.CleaningFilters ={
    date: /Date: \[/gi,
    crno: /CR No.:\[|Name:\[| Ph:\[| \| |Age:\[/gi,
    primaryContact: /Primary contact :/gi    
}

// exports.Filters = [
//     {dateSearch: /Date: \[.*/g},
//     {CRNOsearch:  /CR No.:\[.*/g}
// ]