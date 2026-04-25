// Task 1
// alert("JS working");

// a
let str = 'zoozero';
let count = 0;
for(let i=0; i<str.length; i++){
    if(str[i] == 'z'){
        count++;
    }
}
console.log(count);

// b
// let are = 'Abc';
// let re = '';
// for(let i=0; i<are.length; i++){
//     re += are[i] + are[i];
// }
// console.log(re);

// c

let alpha = '';
let digits = '';
let others = '';
let stri = 'abg357#%@81853mgd';

for(let i=0; i<stri.length; i++){
    let ch = stri[i];
    if(ch >='a' && ch <= 'z'){
        alpha = alpha + ch;
    }else if(ch >= 'A' && ch <= 'Z'){
        alpha += ch;
    }else if(ch >= 1 && ch <= 9){
        digits += ch;
    }else {
        others += ch;
    }
}
console.log(alpha + others + digits);

// Task 2

let stro = 'Edufect';
    if(stro.length >= 5){
        console.log('Long');
    }else{
        console.log('Short');
    }


// Task 3

let srt = 'moozoom';
let count1 = 0;
for(let i=0; i<srt.length; i++){
    if(srt.charAt(i) == 'm'){
        count1++;
    }
}
console.log(count1);

// Task 4

let strm = 'xyxyxyx';
let xcount = 0;
let ycount = 0;

for(let i=0; i<strm.length; i++){
    if(strm.charAt(i) == 'x'){
        xcount++;
    }else{
        ycount++;
    }
}
console.log('X=' + xcount);
console.log('y=' + ycount);

// Task 5

let strs = 'abca';
for(let i=0; i<strs.length; i++){
    if(strs.charAt(i) == 'a'){
        console.log('a at Index:' + i);
    }else if(strs.charAt(i) == 'b'){
        console.log('b at Index:' + i);
    }
}

// Task 6

let strt = 'Perfect';
console.log(strt.substring(1,strt.length));


// Task 7

let strn = 'zoozzzzzm';
strn = strn.replaceAll('z','x');
console.log(strn);

// // Task 8

let stru = 'my#mother';
let neww = '';

for(let i=0; i<stru.length; i++){
    if(stru.charAt(i) != 'm'){
        neww += stru.charAt(i);
    }
}
console.log(neww);

// Task 9

let srs = '01234';
let newt = ' ';
for(let i=0; i<srs.length; i++){
    if(i % 2 == 0){
        newt = newt + srs[i];
    }
}
console.log(newt);


// Task 10

let smt = 'qw23BN**45g';
let new1 = ' ';
for(let i=0; i<smt.length; i++){
    let ch = smt.charAt(i);
    if(ch >= 1 && ch <= 9){
        new1 += ch;
    } 
}
console.log(new1);

// Task 11


let ans = 'qw23BN**45g';
let result = ' ';
for(let i=0; i<ans.length; i++){
    let ch = ans.charAt(i);
    if(ch >= 'A' && ch <= 'Z'){
        result += 'A';
    }else if(ch >= 'a' && ch <= 'z'){
        result += 'a';
    }else if(ch >=1 && ch<= 9){
        result += '0';
    }else{
        result += ch;
    }
}
console.log(result);

// Task 12

let str1 ='qw2B**5g';
let result1 = ' ';
for(let i=0; i<str1.length; i++){
    let ch = str1.charAt(i);
    if((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')){
        result1 += ch + ch;
    }else if(ch >= '1' && ch <= '9'){
        result1 += ch + ch + ch;
    }
}
console.log(result1);

// Task 13

let str2 = 'qw2B**5g';
let lower1 = '';
let upper1 = '';
let digit1 = '';

for(let i=0; i<str2.length; i++){
    let ch = str2.charAt(i);
    if(ch >= 'a' && ch <= 'z'){
        lower1 += ch;
    }else if(ch >= 'A' && ch <= 'Z'){
        upper1 += ch;
    }else if(ch >= 1 && ch <= 9){
        digit1 += ch;
    }
}
let result2 = lower1+digit1+upper1;
console.log(result2);


// Task 14

let str3 = 'q#w2@B**5g';
let result3 = '';

for(let i=0; i<str3.length; i++){
    let ch = str3.charAt(i);
    if(ch == '#' || ch == '@' || ch == '*'|| ch == '$'|| ch == '%' || ch == '&'){
        result3 += ch;
    }
}
console.log(result3);

// Task 15

let str4 = 'ABCDABCD';
let result4 = "";
for(let i=0; i<str4.length/2; i++){
    result4 += str4.charAt(i);
}
console.log(result4);

// Task 16
let pap = "JAVAMaster";   // change input
let mms = "";

let mid1 = pap.length / 2;

for(let i = mid1; i < pap.length; i++){
    mms += pap[i];
}

console.log(mms);

// Task  17
let input = "JAVA";
let half = "";

let z = input.length;
let mid = Math.floor(z / 2);
for(let i = 0; i < mid; i++){
    // store later
}


for(let i = mid + (z % 2); i < z; i++){
    half += input[i];
}

if(z % 2 === 1){
    half += input[mid];
}

for(let i = 0; i < mid; i++){
    half += input[i];
}

console.log(half);

// Task 18
let susd = "dada";

if(susd.length % 2 === 0){
    let mid2 = susd.length / 2;
    let first = str.substring(0, mid);
    let second = str.substring(mid);

    if(first === second){
        console.log("Yes");
    }else{
        console.log("No");
    }
}else{
    console.log("No");
}

// Task 19
let swr = "ABCDE";
let mid3 = Math.floor(swr.length / 2);

console.log("Middle Char = " + swr[mid]);
console.log("Index = " + mid);

// Task 20
let stm1 = "James";
let stm2 = "jaMES";

if(stm1.toLowerCase() === stm2.toLowerCase()){
    console.log("Same");
}else{
    console.log("Different");
}

// Task 21
let sitr = "A1B2C3";
let odd3 = "";
let even3 = "";

for(let i=0; i<sitr.length; i++){
    if(i % 2 === 0){
        even3 += sitr[i];
    }else{
        odd3 += sitr[i];
    }
}

console.log("Odd:" + odd3);
console.log("Even:" + even3);

// Task 22
let kill = "12ab1128d";
let main = "";

for(let i=0; i<kill.length; i++){
    if(kill[i] === '1'){
        main += '@';
    } 
    else if(kill[i] === '2'){
        main += '#';  
    } 
    else {
        main += kill[i];
    }
}

console.log(main);

// Task 23
let myd = "12049brt";
let zxc = "";

for(let i=0; i<myd.length; i++){
    let ch = myd[i];

    if(ch == '1'){
        zxc += '@';
    }
    else if(ch == '2'){
        zxc += '#';
    } 
    else if(ch == '3'){
        zxc += '&';
    } 
    else if(ch >= '4' && ch <= '9'){
        zxc += '$';
    } 
    else{
        zxc += ch;
    }
}

console.log(zxc);

// Task 24
let qwe = "ABCD";
let asd = "";

for(let i=0; i<qwe.length; i++){
    if(qwe[i] == 'A') {
        asd += 'X';
    }
    else if(qwe[i] == 'B'){
        asd += 'Y';
    }
    else if(qwe[i] == 'C' || qwe[i] == 'D'){
        continue;
    } 
    else{
        asd += qwe[i];
    } 
}
console.log(asd);

// Task 25
let min = "a+++b++c";
let er = "";

for(let i=0; i<min.length; i++){
    if(min[i] == '+' && min[i+1] == '+') {
        continue;
    }
    er += min[i];
}
console.log(er);

// Task 26
let hih = "ABCDJS";
let ho = hih.replaceAll("ABCD", "XYZ");

console.log(ho);