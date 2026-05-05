// A variable name has the name of a user .If
// the variable is an empty string or null,
// make it have the value Guest.
// Use the concept of truthy and falsy

let name = 'Jack';

if(name)
    console.log(name);
else{
    name = 'Guest';
    console.log(name);
}


