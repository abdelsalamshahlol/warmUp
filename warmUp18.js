// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"


var mysteryFunction = function(str) {
    var letters = {};
    var splitStr = str.split('');
    var result = '';

    splitStr.forEach(function(val, key) {
        if (letters[val] !== undefined) {
            letters[val] = letters[val] + 1;
        } else {
            letters[val] = 1;
        }
        result += letters[val];
    });

    return result;
}

console.log(mysteryFunction('Hello, World!'), mysteryFunction('Hello, World!') === '1112111121311')
console.log(mysteryFunction('aaaaaaaaaaaa'), mysteryFunction('aaaaaaaaaaaa') === '123456789101112')