// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

function reverseStr(str) {
    if (str !== undefined) {
        var strSplit = [];
        var word = '';
        var revStr = '';

        for (var i = 0; i < str.length; i++) {
            if (str[i] !== ' ') {
                word += str[i];
            }

            if (str[i] === ' ' || i + 1 === str.length) {
                strSplit.push(word);
                word = '';
            }
        }

        for (var c = strSplit.length - 1; c >= 0; c--) {
            revStr += strSplit[c] + ' ';
        }

        return revStr;

    }
    return 'Invalid input';
}