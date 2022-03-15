let tvShows = ['True Detective', 'Breaking Bad', 'Game of Thrones']

//typeof
// console.log(typeof true);
// console.log(typeof 3);
// console.log(typeof 'text');

// console.log(typeof tvShows);
// console.log(new Date());
// console.log(typeof new Date());


//Array methods
//mutate etmek
// console.log(tvShows[1]);
// console.log(tvShows.length);

var result = tvShows.push('Dark')
tvShows.unshift('Vikings')
tvShows.shift()
tvShows.pop()

let result2 = tvShows.join('|')

// console.log(result);
// console.log(result2);
// console.log(tvShows);

let numberx = '2';

//loose comparison
// console.log(numberx == 2);
// console.log(numberx != 3);
// console.log(numberx <= 3);
// console.log(numberx >= 3);
// console.log(numberx > 3);

//strict comparison
// console.log(numberx === 2);
// console.log(numberx !== 2);

// if (numberx === 2) {
//     console.log(true);
// } else if (numberx === 3) {
//     console.log(0);
// }
// else {
//     console.log(false);
// }

//ternary operators
// numberx === 2 ? console.log("eşitmiş") : console.log("eşit değilmiş")

let product = {
    name: 'Kitkat',
    price: null
}

// if (product.price) {
//     console.log(price);
// } else {
//     console.log('price yok');
// }

//switch case
// let _name;
// switch (_name) {
//     case 'Korhan':
//         console.log(`My name is Korhan`);
//         break;
//     case 'Ahmet':
//         console.log(`My name is Ahmet`);
//         break;
//     default:
//         console.log('İsim tanıtılmadı');
// }

let product2 = {
    name: 'Kitkat',
    price: null,
    brands: [{ price: 2 }]
}

// console.log(product2.brands?.[1]?.price);

// if (product2.brands?.[1]?.price) {

// }

// //spread operator

// let arr = [1, 2, 3]
// let arr2 = ['Soundgarden', 'Audioslave', 'Red Hot Chili']

// let newArr = [...arr, 'data'];
// let newArr2 = ['data', ...arr];
// let newArr3 = [...arr2, ...arr];

// const user = {
//     name: 'Korhan',
//     surname: 'Kosece'
// }

// console.log({ ...user, user: user, arr, name: 'Dave' });
// const _name = 'name';
// console.log(user[_name]);


//HOISTING


//function decleration
// function sayMyName(name) {
//     console.log(name);
// }

//function expression
// const sayMyName = function (name) {
//     return name
// }

//arrow function
const sayMyName = name => name

console.log(sayMyName('James'));