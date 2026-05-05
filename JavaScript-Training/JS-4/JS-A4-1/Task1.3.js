/* A variable name has the name of a user. 
   If the variable is an empty string or null,
   make it have the value Guest.Use logical operators
   instead of if.*/

let name ='Jack';
name = name || 'Guest';
console.log(name);

/* You are given input data where the values
   entered by a user are provided in an array of strings.
   Use map to creates clean array.Any string is null
   or empty string should be replaced by 'NA'.
   Use logical operators instead of if.
*/

const arr = ['A','Hello','','B','','C'];

const arr1 = arr.map(function(val){
    return val || 'NA';
});
console.log(arr1);


/* You are given grade1 and grade2 which are strings
   Use them to compute the final grade.FInal grade is grade1
   (if it is not empty),else it is grade2(if it is not empty)
   else it shouldbe D.Use logical operators insted of if.
*/

let grade1 = 'A'; //A  //''
let grade2 = 'B'; //'' //''

let finalGrade = grade1 || grade2 || 'D';
console.log(finalGrade);

/* Given an array of JSON, with each JSON having the 
   fields grade1 and grade2. Use map to create an array
   of final grades.Use logical operators instead of if.
*/

let sts = [
   {gr1:'A',gr2:'B'},
   {gr1:'', gr2:'C'},
   {gr1:'B',gr2:''},
   {gr1:'C',gr2:'B'},
   {gr1:'', gr2:''}
];

const arr2 = sts.map(function(val){
   return {finalGrade : val.gr1 || val.gr2 || 'D'};
});

console.log(arr2);
