const obj1= {};
const obj2 = new Object();

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);


ellie.hasJob = true;
console.log(ellie.hasJob);

// 6. for..in vs for..of
// for (key in obj)
console.clear();

//7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])

const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);