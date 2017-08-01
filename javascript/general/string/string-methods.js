let name = "marcell";
// charAt() 
console.log(name.charAt(4));

// concat 
console.log('Marcell'.concat('Monteiro', 'Cruz'));

// endsWith
console.log('Marcell'.endsWith('cell'));

// Includes searchString, position to start searching
console.log('Marcell'.includes('Marc'));

// indexOf str.indexOf(searchValue[, fromIndex])
// return -1 if not found otherwise returns the index
console.log('Marcell'.indexOf('el'));

// lasIndexOf str.lastIndexOf(searchValue[, fromIndex])
// same deal as indexOf
console.log('Marcellcell'.lastIndexOf('cell'));

// localeCompare
// referenceStr.localeCompare(compareString[, locales[, options]])
// Checks if a word or character comes before of after some other word
// positive number if its after, negative number if its before
console.log('Marcell'.localeCompare('Joao'));
// Exemplo sort a array
var unsorted = 'update Link Add feature improve Report'.split(' ');
unsorted.sort((a, b) => a.localeCompare(b)); //  ["Add", "feature", "improve", "Link", "Report", "update"]

// str.match(regexp)
console.log('Marcell'.match(/cell/));

// str.repeat()
'Marcell'.repeat(3) //MarcellMarcellMarcell
console.log('Marcell'.repeat(3));

// str.replace(regexp|substr, newSubstr|function)
// the original string remains unchanged
// I can also pass a function 
console.log('MarcellMarcell'.replace(/cell/, 'kell'));
// write with a function





