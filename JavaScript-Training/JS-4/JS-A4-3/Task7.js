const students = [
    {"name":"Dave","js":59,"node":67},
    {"name":"George","js":58,"react":82,"node":65},
    {"name":"William","node":68},{"name":"Anita","react":65,"node":56},
    {"name":"Steve","js":56,"react":51},
    {"name":"Julia","js":47},
    {"name":"Mary","js":72,"react":55,"node":81}
];

let result = students.map(({js = 0, react = 0, node = 0, ...rest}) => ({
    ...rest,js,react,node,maxMarks:
        (js >= react && js >= node) ? js :
        (react >= js && react >= node) ? react :
        node
}));

console.log(result);