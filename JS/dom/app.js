// const elem = document.getElementById('text')
// const elem = document.getElementsByClassName('lorem')
// const elem = document.getElementsByTagName('p')

// const elem = document.querySelector('h1')
// const elem = document.querySelector('#text')
// const elem = document.querySelector('.lorem')
const elem = document.querySelectorAll('.lorem')

// elem.forEach(item => console.log(item))

// elem.forEach(item => {
//     console.log(item);
// });


elem.innerText = 'Iron Maiden'

elem.forEach(item => item.innerText = 'Lorem falan filan')

const data = ['asus', 'apple', 'monster']
const divElement = document.querySelector('div')

// data.forEach(brand => {
//     // divElement.innerHTML = `<p>${brand}</p>`
//     divElement.innerHTML += `<p>${brand}</p>`
//     // divElement.innerText += `<p>${brand}</p>`
// })

const ulElement = document.querySelector('ul')

// data.forEach(brand => {
//     let li = document.createElement('li')
//     li.innerText = brand;
//     // ulElement.appendChild(li)
//     ulElement.prepend(li)
// })

// const aElement = document.querySelector('a')

// // console.log(aElement.getAttribute('href'));

// aElement.setAttribute('href', 'https://www.youtube.com')

// aElement.setAttribute('style', 'color:red')
// // aElement.setAttribute('style', 'font-size: 25px')

// // console.log(aElement.style); 
// aElement.style.fontSize = '25px'

// const _elem = document.querySelector('.success')

// // console.log(_elem.classList);

// // _elem.classList.add('test')
// _elem.classList.add('error')
// _elem.classList.remove('success')

// const res = _elem.classList.contains('test')
// // console.log(res);

// _elem.classList.toggle('test')
// _elem.classList.toggle('test')



// const pElem = document.querySelectorAll('p')

// pElem.forEach(element => {
//     console.log(element.textContent);
//     if (element.textContent.includes('Success')) {
//         element.classList.add('success')
//     } else {
//         element.classList.add('error')
//     }
// });

const box = document.querySelector('#box')
const box2 = document.querySelector('#box-2')

// console.log(box);
// console.log(box.children);
// console.log(box.childNodes);

const arr = [...box.children]

// arr.forEach(element => {
//     console.log(element);
// });

// for (let i = 0; i < box.children.length; i++) {
//     const element = box.children[i];
//     console.log(element);
// }

// console.log(box2.parentElement);
// console.log(box2.parentElement.children);
// console.log(box2.nextSibling);
// console.log(box2.nextElementSibling);
// console.log(box2.nextElementSibling.children);
