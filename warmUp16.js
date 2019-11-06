// Given a string text, you want to use the characters of text to form as many instances of 
// the word "balloon" as possible.
// You can use each character in text at most once. 
// Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

/*
	==== Pseudo Code ====
	1- Validate the input to match the constraints
	2- Loop the string and build the word 'balloon' in unordered format
	3- If the built string equals to the word 'balloon' length then
		increment result and clear the string builder.
*/

function giveMeBalloons(str) {
    var magicWord = 'balloon';
    var sb = '';
    var result = 0;

    if (str.length > 0 && str.length <= Math.pow(10, 4) && str.match(/[A-Z]/) === null) {
        for (var letter of str) {
            if (magicWord.includes(letter)) {
                sb += letter;
            }
            if (sb.length === 7) {
                result += 1;
                sb = '';
            }
        }

        return result;
    }

    return 'Invalid Input';
}
