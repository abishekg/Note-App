
// var square = (x) => {
//     var result = x * x;
//     return result;
// }

var square = (x) => x * x;
console.log(square(9));


var user = {
    name: 'Ramnath',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi! Im ${user.name}`);
    },
    sayHiAlt () {
        console.log(arguments.length);
        console.log(`Hi! Im ${this.name}`);
    }
}

user.sayHiAlt(1,2,3);