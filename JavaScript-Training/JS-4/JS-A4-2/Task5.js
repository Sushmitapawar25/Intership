const student = [
    {"name":"Dave","js":59,"react":64,"node":67},
    {"name":"George","js":58,"react":82,"node":65},
    {"name":"William","js":51,"react":56,"node":68},
    {"name":"Anita","js":62,"react":65,"node":56},
    {"name":"Thomas","js":68,"react":72,"node":75},
    {"name":"Steve","js":56,"react":51,"node":63},
    {"name":"Julia","js":47,"react":77,"node":72},
    {"name":"Mary","js":72,"react":55,"node":81}
];

// a)
const totalMarks = student.reduce((acc,stu) => acc + stu.js,0);
console.log(totalMarks);

// b)
const reactCount = student.reduce(
    (acc, stu) => (stu.react > 70) ? acc + 1 : acc,0);
console.log(reactCount);
   
// c)
const highestNode = student.reduce(
    (acc, stu) => (stu.node > acc.node) ? stu : acc
);
console.log(highestNode);

// d)
const jsAbove60 = student.filter(stu => stu.js > 60);
console.log(jsAbove60);

// e)
const totalAbove175 = student.filter(
    stu => (stu.js + stu.react + stu.node) > 175
);
console.log(totalAbove175);

// f
let grades = student.map(stu => ({
    name: stu.name,
    jsGrade:
        (stu.js >= 75) ? "A" :
        (stu.js >= 60) ? "B" : "C",

    reactGrade:
        (stu.react >= 75) ? "A" :
        (stu.react >= 60) ? "B" : "C",

    nodeGrade:
        (stu.node >= 75) ? "A" :
        (stu.node >= 60) ? "B" : "C"
}));

console.log(grades);