function maxNum(a,b=0,c=0,d=0){
    let max  = a;
    max = (b > max) ? b : max;
    max = (c > max) ? c : max;
    max = (d > max) ? d : max;
    return max;
}
console.log(maxNum(4, 6, 2, 9)); 
console.log(maxNum(4, 6, 2));    
console.log(maxNum(4, 6));      
console.log(maxNum(4)); 