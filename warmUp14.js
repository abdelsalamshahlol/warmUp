/*
Say you have an array for which the i element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction
(i.e., buy one and sell one share of the stock), design an algorithm to find the
maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

/*
	==== Notes ====
	- The the element at index = price
	- The index of the price = day
	- Max profit = Selling price - Buying price

	|Day(i+1)|Price(elem)|
	|1 + 1   |		1	 |
	|4 + 1   |		6	 |
	
	==== Instructions ====

	1- Find the lowest price and its index
	2- Find the highest price and its index
	3- Get the profit

	==== Pseudocode ====   
	

*/

var maxProfit = function(prices) {
    var buying = {
        price: prices[0],
        day: prices.indexOf(prices[0])
    }
    var selling = {
        price: 0,
        day: 0
    }

    for (var i = 0; i < prices.length; i++) {
        if (prices[i] < buying.price) {
            buying.price = prices[i];
            buying.day = i + 1;
        } else if (prices[i] > selling.price && i > buying.day) {
            selling.price = prices[i];
            selling.day = i + 1;
        }
    }

    return selling.price > buying.price ? selling.price - buying.price : 0;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7,6,4,3,1]));


