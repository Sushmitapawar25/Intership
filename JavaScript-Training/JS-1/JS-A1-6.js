// Task 1
// a
// i
function largestof3(i1, i2, i3){
    let largest ;
    if(i1 >= i2 && i1 >= i3){
        largest = i1;
    }else if(i2 >= i1 && i2 >= i3){
        largest = i2;
    }else{
        largest = i3;
    }
    return largest;
}
console.log(largestof3(5,6,7));

// ii
function replaceChars(stry1, charm1,charn2){
    let outStr = '';
    let len1 = stry1.length;
    for(let i=0; i<len1; i++){
        if(stry1[i] == charm1){
            outStr = outStr + charn2;
        }else{
            outStr = outStr + stry1[i];
        }
        return outStr;
    }
}
console.log(replaceChars('Good','o','u'));

// iii
function isSquare(numt){
    for(let i=1; i<=numt; i++){
        let sq = i * i;
        if(sq == numt){
            return true;
        }
    }
    return false;
}
console.log(isSquare(4));

// iv
function factorial(ni){
    let outr = 1;
    for(let i=1; i<=ni; i++){
        outr = outr * i;
    }
    return outr;
}
let nuf = 3;
console.log('Factorial of',nuf, 'is',factorial(nuf));

// V
function printFactorial(sma){
    for(let i=1; i<= sma; i++){
        let fact = factorial(i);
        console.log('Factorial of',i,'is',fact);
    }
}
printFactorial(5);

// Task 2
let s =  10;
function sumN(s){
    let sum1 = 0;
    for(let i=0; i<s; i++){
        sum1 += i;
    }
    return sum1;
}
console.log(sumN(s));

// Task 3
let str1 = 'moozoom';
let ch = 'm';
function removeChar(str1, ch){
    let res = "";
    for(let i=0; i<str1.length; i++){
        if(str1[i] !== ch){
            res += str1[i];
        }
    }
    return res;
}

console.log(removeChar(str1, ch));

// Task 4
let m = 6;
let n = 8;
let o = 10;
function isTriangle(m, n, o){
    if(m+n >o && m+o >n && n+o >m){
        return true;
    }
    return false;
}
console.log(isTriangle(m,n,o));

// Task 5
let t = 7;
let u = 2;
let v = 5;
function isTriangle(t, u, v){
    if(t+u >v && t+v >u && u+v >t){
        return true;
    }
    return false;
}
console.log(isTriangle(t,u,v));

// Task 6
let mno = "Perfect";
function reverseStr(mno){
    let lenv = '';
    for(let i=mno.length-1; i>=0; i--){
        lenv += mno[i];
    }
    return lenv;
}
console.log(reverseStr(mno));

// Task 7
let sdf = 'moozoom';
let char1 = 'm';
let char2 = 'o';
let countm = 0;
let countn = 0;

function isCheck(sdf,char1,char2){
    for(let i=0; i<sdf.length; i++){
        if(sdf.charAt(i) == char1){
            countm++;
        }else if(sdf.charAt(i) == char2){
            countn++;
        }
    }
    
    if(countm > countn){
        return 1;
    }else if(countm == countn){
        return 0;
    }else{
        return -1;
    }

}
console.log(isCheck(sdf,char1,char2));

// Task 8
let lkj = '(a+b+(c+d*e)-(d+e*f))+3';

function bracketCheck(lkj){
    let count5 = 0;
    let count6 = 0;
    for(let i=0;i<lkj.length; i++){
        if(lkj.charAt(i) == '('){
            count5++;
        }else if(lkj.charAt(i) == ')'){
            count6++;
        }
    }
    if(count5 == count6){
        return true;
    }else{
        return false;
    }
}
console.log(bracketCheck(lkj));

// Task 9

let fgy = '))a+b((';

function goodExpression(fgy){
    let countt = 0;

    for(let i = 0; i < fgy.length; i++){
        if(fgy[i] === '('){
            countt++;
        }
        else if(fgy[i] === ')'){
            countt--;
            
            // invalid case
            if(countt < 0){
                return false;
            }
        }
    }

    return count === 0;
}
console.log(goodExpression(fgy))

// Task 10
let as = 5;
function isPrime(as){
    for(let i=2; i<as-1; i++){
        if(as % i == 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(as));

// Task 11
let h = 75;
let sd  = 0;
function printPrime(h){
    for(let i=2; i<=h; i++){
        if(isPrime(i)){
            sd++;
        }
    }
    return sd;
}
console.log(printPrime(h));

// Task 12
let zsd = 'museum';
let chart = 'm';

function checkChar(zsd,chart){
    let inc = 0;
    for(let i=0; i<zsd.length; i++){
        if(zsd[i] == chart){
            inc++;
        }
    }
    return inc;
}
console.log(checkChar(zsd,chart));

// Task 13
let moon = 'museum';
function maxCharCount(moon){
    let max1 = 0;
    for(let i=0; i<moon.length; i++){
        let cout = checkChar(moon, moon[i]);
        if(cout > max1){
            max1 = cout;
        }
    }
    return max1;
}
console.log(maxCharCount(moon));

// Task 14
let digi = 24681;

function sumofDigit(digi){
    let Sumofdigit = 0;
    for(;;){
        if( digi == 0){
            break;
        }
        let lastdigitt = digi % 10;
        Sumofdigit += lastdigitt;
        digi = Math.floor(digi / 10);
    }
    return Sumofdigit;
}
console.log(sumofDigit(digi));