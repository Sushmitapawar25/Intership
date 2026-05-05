/* Given 2 numbers a and b, write an expression using
   ternary operator which logs Equal if they are equal
   and different otherwise on the console
*/

let a = 10;
let b = 10;

a === b ? console.log('SAME') : console.log('DIFFERENT');

/* Given 2 strings s1 and s2, write an expression
   using ternary operator which assign the longer
   string to a variable x
*/

let str1 = "React";
let str2 = "Node";
let x = str1.length > str2.length ? str1 : str2;
console.log(x);

/* Given an array of numbers, count the number of events
   in it . Use reduce and ternary operator.
*/

const array = [2,4,3,5,6,8];
const Carr = array.reduce(function(acc,curr){
    return curr % 2 === 0 ? acc+1 : acc;
},0);
console.log(Carr);

/* Given an array of strings, use map and ternary 
   operator to create another array of strings where
   if any string does not start with a, add an x in front of it.
*/

const strs = ['a','b','ab','c','aaaa','baba'];
const ans = strs.map(function(val){
    return val.startsWith('a') ? val : 'x'+ val;
});
console.log(ans);

/* Given an array of numbers, use map and ternary operator 
   to create another array of their absolute values.
*/

let nums = [2,-7,4,-22,-5,6];
const ans1 = nums.map(function(val){
    return val < 0 ? -1 * val : val;
});
console.log(ans1);