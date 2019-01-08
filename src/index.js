import numeral from 'numeral';

// Using the numeral library, set a number as '1000' and then format it to a currency value
var courseValue = numeral(1000).format('$0,0.00');
// display it on the console with a sentence, be sure to use the "`", instead of the quote or single quote
// the ` tells JavaScript to parse the variables within
console.log(`What would I pay for this course: ${courseValue}`);
