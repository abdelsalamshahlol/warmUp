# Warm Ups

## First Warm Up

### Questions

1- Create a third variable called z, assign x + y to it, and display it.

2- calculate the area of a square using varaiables.


## Second Warm Up

### Questions

1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

2- Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly you can only add one at each summetion, you'll need to use recursion in this.


## Third Warm Up

### Questions

1- Create arrays in the global scope consisting of strings that represent:
- name of females in your class
- name of males in your class
- name of your class instructors 
 
2- Write a function that takes an array as an argument and returns the element that is located in the middle of that array.

3- Change all the numbers in the array to be multiplied by two for even indexes.


## Fourth Warm Up

### Questions

1- Write a function that takes a string as an input and returns the reverse of each letter followed by a number starting from zero(solve it using while loop).
example:    

```javascript
reverseStr('hello'); // "o1l2l3e4h"
```

2- Write a function that takes array of strings and returns an array of the strings that have the same length
example:

```javascript
['hi','hello','welcome','hy'] // ["hi","hy"]
```


## Fifth Warm Up

### Questions

 1- create a data model to represent your classmates:
 - think of different attributes of your classmates? what do all of them have ?
 - create a factory function.
 - create an array to hold the classmates that you created and what you created to it .  
 - write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
 - write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
 - calculate the number of male friends that your class have by writing a function called nbOfMale.
 - Write a function searchMates that, given a query and an array of Mates, searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.


## Sixth Warm Up

### Questions

1- implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n starting from 0, e.g.:

```javascript
mult(3); // => 6
mult(4); // => 24

function mult(n) {
 // your code is here
}
```

2 - Use a while loop to build a single string with the numbers 1 through n separated by the number next to the current number. Have it return the new string.

```javascript
// eg => 1 2 2 3 3 4 4 5 5 6 6 ...
```


## Seventh Warm Up

### Questions

 1- using ```+``` operator combine your partner first and last name.

 2- find if the number 13 is a multiple of 3 or not.

 3- calculate the average age of the follwing ages ``` [13,14,13,15,16,17,19,13,16,15] ```.

 4- calculate your age in seconds.


## Eighth Warm Up

### Questions

1- create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array. For example:

```javascript
array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false
```  

## Nineth Warm Up

### Questions

1- Create an HTML file.

2- Create a CSS file.

3- link the CSS file to the HTML file.

4- The page should have a header, body and footer.

5- Change the background color of the body to be blue.

6- Insert Three images next to each other.

7- Create Two buttons and use different font family for each button.

8- Create an unordered list with three anchor tags in it.

9- Place In the footer a copyright claimer.

10- Have Fun.

## Tenth Warm Up

### Questions

1- Create an HTML, CSS, JS files and connect them together.

2- Create a text field and a button below it in HTML file

3- Create an empty unordered list  below the button

4- Create two CSS classes, each with a different color property

5- Using jQuery, create a function, that takes the input from the text field, creates a list item and add it to the unordered list, then add a class to the added item alternatively (So first time Class1 then next time Class2 then Class1 and repeat)

## Eleventh Warm Up

### Questions

1- Create an HTML, CSS and JS files and connect them together.

2- Create two buttons one that says “Left” and one that say “Right”.

3- Create a button below them that says “Create”.

4- Create two unordered lists next to each other.

5- Write a jQuery function that creates a new element in the left unordered list if the “left” button was pressed before the “create” button and to the right unordered list if the “right” button was pressed before the “create” button.

6- Style the two unordered lists in CSS.

## Twelveth Warm Up

### Questions
Your task is to write a function that returns the smallest and largest integers in an unsorted string.
Your function will receive two input arguments:
 - A string comprised of integers in an unknown range; these numbers
   will be out of order.
 - An integer value representing the size of the range.

Output:

 - Your function should return the starting (minimum) and ending
   (maximum) numbers of the range in the form of an array/list comprised
   of two integers.
   
```javascript
    let inputString = '1568141291110137';
    mysteryRange(inputString,10) // [6,15]
    // -The 10 numbers in this string are:
	// -15 6 8 14 12 9 11 10 13 7
	// -Therefore the range of numbers is from 6 to 15
```
Technical Details
 - The maximum size of a range will be 100 integers
 -  The starting number of a range will be: 0 < n < 100

    
## Thirteen Warm Up

### Questions

1- Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer.
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.  Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. 

So **1990** is rendered 

> "MCMXC" (1000 = M, 900 = CM, 90 = XC)

 and **2008** is rendered 

> "MMVIII" (2000 = MM, 8 = VIII)

.
The Roman numeral for **1666, "MDCLXVI"**, uses each letter in descending order.

 Example:
```javascript  
solution('XXI'); // should return 21 
```
| Symbol | Value  |
|--|--|
|I  | 1 |
|V  |5  |
|X  |10  |
|L  |50  |
|C  |100  |
|D  |500  |
|M  |1,000  |

2- Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
Examples:
```javascript
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
```


3- In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
Example

```javascript
console.log(filter_list([1,2,'a','b'])) //=> [1,2]
console.log(filter_list([1,'a','b',0,15])) //=> [1,0,15]
console.log(filter_list([1,2,'aasf','1','123',123])) //=> [1,2,123]
```

## Fourteenth Warm Up

### Questions

Say you have an array for which the i element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction
(i.e., buy one and sell one share of the stock), design an algorithm to find the
**maximum** profit.

**Note that you cannot sell a stock before you buy one.**

 - Example 1:
   

       Input: [7,1,5,3,6,4] Output: 5 

   ##### Explanation: 
   Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
            Not 7-1 = 6, as selling price needs to be larger than buying price.
            
 - Example 2:
   

       Input: [7,6,4,3,1] Output: 0 

   ##### Explanation: 
   In this case, no transaction is done, i.e. max profit = 0.

## Fifteenth Warm Up

### Questions

1- Write a function that takes a string as an argument and returns the string reversed word by word. 

##### Example: 

```javascript
reverseStr("hi there how is the weather today") 
==> "today weather the is how there hi"
```

**Note : you can`t use any built-in functions .**


## Sixteenth Warm Up

### Questions

Given a string text, you want to use the characters of text to form as many instances of the word ***"balloon"*** as possible. 

You can use each character in text at most once. Return the **maximum** number of instances that **can be formed**.

#### Example 1:
```javascript 
// Input: text = "nlaebolko"
// Output: 1
```
#### Example 2:
```javascript 
// Input: text = "loonbalxballpoon"
// Output: 2
```
#### Example 3:
```javascript
// Input: text = "RebootKamp"
// Output: 0
 ```

##### Constraints:

> 1 <= text.length <= 10^4

Text consists of **lower case** English letters only.
