exports.Filters = {
    dateSearch: /Date: \[.*/g,
    CRNOsearch: /CR No.:\[.*/g
}

exports.CleaningFilters ={
    date: /Date: \[/gi,
    crno: /CR No.:\[|Name:\[| Ph:\[| \| |Age:\[/gi
}

// exports.Filters = [
//     {dateSearch: /Date: \[.*/g},
//     {CRNOsearch:  /CR No.:\[.*/g}
// ]