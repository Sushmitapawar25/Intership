// Task 1
// map function

const arr = [2,3,4];
const arr1 = arr.map(function(element){
    // console.log('Element is',element);
    // return element + 1;
    // or
    return doubleNumber(element);
    return isEven(element);
});
console.log(arr);
console.log(arr1);

function doubleNumber(num){
    return 2 * num;
}

function isEven(num){
    return num%2 == 0;
}

// for string
const names =  ['Bob','Jack','Ana','Tim'];
const arr2 = names.map(function(element){
    return element.toUpperCase();
});
console.log(arr2);

// a 
// i] given array create an array with the squares of the numbers
const nums = [2,3,4,5];
const arr3 = nums.map(function(element){
    return element* element;
});
console.log(arr3);

// ii] create an array of numbers , create an array with the absolute values of the numbers.
const numbers = [3,10,-5,0,-22,6];
// absolute vales n>=0 it is n
// otherwise it is -1*n
const nums1 = numbers.map(function(element){
    if(element >= 0){
        return element;
    }else{
        return -1 * element;
    }
});
console.log(nums1);

// iii] array of string, create an array where each string is enclosed between <p> and </p>
const  strArr = ['Hi','XYZ','Bye','A'];

const arr4 = strArr.map(function(element){
    return '<p>' + element + '</p>';
});
console.log(arr4);

// iv] array of strings and a number maxlen, create an array <br>
// where each string has a maximum length of maxlen.If the length of any string 
// is more than maxlen, the first maxlen characters of that string are taken

const strArr1 = ['Hi','Hello','Bye','Good','A'];

let maxLen = 3;
const arr5 = strArr1.map(function(element){
    if(element.length <= maxLen){
        return element;
    }else{
        return element.substring(0,maxLen);
    }
}) ;
console.log(arr5);

// V 
// Array of JSON where each JSOn is the sales data with 
// the fields name,quantity and price.Create an array of JSon 
// where each JSON has the fields product and value.
// Sort the array in descending order based on value 
let prods = [
    {name: 'Pepsi', qty:20, price:15},
    {name: 'Coke', qty:15, price:10},
    {name: 'Maggi', qty:10, price:12},
    {name: 'Colgate', qty:6, price:60},
    {name: 'Nescafe', qty:30, price:9},
];
// json name and value
const arr6 = prods.map(function(element){
    let v1 = element.qty * element.price;
    let json1 = {name:element.name, value: v1};
    return json1;
});
arr6.sort(compAscValue);
console.log(arr6);

function compAscValue(p1,p2){
    if(p1.value > p2.value){
        return -1;
    }else if(p1.value < p2.value){
        return 1;
    }else{
        return 0;
    }
}

// vi 
// given an array of strings where each string is the 
// name of the person. Create an array of JSON where each JSON has 
// the fields firstName and Last name.
// NOte: the names given in the strings are of the type JAck or bob smith.

const named = ['Jack','Bob Smith','Ana cook','Tim'];

const arr7 = named.map(function(element){
    return makeNameJSON(element);
});

function makeNameJSON(name){
    let index = name.indexOf(' ');
    let json = {};
    if(index < 0){
        json.firstName = name;
        json.lastName = '';
    }
    else{
        json.firstName = name.substring(0, index);
        json.lastName = name.substring(index + 1);
    }
    return json;
}
console.log(arr7);


// Reduce 

const redu = [2,3,4];
let arr8 = redu.reduce(function(acc,curr){
    console.log(acc,curr);
    return curr + acc;
},0);
console.log(arr8);

const nmes = ['Jack','Tom','Anna','Bob','Julia'];
let val1 = nmes.reduce(function(acc,curr){
    console.log(acc,curr);
    // return curr + acc + ':';
    return acc + curr + ':';
},'');
console.log(val1);

// i
// Given an array of numbers, calculate the sum of their cubes.

const cube = [2,3,4,5];
let sum = cube.reduce(function(acc,curr){
    let cubee = curr * curr * curr;
    return acc + cubee;
},0);
console.log(sum);

// ii
// Given an array of numbers, find the largest number in the array
const numbss = [6,10,2,7,5,9];

let max = numbss.reduce(function(acc,curr){
    if(curr > acc){
        return curr;
    }else{
        return acc;
    }
},0);
console.log(max);

// iii
// Given an array of strings, find the smallest string in the array
const namess = ['Steve','Bob','Ed','Jack','Ana'];

let val2 = namess[0];
let smallStr = namess.reduce(function(acc,curr){
    if(curr.length < acc.length){
        return curr;
    }else{
        return acc;
    }
},val2);
console.log(smallStr);

// iv
// Given an array of JSON where each JSON is teh Sales data with the fields name,quantity and price.Calculate the TotalSales value
let prods1 = [
    {name: 'Pepsi', qty:20, price:15},
    {name: 'Coke', qty:15, price:10},
    {name: 'Maggi', qty:10, price:12},
    {name: 'Colgate', qty:6, price:60},
    {name: 'Nescafe', qty:30, price:9},
];
// total Sales value
let totalSales = prods1.reduce(function(acc,curr){
    let v1  = curr.qty * curr.price;
    return v1 + acc;
},0);
console.log(totalSales);

//  v 
// given an array of JSON is the sales data with the fields name, quantity and price
// find the product whose sales value is the maximum

let Salesd = [
    {name: 'Pepsi', qty:20, price:15},
    {name: 'Coke', qty:15, price:10},
    {name: 'Maggi', qty:10, price:12},
    {name: 'Colgate', qty:6, price:60},
    {name: 'Nescafe', qty:30, price:9},
];
 let maxVal = Salesd.reduce(function(acc,curr){
    let v2 = curr.qty * curr.price;
    let accValue = acc.qty * acc.price;
    if(v2 > accValue){
        return curr;
    }else{
        return acc;
    }
 });
 console.log(maxVal);


//  Task 2
const arrT2 = [4,8,12,20,6];

const resT2 = arrT2.map(function(eleT2){
    return eleT2 * 2;
});

console.log(resT2);

// Task 3
const arrT3 = [4,8,12];

const resT3 = arrT3.map(function(eleT3){
    return eleT3 * eleT3;
});

console.log(resT3);

// Task 4
const arrT4 = [4,8,12,3,5,7];

const resT4 = arrT4.map(function(eleT4){
    if(eleT4 % 2 === 0){
        return eleT4;
    }else{
        return 0;
    }
});

console.log(resT4);

// Task 5

const arrT5 = [4,8,12,3,5];

const resT5 = arrT5.map(function(eleT5){
    if(eleT5 % 2 === 0){
        return "Even";
    }else{
        return "Odd";
    }
});

console.log(resT5);

// Task 6
const arrT6 = ["Hi","Hello","Bye"];

const resT6 = arrT6.map(function(eleT6){
    return eleT6 + eleT6;
});

console.log(resT6);

// Task 7
const arrT7 = [
{name:"Mark", age:23},
{name:"Steve", age:28},
{name:"Mary", age:25}
];

const resT7 = arrT7.map(function(eleT7){
    return eleT7.name + " is " + eleT7.age + " years old";
});

console.log(resT7);

// Task 8
const arrT8 = ["Mark","James","Martha"];

const resT8 = "<ul>" + arrT8.map(function(eleT8){
    return "<li>" + eleT8 + "</li>";
}).join("") + "</ul>";

console.log(resT8);

// Task 9
const arrT9 = [
{id:101,name:"Mark"},
{id:105,name:"Steve"},
{id:78,name:"James"}
];

const resT9 = arrT9.map(function(eleT9){
    return "<button onClick=clicked(" + eleT9.id + ")>" + eleT9.name + "</button>";
}).join(" ");

console.log(resT9);

// Task 10
const arrT10 = [
{id:101,name:"Mark"},
{id:105,name:"Steve"},
{id:78,name:"James"}
];

const resT10 = arrT10.map(function(eleT10){
    return "<p class='id" + eleT10.id + "'>" + eleT10.name + "</p>";
}).join(" ");

console.log(resT10);

// Task 11
const arrT11 = [
{name:"Mary",marks:72},
{name:"Anita",marks:75},
{name:"Thomas",marks:81}
];

const resT11 = arrT11.map(function(eleT11){
    return "<tr><td>" + eleT11.name + "</td><td>" + eleT11.marks + "</td><td><button onClick=show('" + eleT11.name + "')>Show More</button></td></tr>";
}).join("");

console.log(resT11);

// Task 12
const arrT12 = [
{fname:"Jack",city:"London"},
{fname:"Mary",city:"Amsterdam"},
{fname:"Ed",city:"Paris"}
];

const resT12 = arrT12.map(function(eleT12){
    return eleT12.city;
});

console.log(resT12);

// Task 13
const arrT13 = [
{fname:"Jack",lname:"Smith"},
{fname:"Mary",lname:"Markle"}
];

const resT13 = arrT13.map(function(eleT13){
    return {
        fname: eleT13.fname,
        lname: eleT13.lname,
        fullname: eleT13.fname + " " + eleT13.lname
    };
});

console.log(resT13);

// Task 14
const arrT14 = [4,8,12,20,6];

// sum
let sumT14 = arrT14.reduce(function(a,b){
    return a+b;
},0);

// product
let prodT14 = arrT14.reduce(function(a,b){
    return a*b;
},1);

// max
let maxT14 = arrT14.reduce(function(a,b){
    return a>b ? a : b;
});

// min
let minT14 = arrT14.reduce(function(a,b){
    return a<b ? a : b;
});

// count >10
let countT14 = arrT14.reduce(function(acc,val){
    if(val > 10){
        return acc+1;
    }else{
        return acc;
    }
},0);

console.log(sumT14, prodT14, maxT14, minT14, countT14);

// Task 15
const arrT15 = ["Hi","Hello","Bye"];

// concat
let res15a = arrT15.reduce(function(a,b){
    return a + "::" + b;
});

// length sum
let res15b = arrT15.reduce(function(a,b){
    return a + b.length;
},0);

// first char
let res15c = arrT15.reduce(function(a,b){
    return a + b[0];
},"");

console.log(res15a, res15b, res15c);

// Task 16
const arrT16 = [
{name:"Mark", age:23},
{name:"Steve", age:28},
{name:"Mary", age:25},
{name:"Bill", age:34}
];

// a) sum of ages
let sum16 = arrT16.reduce(function(acc16, ele16){
    return acc16 + ele16.age;
},0);

// b) count age > 27
let count16 = arrT16.reduce(function(acc16b, ele16b){
    if(ele16b.age > 27){
        return acc16b + 1;
    }
    return acc16b;
},0);

// c) youngest
let young16 = arrT16.reduce(function(a16,b16){
    return a16.age < b16.age ? a16 : b16;
});

// d) oldest
let old16 = arrT16.reduce(function(a16d,b16d){
    return a16d.age > b16d.age ? a16d : b16d;
});

// e) name starts with M
let countM16 = arrT16.reduce(function(acc16e, ele16e){
    if(ele16e.name.startsWith("M")){
        return acc16e + 1;
    }
    return acc16e;
},0);

console.log(sum16, count16, young16, old16, countM16);

// Task 17
const arrT17 = ["Hello","React","Java","Python","Hibernate","JavaScript"];

// 17.1 join with #
let res171 = arrT17.reduce(function(a171,b171){
    return a171 + "#" + b171;
});

// 17.2 count 'a'
let res172 = arrT17.reduce(function(acc172, ele172){
    let cnt = 0;
    for(let i=0;i<ele172.length;i++){
        if(ele172[i] === 'a'){
            cnt++;
        }
    }
    return acc172 + cnt;
},0);

// 17.3 longest string
let res173 = arrT17.reduce(function(a173,b173){
    return a173.length > b173.length ? a173 : b173;
});

// 17.4 starts with ch
let ch17 = "J";
let res174 = arrT17.reduce(function(acc174, ele174){
    if(ele174.startsWith(ch17)){
        return acc174 + 1;
    }
    return acc174;
},0);

console.log(res171, res172, res173, res174);