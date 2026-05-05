// a)
let arr = [1,5,7,12,6,10];
let FirstEven = arr.find(val => val % 2 === 0);
console.log(FirstEven);

// b)
let arr1 = [26,5,7,12,6,10];
let y = arr1.findIndex(val => val > 25);
console.log(y);

// c)
let arr2 = [3, 5, 6, 8, 9, 11];
let Notdivisible = arr2.filter(val => val % 3 !== 0);
console.log(Notdivisible);

// d)
let arr3 = [45, 12, 67, 3, 29];
let sortAsc = arr3.sort((a,b) => a-b);
console.log(sortAsc);

// e)
let arr4 = [26,5,7,12,6,10];
let sortDesc = arr4.sort((a,b) => b-a);
console.log(sortDesc);

// f)
let arr5 = [2, 4, 6, 8];
let Double = arr5.map(num => 2*num);
console.log(Double);

// g)
let arr6 = [1, 2, 3, 4];
let sum = arr3.reduce((acc,curr) => acc + (curr * curr),0);
console.log(sum);