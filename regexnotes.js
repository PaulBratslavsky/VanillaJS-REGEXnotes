console.log('REGEX');

// REGULAR EXPRESSIONS: USED FOR PATTERN MATCHING


// FUNCTIONS
let re = /hello/i;      // i = case insensitive flag
let re1 = /hello/g;     // g = search GLOBAL find more then one

// console.log(re);
// console.log(re.source);

const testText1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laboriosam quo commodi voluptate eum aliquam.';
const testText2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laboriosam quo hello commodi voluptate eum hello aliquam.';

// exec() - Returns result in an array if match or null
// const result = re1.exec(testText2);

// show result
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Returns true or false if found
// const result = re.test(testText2);
// console.log(result);

// match() - Returns an array or null when string match found
//const str = 'hello';
//const result = testText2.match(re);
//console.log(result);

// search() - Returns index of the first match if not found returns -1
//const result = testText1.search(re);
//console.log(result);

//const result2 = testText2.search(re);
//console.log(result2);

// replace() - will return new string with matched pattern replaced
//const newString = testText2.replace(re1, "########"); // need to use g flag
//console.log(testText2);
//console.log(newString);

// METACHARACTER SYMBOLS IN REGEX



// Leteral Characters

// REGEX
let regex = /hello/; // Does not match case sensitive
regex = /hello/i; // Does match i flax case insensitive


// Meta Characters
regex = /^h/i; // ^ means that the match has to start with h very beginning 
regex = /.com$/i; // $ means that the match has to end with h very beginning 
regex = /^www/;
regex = /h...o/; // . = wildcard can match any one character
regex = /hllo/i; // * = wildcard can match any character 0 or more times (missing characters)
regex = /gre?a?y/i; // ? = can match any specified character in question 
regex = /gre?a?y\?/i; // Escaping REGEX Characters

// Using Brackets [] - character sets
regex = /gr[ae]y/i; // Must match one of the characters in the brackets
regex = /[Gg]r[ae]y/;
regex = /gr[^ae]y/i; // ^ Carrot insid Brackets = ! not equal 
regex = /[A-Z]bc/; // Will match any first upprt letter with A through Z
regex = /[A-Za-z]bc/; // Will match any first upprt letter with A through Z
regex = /[0-9]/i; // Match number range;
regex = /[0-9a-z][0-9a-z][0-9a-z]/i; // Match number  and letter range;

// Using Braces {} = Quitifiers
regex =/Hel{2}o/; // Set spaces to check {2} checks 2 space
regex = /[0-9a-z]{3}/i; // Set spaces to check {3} checks 3 space
regex = /[0-9a-z]{1,6}/; // Set spaces to check {1,6} checks range between 1 to 6 spaces match found between any range so not all 6
regex = /[0-9]{1,}/; // must occur atleast 1 time

// Parentheses () - used for grouping
regex = /^([0-9][a-f]){3}$/i;

// Shorthand Character Classes
regex = /\w+/;      // Word Character - alphanumeric or _
regex = /\W+/;      // None Word Character - alphanumeric or _
regex = /\d+/;      // Digit - will match any digit
regex = /\D+/;      // None Digit - will match any digit
regex = /\s+/;      // White Space - will match any white space
regex = /\S+/;      // None White Space - will match any white space
regex =/hell\b/i;   // Word Boundary

// Assertions
regex = /x(?=y)/;   // Will match x only if it is followed by y
regex = /x(?!y)/;   // Will match x only if it is NOT followed by y

// String to match
let str = 'hello and welcome to hell xv';


// Log Result 
const result = regex.exec(str);
console.log(result, 'RESULT');


// Function Call
reTest(regex,str);


// Helper Function
function reTest(regex,str) {
    if (regex.test(str)) {
        console.log(`${str} matches ${regex.source}`);
    } else {
        console.log(`${str} does NOT match ${regex.source}`);
    }
}







