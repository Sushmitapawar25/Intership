// Task 1
// a

// i
let n = 11;
if(n % 2 == 1){
    console.log(n + 1);
}

// ii
let num = 60;
if(num % 6 == 0){
    console.log('Number is divisible by 6');
}else if(num % 3 == 0){
    console.log('Number is divisible by 3');
}else if(num % 2 == 0){
    console.log('Number is divisible by 2');
}else{
    console.log('Number is not divisibel by 6,3,2');
}

// iii
let k = 5
let str = ' ';
for(let i=1; i<=k; i++){
    if(i % 2 == 0){
        str = str + 'K';
    }else{
        str = str + 'J';
    }
} 
console.log(str);

// iv
let numm = 24;
let count = 0;

for(let i=2; i<numm-1; i++){
    if(numm % i == 0){
        count = count + 1;
    }
}
if(count == 0){
    console.log('Prime');
}else{
    console.log('Composite');
}

// Task 2
let n1 = 20;
if(n1 > 0){
    console.log('Positive Number');
}else{
    console.log('Not a Positive Number');
}

// Task 3
let n3 = 20;
if(n3 % 10 == 0){
    console.log('Multiple of 10');
}else{
    console.log('Not a Multiple of 10');
}

// Task 4
let m = 10;
let n4 = 3;
if(m > n4){
    console.log('Larger');
}else if(m == n4){
    console.log('Equal');
}else{
    console.log('Smaller');
}

// Task 5
let n5 = 15;
for(i=2; i<=5; i++){
    if(n5 % i == 0){
        console.log(i + ':yes');
    }else{
        console.log(i + ':no');
    }
}

// Task 6
let num1 = 50;
for(let i=1; i<=15; i++){
    if(i % 5 == 0){
        console.log('Hello');
    }
}

// Task 7
let size = 3;
for(let i=1; i<=size; i++){
    if(i % 2 != 0){
        console.log(i + ':odd');
    }else{
        console.log(i + ':even');
    }
}

// Task 8
let n6 = 10;
for(let i=1; i<=n6; i++){
    if(n6 % i == 0){
        console.log(i);
    }
}

// Task 9
let n7 = 5;
for(let i=1; i<=n7; i++){
    let sqre = i * i
    if(sqre % 2 != 0){
        console.log('Square of ' + i + '=' + i + ':odd');
    }else{
        console.log('Square of ' + i + '=' + i + ':even');
    }
}

// Task 10
let n8 = 81;
if( n8 >= 75){
    console.log('Good')
}else if(n8 >= 50 && n8 < 75){
    console.log('Average')
}else{
    console.log('Poor')
}

// Task 11
let n9 = 45;
if( n9 <= 100 && n9 >= 90){
    console.log(' Grade A');
}else if(n9 < 90 && n9 >= 75){
    console.log('Grade B');
}else if(n9 < 75 && n9 >= 50){
    console.log('Grade C');
}else{
    console.log('Grade D');
}

// Task 12
let n10 = 4;
let str8 = ' ';
for(let i=1; i<=n10; i++){
    if(n10 % 2 != 0){
        str8 = str8 + 'X';
    }else{
        str8 = str8 + 'Y';
    }
} 
console.log(str8);

// Task 13
let n11 = 4;  // change value
let strss = "";
let chars = ['A','B','C'];

for(let i=0; i<n11; i++){
    strss += chars[i % 3];
}
console.log(strss);

// Task 14
let u = 6;
let output = "";

for(let i = 1; i <= u; i++){
    if(i % 3 == 1){
        output += "P" + i;
    }
    else if(i % 3 == 2){
        output += "Q" + i;
    }
    else{
        output += "R" + i;
    }
}
console.log(output);


// Task 15

let s = 3;
let strrm = ' ';
for(let i=1; i<=s; i++){
    if(i % 2 == 0){
        strrm = strrm + '#';
    }else{
        strrm = strrm + i;
    }
}
console.log(strrm);

// Task 16
let t = 6;  // change value
let sgp = "";

for(let i=1; i<=t; i++){
    if(i % 2 == 1){
        sgp += "-" + i;
    }else{
        sgp += "+" + i;
    }
}

console.log(sgp);

// Task 17
let x = 6;  // change value
let sumz = 0;
let output2 = "";

for(let i = 1; i <= x; i++){
    if(i % 2 === 1){
        output2 += "-" + i;
        sumz -= i;
    }else{
        output2 += "+" + i;
        sumz += i;
    }
}

console.log(output2 + "=" + sumz);

// Task 18
let w = 3;
let mi = '';
for(let i=w; i>=1; i--){
    if(w % i == 0){
        mi += "X";
    }else{
        mi += i;
    }
}
console.log(mi);

// Task 19
let o = 9;
let dic = '';
let Ndic = '';
for(let i=1; i<=o; i++){
    if(o % i == 0){
        dic += i + '#';
    }else{
        Ndic += i + '#'; 
    }
}
console.log("Divide: ",dic);
console.log("Not Divide:" , Ndic);

// Task 20
let No = 2456;
let Addd = 0;
for(let i=1; i<=4; i++){
    let lastdigit = No % 10;
    Addd += lastdigit;
    No = ( No - lastdigit )/ 10;
}
console.log(Addd);