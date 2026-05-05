let newEmp = {name:'Jack', level:3};
console.log(newEmp);

let loginAttempt = {user:'Guest', password:'Jack'};
console.log(loginAttempt);

let loginName = newEmp.name || 'Guest';
console.log(loginName);

let password = newEmp.password || 'Guest';
console.log(password);

let level = newEmp.level || 1;
console.log(level);

let admin = newEmp.admin || (newEmp.level>=4);
console.log(admin);

let loginSuccess = (loginAttempt.user === loginName) && (loginAttempt.password === password);
console.log(loginSuccess);

let levelMsg = (admin ? "You have admin level access" : "Your access level is "+level);
console.log(levelMsg);

let message = (loginSuccess ? 'Welcome '+loginName+". "+levelMsg : 'Login Failed');
console.log(message);

// a)
newEmp = {name:'Jack'};
console.log(newEmp);

// b)
loginAttempt = {user:'Jack', password:'Guest'};
console.log(loginAttempt);

// c)
newEmp = {name:'Jack', admin:true};
loginAttempt={user:'Jack', password:'Guest'};
console.log(newEmp);
console.log(loginAttempt);

// d)
newEmp = {name:'Jack', password:'Jack123', level:2};
loginAttempt={user:'Jack', password:'HelloJack'};
console.log(newEmp);
console.log(loginAttempt);

// e)
newEmp = {name:'Jack', password:'Jack123', level:2}; 
loginAttempt={user:'Jack', password:'Jack123'};
console.log(newEmp);
console.log(loginAttempt);