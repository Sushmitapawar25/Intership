// Task 1
// a

//  i
const nums = [7,9,11,24,25,12];
// find
let evenno = nums.find(function(num){
    console.log('Checking', num);
    return num % 2 == 1;
});
console.log(evenno);
// findIndex
let index = nums.findIndex(function(num){
    return num % 2 == 1;
});
console.log(index);
// filter
let farr = nums.find(function(num){
    console.log('Filter for',num);
    return num % 2 == 1;
});
console.log(farr);


// ii
const numbers = [2,5,10,12,18,21];
let x = 11;
let num1 = numbers.find(function(n){
    // return n>x; or
    return isBig(n,x);
});
console.log('FInd',num1);
let index1 = numbers.findIndex(function(n){
    // return n>x;
    return isBig(n,x);
});
console.log('Index',index1);
let arr = numbers.filter(function(n){
    // return n>x;
    return isBig(n,x);
});
console.log('Filter',arr);

function isBig(n,comp){
    return n>comp;
}

// iii
const names = ['Jack','Ana','Sam','Tim','Julia','July'];
const ch = 'A';
let name1 = names.find(function(name){
    // return name[0] ==ch;
    return isStarting(name,ch);
});
console.log('Find',name1);

 let index2 = names.findIndex(function(name){
    return isStarting(name,ch);
 });
 console.log("Index",index2);

 let arr1 = names.filter(function(name){
    return isStarting(name,ch);
 })
console.log(arr1);

function isStarting(name,start){
    return name[0] == start;
}

// iv

function findName(namesArr, toFind){
    let name1 = namesArr.find(function(name){
         return isStarting(name,toFind);
    });
    return name1;
}
console.log('Using fn',findName(names,ch));


function findNameIndex(namesArr, toFind){
    let index = namesArr.findIndex(function(name){
         return isStarting(name,toFind);
    });
    return index;
}
console.log('Using fn',findName(names,ch));


function filterNames(namesArr, toFind){
    let arr = namesArr.filter(function(name){
         return isStarting(name,toFind);
    });
    return arr;
}
console.log('Using fn',findName(names,ch));

// v
let emps = [
    {name:'Jack',city:'Delhi',dept:'Tech'},
    {name:'Ana',city:'London',dept:'Tech'},
    {name:'Sam',city:'London',dept:'HR'},
    {name:'Tim',city:'Delhi',dept:'HR'},
    {name:'Bon',city:'Delhi',dept:'Tech'},
    {name:'Mary',city:'London',dept:'Tech'},
];
let city = 'Delhi';
let dept = 'Tech';
let emp1 = emps.find(function(emp){
    return emp.city == city && emp.dept == dept;
});
console.log(emp1);

let Indexemp = emps.findIndex(function(emp){
    return emp.city == city && emp.dept == dept;
});
console.log(Indexemp);

let arremp = emps.filter(function(emp){
    return emp.city == city && emp.dept == dept;
});
console.log(arremp);

// Spread operator
const Fname = ['Jack','Bob','Mary'];
const id = [2,10,24,5,6];

const Fname1 = [...Fname];
const id1 = [...id];

console.log(Fname);
console.log('Copy',Fname1);


console.log(id);
console.log('Copy',id1);

// join

console.log(Fname);
console.log(Fname.join('@'));
console.log(id.join('&'));

// sorting a Number

const arrt = [2,10,24,5,6];
const arrtCopy = [...arrt];
arrt.sort(compNumbersAsc);
// Asc
function compNumbersAsc(numb1, numb2){
    if(numb1 > numb2){
        return 1; //later
    }
    else if(numb1 < numb2){
        return -1;  //earlier
    }
    else{
        return 0;  //same
    }
}
// desc
function compNumbersDesc(numb1, numb2){
    if(numb1 > numb2){
        return -1; //earlier
    }
    else if(numb1 < numb2){
        return 1;  //later
    }
    else{
        return 0;  //same
    }
}
console.log(arrtCopy);
console.log(arrt);

// Sorting string

const mygo = ['Jack','Tim','Anna','Mark'];
mygo.sort(CompNameAsc);

function CompNameAsc(name1,name2){
    return name1.localeCompare(name2);
    // negative if names1 comes before name2
    // 0 if same
    // .positive if name1 comes after name2
}

function CompNameDesc(name1,name2){
    return -1 * name1.localeCompare(name2);
    // negative if names1 comes before name2
    // 0 if same
    // .positive if name1 comes after name2
}
console.log(mygo);

// Sort the array in ascending order of the length of Strings

const mygot = ['Jack','Tim','Anna','Mark','Ed'];
const mygotCopy = [...mygot];
mygot.sort(compLengthAsc);
mygotCopy.sort(compLengthAsc);

function compLengthAsc(str1, str2){
    let len1 = str1.length;
    let len2 = str2.length;

    if(len1 > len2){
        return 1;
    }else if(len1 < len2){
        return -1;
    }else{
        return 0;
    }
}
console.log(mygot);
console.log(mygotCopy);

// Sort the array in desecending order of the sales value for the day

let salesData = [
    {name: 'Pepsi', qty:20, price:15},
    {name: 'Coke', qty:15, price:10},
    {name: 'Maggi', qty:10, price:12},
    {name: 'Colgate', qty:6, price:60},
    {name: 'Nescafe', qty:30, price:9},
];

// descending order of value - qty * price
salesData.sort(compValueDesc);
function compValueDesc(pr1,pr2){
//     console.log(pr1);
//     console.log(pr2);

    let v1 = pr2.qty * pr1.price;
    let v2 = pr2.qty * pr2.price;
    if(v1 > v2){
        return -1;
    }
    else if(v1 < v2){
        return  1;
    }else {
        return 0;
    }
}
console.log(salesData);

// Number mincut as parameter and return array having detail of students who scored more than mincut sortted in descending order
const stData = [
    {name: 'Jack',marks1:33, marks2:25},
    {name: 'Bob',marks1:40, marks2:32},
    {name: 'Mary',marks1:41, marks2:40},
    {name: 'Tom',marks1:24, marks2:25},
    {name: 'Harry',marks1:30, marks2:35},
    {name: 'Anna',marks1:32, marks2:37},
];

let mincut = 59;
function getStData(arr,cut){
    // filter and then sort in desc
    let arr1 = arr.filter(function(st){
        return (st.marks1+st.marks2) > cut;
    });
    arr1.sort(compTotalDesc);
    return arr1;
}
const farrr = getStData(stData,mincut);
console.log(farrr);

function compTotalDesc(st1, st2){
    let tot1 = st1.marks1 + st1.marks2;
    let tot2 = st2.marks1 + st2.marks2;
    if(tot1 > tot2){
        return -1;
    }else if(tot1 <  tot2){
        return 1;
    }else{
        return 0;
    }
}

// Tassk 2.1

const numsArrX = [5,10,22,35,30,9,45];
// a
let valA = numsArrX.find(function(n){
    console.log("Checking A:", n);
    return n == 10;
});
console.log("find A:", valA);

let idxA = numsArrX.findIndex(function(n){
    return n == 10;
});
console.log("index A:", idxA);

// b
let valB = numsArrX.find(function(n){
    console.log("Checking B:", n);
    return n > 30;
});
console.log("find B:", valB);

let idxB = numsArrX.findIndex(function(n){
    return n > 30;
});
console.log("index B:", idxB);

// c
let valC = numsArrX.find(function(n){
    console.log("Checking C:", n);
    return n % 3 === 0;
});
console.log("find C:", valC);

let idxC = numsArrX.findIndex(function(n){
    return n % 3 === 0;
});
console.log("index C:", idxC);


// Task 2.2
const numsArrY = [5,10,22,35,30,9,45];

// a
let filA = numsArrY.filter(function(n){
    return n === 10;
});
console.log("filter A:", filA);

// b
let filB = numsArrY.filter(function(n){
    return n > 30;
});
console.log("filter B:", filB);

// c
let filC = numsArrY.filter(function(n){
    return n % 3 === 0;
});
console.log("filter C:", filC);

// Task 3.1

const namesArrX = ["Paul","Anna","Sushmita","Priya","John","Peter"];

// a
let nameA = namesArrX.find(function(n){
    return n.length > 5;
});
console.log("find A:", nameA);

let idxNameA = namesArrX.findIndex(function(n){
    return n.length > 5;
});
console.log("index A:", idxNameA);

// b
let nameB = namesArrX.find(function(n){
    return n.startsWith("P");
});
console.log("find B:", nameB);

let idxNameB = namesArrX.findIndex(function(n){
    return n.startsWith("P");
});
console.log("index B:", idxNameB);

// c
let chInputA = "S";

let nameC = namesArrX.find(function(n){
    return n.startsWith(chInputA);
});
console.log("find C:", nameC);

let idxNameC = namesArrX.findIndex(function(n){
    return n.startsWith(chInputA);
});
console.log("index C:", idxNameC);

// Task 3.2
const namesArrY = ["Paul","Anna","Sushmita","Priya","John","Peter"];

// a
let fNameA = namesArrY.filter(function(n){
    return n.length > 5;
});
console.log("filter A:", fNameA);

// b
let fNameB = namesArrY.filter(function(n){
    return n.startsWith("P");
});
console.log("filter B:", fNameB);

// c
let chInputB = "S";
let fNameC = namesArrY.filter(function(n){
    return n.startsWith(chInputB);
});
console.log("filter C:", fNameC);

// Task 4.1
const empArrX = [
    {name:"Sam", age:30},
    {name:"John", age:40},
    {name:"Sara", age:25},
    {name:"Mike", age:50}
];

// a

let empA = empArrX.find(function(e){
    return e.age < 35;
});
console.log("find A:", empA);

let empIdxA = empArrX.findIndex(function(e){
    return e.age < 35;
});
console.log("index A:", empIdxA);

// b
let empB = empArrX.find(function(e){
    return e.name.startsWith("S");
});
console.log("find B:", empB);

let empIdxB = empArrX.findIndex(function(e){
    return e.name.startsWith("S");
});
console.log("index B:", empIdxB);

// c
let chInputC = "M";

let empC = empArrX.find(function(e){
    return e.name.startsWith(chInputC);
});
console.log("find C:", empC);

let empIdxC = empArrX.findIndex(function(e){
    return e.name.startsWith(chInputC);
});
console.log("index C:", empIdxC);

// Task 4.2
const empArrY = [
    {name:"Sam", age:30},
    {name:"John", age:40},
    {name:"Sara", age:25},
    {name:"Mike", age:50}
];

// a
let empFilA = empArrY.filter(function(e){
    return e.age < 35;
});
console.log("filter A:", empFilA);

// b
let empFilB = empArrY.filter(function(e){
    return e.name.startsWith("S");
});
console.log("filter B:", empFilB);

// c
let chInputD = "M";

let empFilC = empArrY.filter(function(e){
    return e.name.startsWith(chInputD);
});
console.log("filter C:", empFilC);

// Task 5.1
const strArrA = ['Hello', 'React', 'Java', 'Python', 'Hibernate', 'JavaScript'];

let resA = strArrA.find(function(s){
    return s.endsWith('t');
});
console.log("find:", resA);

let idxA1 = strArrA.findIndex(function(s){
    return s.endsWith('t');
});
console.log("index:", idxA1);

let filA1 = strArrA.filter(function(s){
    return s.endsWith('t');
});
console.log("filter:", filA1);


// Task 5.2
const strArrB = ['Hello', 'React', 'Java', 'Python', 'Hibernate', 'JavaScript'];
let ch1 = 'a';

let resB = strArrB.find(function(s){
    return s.endsWith(ch1);
});
console.log("find:", resB);

let idxB1 = strArrB.findIndex(function(s){
    return s.endsWith(ch1);
});
console.log("index:", idxB1);

let filB1 = strArrB.filter(function(s){
    return s.endsWith(ch1);
});
console.log("filter:", filB1);

// Task 5.3
const strArrC = ['Hello', 'React', 'Java', 'Python', 'Hibernate', 'JavaScript'];
let ch2 = 'a';

let resC = strArrC.find(function(s){
    return s.includes(ch2);
});
console.log("find:", resC);

let idxC1 = strArrC.findIndex(function(s){
    return s.includes(ch2);
});
console.log("index:", idxC1);

let filC1 = strArrC.filter(function(s){
    return s.includes(ch2);
});
console.log("filter:", filC1);

// Task 6
const stuArrA = [
{name:"Jack", maths:55, english:60, science:62},
{name:"Anita", maths:62, english:65, science:56},
{name:"Thomas", maths:68, english:72, science:75},
{name:"Steve", maths:51, english:56, science:68},
{name:"Julia", maths:47, english:77, science:72},
{name:"Mary", maths:72, english:55, science:81}
];

// task 6.1
let stuA = stuArrA.find(function(s){
    return s.maths < 50;
});
console.log("find:", stuA);

let stuIdxA = stuArrA.findIndex(function(s){
    return s.maths < 50;
});
console.log("index:", stuIdxA);

// Task 6.2

let stuB = stuArrA.find(function(s){
    let total = s.maths + s.english + s.science;
    return total > 200;
});
console.log("find:", stuB);

let stuIdxB = stuArrA.findIndex(function(s){
    let total = s.maths + s.english + s.science;
    return total > 200;
});
console.log("index:", stuIdxB);

// Task 6.3

let stuC = stuArrA.find(function(s){
    return s.maths > s.english;
});
console.log("find:", stuC);

let stuIdxC = stuArrA.findIndex(function(s){
    return s.maths > s.english;
});
console.log("index:", stuIdxC);

// Task 6.4
let nVal = 60;

let stuD = stuArrA.find(function(s){
    return s.maths > nVal && s.english > nVal && s.science > nVal;
});
console.log("find:", stuD);

let stuIdxD = stuArrA.findIndex(function(s){
    return s.maths > nVal && s.english > nVal && s.science > nVal;
});
console.log("index:", stuIdxD);

// Task 6.5
let stuFilA = stuArrA.filter(function(s){
    return s.maths < 50;
});
console.log("filter:", stuFilA);

// Task 6.6
let stuFilB = stuArrA.filter(function(s){
    let total = s.maths + s.english + s.science;
    return total > 200;
});
console.log("filter:", stuFilB);

// Task 6.7
let stuFilC = stuArrA.filter(function(s){
    return s.maths > s.english;
});
console.log("filter:", stuFilC);

// Task 6.8
let nVal2 = 60;

let stuFilD = stuArrA.filter(function(s){
    return s.maths > nVal2 && s.english > nVal2 && s.science > nVal2;
});
console.log("filter:", stuFilD);

// Task 6.9

let n1 = 60;
let n2 = 70;

let stuFilE = stuArrA.filter(function(s){
    return s.maths > n1 && s.science > n2;
});
console.log("filter:", stuFilE);


// Task 7


const peopleArrA = [
{name:"Jack",country:"USA",age:35},
{name:"Amit",country:"India",age:38},
{name:"Edward",country:"USA",age:41},
{name:"Vishal",country:"India",age:30},
{name:"Annie",country:"USA",age:27},
{name:"Nick",country:"France",age:32},
{name:"Francis",country:"France",age:44},
{name:"Preeti",country:"India",age:25},
{name:"Sophie",country:"France",age:29},
{name:"Harpreet",country:"India",age:48},
{name:"Bob",country:"USA",age:21}
];

// Task 7.1

let pA = peopleArrA.filter(function(p){
    return p.country == "India";
});
console.log("filter:", pA);

let pFindA = peopleArrA.find(function(p){
    return p.country == "India";
});
console.log("find:", pFindA);

let pIdxA = peopleArrA.findIndex(function(p){
    return p.country == "India";
});
console.log("index:", pIdxA);

// Task 7.2
let pB = peopleArrA.filter(function(p){
    return p.country == "India" && p.age < 35;
});
console.log("filter:", pB);

let pFindB = peopleArrA.find(function(p){
    return p.country == "India" && p.age < 35;
});
console.log("find:", pFindB);

let pIdxB = peopleArrA.findIndex(function(p){
    return p.country == "India" && p.age < 35;
});
console.log("index:", pIdxB);

// Task 7.3
let pC = peopleArrA.filter(function(p){
    return p.name.length < 6;
});
console.log("filter:", pC);

let pFindC = peopleArrA.find(function(p){
    return p.name.length < 6;
});
console.log("find:", pFindC);

let pIdxC = peopleArrA.findIndex(function(p){
    return p.name.length < 6;
});
console.log("index:", pIdxC);

// Task 7.4
let pD = peopleArrA.filter(function(p){
    return p.country == "India" || p.country == "USA";
});
console.log("filter:", pD);

let pFindD = peopleArrA.find(function(p){
    return p.country == "India" || p.country == "USA";
});
console.log("find:", pFindD);

let pIdxD = peopleArrA.findIndex(function(p){
    return p.country == "India" || p.country == "USA";
});
console.log("index:", pIdxD);

// Task 7.5
let minAgeVal = 30;

let pE = peopleArrA.filter(function(p){
    return p.age > minAgeVal;
});
console.log("filter:", pE);

let pFindE = peopleArrA.find(function(p){
    return p.age > minAgeVal;
});
console.log("find:", pFindE);

let pIdxE = peopleArrA.findIndex(function(p){
    return p.age > minAgeVal;
});
console.log("index:", pIdxE);

// Task 7.6
let countryInput = "France";

let pF = peopleArrA.filter(function(p){
    return p.country == countryInput;
});
console.log("filter:", pF);

// Task 8
const marksArrA = [
{name:"Mary", marks:[72,65,55,71]},
{name:"Anita", marks:[66,70,75,53]},
{name:"Edward", marks:[44,54,64,58]},
{name:"Thomas", marks:[62,55,65,81]},
{name:"Robin", marks:[41,44,47,49]},
{name:"Sophia", marks:[71,73,67,77]},
{name:"Bruce", marks:[52,57,61,64]}
];

// Tassk 8.1
let mA = marksArrA.filter(function(s){
    let total = s.marks.reduce(function(sum,x){
        return sum + x;
    },0);
    return total < 250;
});
console.log("filter:", mA);

// Task 8.2
let mB = marksArrA.filter(function(s){
    return s.marks.some(function(x){
        return x > 70;
    });
});
console.log("filter:", mB);

// Task 8.3
let mC = marksArrA.filter(function(s){
    let count = s.marks.filter(function(x){
        return x > 70;
    }).length;
    return count >= 2;
});
console.log("filter:", mC);

// Task 8.4
let avgVal = 65;

let mD = marksArrA.filter(function(s){
    let total = s.marks.reduce(function(sum,x){
        return sum + x;
    },0);
    let avg = total / s.marks.length;
    return avg > avgVal;
});
console.log("filter:", mD);

// Task 9
const techArrA = [
{name:"Jack",tech:"Android"},
{name:"Mary",tech:"React"},
{name:"Bob",tech:"Angular"},
{name:"Steve",tech:"Spring"}
];

function checkData(arrX, strX, flagX){
    let resX = arrX.filter(function(e){
        if(flagX){
            return e.name === strX;
        }else{
            return e.tech === strX;
        }
    });
    return resX;
}

console.log(checkData(techArrA,"Jack",true));
console.log(checkData(techArrA,"React",false));

// Task 10
let joinArrA = ["Hi","Hello","Bye"];

let joinResA = joinArrA.join("#");
console.log(joinResA);

// Task 11
function joinFunc(arrY, sepY){
    return arrY.join(sepY);
}

console.log(joinFunc(["A","B","C"],"**"));

// Task 12
let sortArrA = [12,5,-6,10,-9,4,0,-23,34];

// ascending
sortArrA.sort(function(a,b){
    return a-b;
});
console.log("asc:", sortArrA);

// descending
sortArrA.sort(function(a,b){
    return b-a;
});
console.log("desc:", sortArrA);

// absolute
sortArrA.sort(function(a,b){
    return Math.abs(a) - Math.abs(b);
});
console.log("abs:", sortArrA);

// Task 13
let strSortA = ["JavaScript","Hello","React","Java","Python","C","Node"];

// a-z
strSortA.sort();
console.log("asc:", strSortA);

// z-a
strSortA.sort(function(a,b){
    return b.localeCompare(a);
});
console.log("desc:", strSortA);

// length
strSortA.sort(function(a,b){
    return a.length - b.length;
});
console.log("length:", strSortA);

// count of 'a'
strSortA.sort(function(a,b){
    let ca = a.split('a').length - 1;
    let cb = b.split('a').length - 1;
    return ca - cb;
});
console.log("count a:", strSortA);

// Task 14
const stuArrT1 = [
{name:"Jack", maths:55, english:60, science:62},
{name:"Anita", maths:62, english:65, science:56},
{name:"Thomas", maths:68, english:58, science:54},
{name:"Steve", maths:51, english:56, science:68},
{name:"Julia", maths:47, english:77, science:72},
{name:"Mary", maths:72, english:55, science:60}
];

//  Task 14.1
let res141 = [...stuArrT1];
res141.sort(function(a,b){
    return a.name.localeCompare(b.name);
});
console.log("14.1:", res141);

// TAsk 14.2
let res142 = [...stuArrT1];
res142.sort(function(a,b){
    return b.name.localeCompare(a.name);
});
console.log("14.2:", res142);

// Task 14.3
let res143 = [...stuArrT1];
res143.sort(function(a,b){
    let ta = a.maths+a.english+a.science;
    let tb = b.maths+b.english+b.science;
    return ta - tb;
});
console.log("14.3:", res143);

// Task 14.4
let res144 = [...stuArrT1];
res144.sort(function(a,b){
    return b.maths - a.maths;
});
console.log("14.4:", res144);

// Task 15
const pplArrT2 = [
{name:"Jack",country:"USA",age:35},
{name:"Amit",country:"India",age:38},
{name:"Edward",country:"USA",age:41},
{name:"Vishal",country:"India",age:30},
{name:"Annie",country:"USA",age:27},
{name:"Preeti",country:"India",age:25},
{name:"Sophie",country:"France",age:29},
{name:"Harpreet",country:"India",age:48},
{name:"Bob",country:"USA",age:21}
];

// Task 15.1
let res151 = [...pplArrT2];
res151.sort(function(a,b){
    return a.name.localeCompare(b.name);
});
console.log("15.1:", res151);

// Task  15.2
let res152 = [...pplArrT2];
res152.sort(function(a,b){
    return b.age - a.age;
});
console.log("15.2:", res152);

// Task 15.3
let res153 = [...pplArrT2];
res153.sort(function(a,b){
    if(a.country === b.country){
        return a.name.localeCompare(b.name);
    }
    return a.country.localeCompare(b.country);
});
console.log("15.3:", res153);

// Task 15.4
let res154 = [...pplArrT2];
res154.sort(function(a,b){
    if(a.country === b.country){
        return a.age - b.age;
    }
    return a.country.localeCompare(b.country);
});
console.log("15.4:", res154);

// Task 15.5
function fn155(arrX, ctry){
    let temp155 = arrX.filter(function(x){
        return x.country === ctry;
    });

    temp155.sort(function(a,b){
        return b.age - a.age;
    });

    return temp155;
}
console.log("15.5:", fn155(pplArrT2,"India"));

// Task 16
const marksArrT3 = [
{name:"Mary", marks:[72,65,55,71]},
{name:"Anita", marks:[66,70,75,53]},
{name:"Edward", marks:[44,54,64,58]},
{name:"Thomas", marks:[62,55,65,81]},
{name:"Robin", marks:[41,44,47,49]},
{name:"Sophia", marks:[71,73,67,77]},
{name:"Bruce", marks:[52,57,61,64]}
];

// Task 16.1
let res161 = [...marksArrT3];
res161.sort(function(a,b){
    let sa = a.marks.reduce((x,y)=>x+y,0);
    let sb = b.marks.reduce((x,y)=>x+y,0);
    return sb - sa;
});
console.log("16.1:", res161);

// Task 16.2
let res162 = [...marksArrT3];
res162.sort(function(a,b){
    return Math.max(...a.marks) - Math.max(...b.marks);
});
console.log("16.2:", res162);

// Task 16.3
let cutVal163 = 70;
let res163 = [...marksArrT3];
res163.sort(function(a,b){
    let ca = a.marks.filter(x=>x>cutVal163).length;
    let cb = b.marks.filter(x=>x>cutVal163).length;
    return cb - ca;
});
console.log("16.3:", res163);

// Task 16.4
function fn164(arrY, minT){
    let temp164 = arrY.filter(function(s){
        return s.marks.reduce((a,b)=>a+b,0) > minT;
    });

    temp164.sort(function(a,b){
        return b.marks.reduce((x,y)=>x+y,0) - a.marks.reduce((x,y)=>x+y,0);
    });

    return temp164;
}
console.log("16.4:", fn164(marksArrT3,250));

// Task 16.5
function fn165(arrZ, minS){
    let temp165 = arrZ.filter(function(s){
        return s.marks.every(x=>x>minS);
    });

    temp165.sort(function(a,b){
        return a.name.localeCompare(b.name);
    });

    return temp165;
}
console.log("16.5:", fn165(marksArrT3,50));

// Task 17

const strArr17 = ["aa","car","is","going"];

function countABC17(word17){
    let cnt17 = 0;
    for(let i=0;i<word17.length;i++){
        if(word17[i] === 'a' || word17[i] === 'b' || word17[i] === 'c'){
            cnt17++;
        }
    }
    return cnt17;
}

let res17 = [...strArr17];

res17.sort(function(x17,y17){
    let c1 = countABC17(x17);
    let c2 = countABC17(y17);

    if(c1 === c2){
        return x17.length - y17.length;
    }
    return c1 - c2;
});

console.log("Task17:", res17);

// Task 18
const strArr18 = ["c101","mB24x","a4b6n7","zzz2z"];

function extractNum18(val18){
    let numStr18 = "";
    for(let i=0;i<val18.length;i++){
        if(val18[i] >= '0' && val18[i] <= '9'){
            numStr18 += val18[i];
        }
    }
    return Number(numStr18);
}

let res18 = [...strArr18];

res18.sort(function(a18,b18){
    return extractNum18(a18) - extractNum18(b18);
});

console.log("Task18:", res18);

// Task 19
const strArr19 = ["aa","car","is","going"];

let res19 = strArr19.filter(function(ele19){
    return ele19.includes('a') || ele19.includes('b') || ele19.includes('c');
});

console.log("Task19:", res19);

// Task 20
const strArr20 = ["name","Java","Master","tech"];

let res20 = strArr20.filter(function(ele20){
    for(let i=0;i<ele20.length;i++){
        if(ele20[i] >= 'A' && ele20[i] <= 'Z'){
            return true;
        }
    }
    return false;
});

console.log("Task20:", res20);

// Task 21
// Task 21.1
const personArr21 = [
{name:"Mary",city:"London"},
{name:"Anita",city:"Paris"},
{name:"Edward",city:"New York"},
{name:"Thomas",city:"Rome"},
{name:"Robin",city:"Seattle"},
{name:"Sophia",city:"Los Angeles"},
{name:"Bruce",city:"Delhi"}
];

const contArr21 = [
{city:"London",continent:"Europe"},
{city:"Delhi",continent:"Asia"},
{city:"Seattle",continent:"North America"},
{city:"Paris",continent:"Europe"},
{city:"New York",continent:"North America"},
{city:"Rome",continent:"Europe"},
{city:"Bengaluru",continent:"Asia"},
{city:"Los Angeles",continent:"North America"}
];

function filterByCont21(pArr21,cArr21,contName21){
    return pArr21.filter(function(p21){
        let found21 = cArr21.find(function(c21){
            return c21.city === p21.city;
        });
        return found21 && found21.continent === contName21;
    });
}

console.log("Task21.1:", filterByCont21(personArr21,contArr21,"Europe"));

// Task 21.2
let res212 = [...personArr21];

res212.sort(function(a212,b212){

    let contA212 = contArr21.find(function(x){
        return x.city === a212.city;
    });

    let contB212 = contArr21.find(function(y){
        return y.city === b212.city;
    });

    return contA212.continent.localeCompare(contB212.continent);
});

console.log("Task21.2:", res212);