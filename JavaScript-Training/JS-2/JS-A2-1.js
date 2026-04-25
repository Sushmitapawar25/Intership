// Task 1
// a

// i
const arr = [2,4,5,3,6,7,8];
let count1 = 0;
for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 == 0){
        count1++;
    }
}
console.log(count1);

// ii
const arr1 = [2,5,10,15,3,4,6];
let sum = 0;
for(let i=0; i<arr1.length; i++){
    if(arr1[i] % 5 == 0){
        sum += arr1[i];
    }
}
console.log(sum);

// iii
// const each = ['a','B','xyh','hsf'];
// for(let i=0; i<each.length; i++){
//     let ne = each[i];
//     each += ne.toUpperCase();
// }
// console.log(each);

// iv
function hasPrime(number){
    for(let i=0; i<number.length; i++){
        let check = isPrime(number[i]);
        if(check){
            console.log('Found prime', numbers[i]);
            return true;
        }
    }
    return false;
}
function isPrime(num){
    for(let i=0; i<=num-1; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

const numberArray = [5,10,11,15];
console.log(hasPrime(numberArray));


// v

function hasB(str){
    let lenstr = str.length;
    for(let i=0; i<lenstr; i++){
        if(str[i] == 'b' || str[i] == 'B'){
            return true;
        }
    }
    return false;
}
const strings = ['Hi','ball','CAB','Bye','Good'];
let len = strings.length;
let count = 0;
for(let i=0; i<len; i++){
    if(hasB(strings[i])){
        count++;
    }
}
console.log('Number of strings with b or B is',count);

// vi

let n = 6;
const nums = [];
for(let i=1; i<=n; i++){
    nums.push(i);
}
console.log(nums);

// vii

const nums1 = [2,3,4,10,11,12];
const numsNo3 = [];
for(let i=0; i<nums1.length; i++){
    if(nums[i] % 3 != 0){
        numsNo3.push(nums1[i]);
    }
}
console.log(numsNo3);

// viii

const stringss = ['Hi','Hello','X','X'];
for(let i=0;i<stringss.length; i++){
    if(stringss[i] == 'Hello'){
        stringss.splice(i,1);
        break;
    }
}
console.log(stringss);

// ix

const techs = ['C++','Python','JavaScript','Java'];
for(let i=0;i <techs.length; i++){
    if(techs[i] == 'JavaScript'){
        techs.splice(i+1,0,'Angular','React','Node');
        break;
    }
}
console.log(techs);

// Task b
// what is an array:- Array is collection of element it use for store the multiple value

// Task c
// push :- push is used to add a elelment at the end of array
// pop :- pop is used to remove a element at the end of array
// shift :- shift is to remove a element from the start of the array
// unshift :- unshift is to add a element at the start of the array

// Task 2
const arr2 = [1,3,4,5,6];
let sum3 = 0;
for(let i=0; i<arr2.length; i++){
    sum3 += arr2[i];
}
console.log('Sum=', sum3);

// Task 3
const arr3 = [3,4,5,12];
let sum4 = 0;
let count4 = 0;
for(let i=0; i<arr3.length; i++){
    if(arr3[i] % 3 == 0){
        sum4 += arr3[i];
        count4++;
    }
}
console.log('3Sum=',sum4);
console.log('3Count=',count4);

// Task 4
const arr4 = [2,3,4,5,6,7,8,9,2];
let even = 0;
let odd = 0;
for(let i=0; i<arr4.length; i++){
    if(arr4[i] % 2 == 0){
        even += arr4[i];
    }else{
        odd += arr4[i];
    }
}
console.log('Even Sum = ', even);
console.log('Odd Sum = ', odd);

// Task 5
const arr5 = [3,4,5,12,22,30];
let count5 = 0;
let Values = [];
for(let i=0; i<arr5.length; i++){
    if(arr5[i] > 21){
        count5++;
        Values.push(arr5[i]);
    }
}
console.log('Count = ',count5);
console.log('Values =', Values.join(","));

// Task 6
const arr6 = [2,3,5,7];
let add = [];
function addTen(arr6){
    for(let i=0; i<arr6.length; i++){
        add.push(arr6[i] + 10); 
    }
}
addTen(arr6);
console.log(add);

// Task 7
const arr7 = ['Jack','Mary'];
const all = [];
function addHello(arr7){
    for(let i=0; i<arr7.length; i++){
        all.push("Hello "+ arr7[i]);
    }
}
addHello(arr7);
console.log(all);

// Task 8
const task8 = [5,18,23,30];
console.log(task8);
for(let i=0; i<task8.length; i++){
    if(task8[i] % 2 != 0){
        task8[i] = task8[i] + 1;
    }
}
console.log(task8);

// Task 9
const tas9 = [4,8,12,20,6];
for(let i=0; i<tas9.length; i++){
    let f1 = tas9[0];
    let ln = tas9[tas9.length-1];

    if(f1 > ln){
        console.log('FIRST:'+ f1);
    }else if(f1 < ln){
        console.log('LAST:'+ ln );
    }else{
        console.log('EQUAL:'+ f1);
    }
}

// Task 10
const Big1 = [1,2,3];
const Big2 = [10,20,30];
let Bsum1 = 0
let Bsum2 = 0;
for(let i=0;i<Big1.length; i++){
    Bsum1 += Big1[i];
}
for(let i=0;i<Big2.length; i++){
    Bsum2 += Big2[i];
}
if(Bsum1 > Bsum2){
    console.log('Big1');
}else if(Bsum1 < Bsum2){
    console.log('Big2');
}else{
    console.log('Equal');
}

// Task 11
const lar = [5,18,26,30,40,6];
let maxx = 0;

for(let i=0; i<lar.length; i++){
    if(maxx < lar[i]){
        maxx = lar[i];
    }
}
console.log(maxx);

// Task 12
const ALL = [12,12,12,12];
let same = true;
for(let i=0; i<ALL.length; i++){
    if(ALL[i] != ALL[0]){
        same = false;
        break;
    }
}
console.log(same ? 'ALLSAME' : 'DIFFERENT');

// Task 13
const divi = [10,12,14];
let couunt = 0;
for(let i=0; i<divi.length; i++){
    if((divi[i] % 2 == 0) || (divi[i] % 3 == 0) || (divi[i] % 5 == 0) || (divi[i] % 7 == 0)){
        couunt++;
    }
}
console.log('Count=',couunt);

// Task 14
const seq = [12,13,14,15,16,17];
let se1 = true;
for(let i=1; i<seq.length; i++){
    if(seq[i] != seq[i-1]+1){
        se1 = false;
        break;
    }
}
console.log(seq ? "SEQUENCE" : "NOT");

// Task 15
const alter = [2,3,4,5,6,7];
let ok = true;
for(let i=0; i<alter.length; i++){
    if(i % 2 == 0 && alter[i] % 2 != 0){
        ok = false;
    }
    if(i % 2 === 1 && alter[i] % 2 !== 1){
        ok = false;
    }
}
console.log(ok ? "ALTERNATING" : "NOT");

// Task 16
const sir = "nicebaby";

let found = false;

for(let i=0; i<sir.length-1; i++){
    if(sir[i] === 'a' && sir[i+1] === 'b'){
        found = true;
        break;
    }
}

console.log(found ? "ABFOUND" : "AB NOT FOUND");

// Task 17

let neq = [5,18,26,30,40,6,9];
let ress = [];

for(let i=0; i<neq.length; i++){
    if(neq[i] % 2 === 0){
        ress.push(neq[i]);
    }
}
console.log(ress);

// Task 18

let Ab = [5,18,26,30,40,6,3];
let rse = [];

for(let i=0; i<Ab.length; i++){
    if(Ab[i] % 2 === 0){
        rse.unshift(Ab[i]);
    }
}
console.log(rse);

// Task 19

let arr11 = [40,6,9];
let res11 = "";

while(arr11.length > 0){
    res11 += arr11.pop() + " ";
}

console.log("Pops = " + res11);

// Task 20
let ar12 = [40,6,9];
let re12 = "";

while(ar12.length > 0){
    re12 += ar12.shift() + " ";
}

console.log("Shift = " + re12);

// Task 21

let atr = ['Jack','Bob','Ed','Steve'];
let namee = "Bob";

let index = atr.indexOf(namee);

if(index !== -1){
    atr.splice(index,1);
}

console.log(atr);

// Task 22

let atr1 = [5,18,26,30,40,6];

let maaxx = Math.max(...arr);
let index1 = atr1.indexOf(maaxx);

atr1.splice(index1,1);

console.log(atr);

// Task 23

let err = [5,18,26,30,40];
let num23 = 6;

err.push(num23);
err.sort((a,b)=>a-b);

console.log(err);

// Task 24

let a1 = [5,18,26,30];
let b1 = [40,6];

let rets = a1.concat(b1);

console.log(rets);

// Task 25

let a2 = [5,18,26,30];
let b2 = [101,102];

let resst = [];

let leng = Math.max(a2.length, b2.length);

for(let i=0; i<leng; i++){
    if(i < a2.length) resst.push(a2[i]);
    if(i < b2.length) resst.push(b2[i]);
}

console.log(resst);