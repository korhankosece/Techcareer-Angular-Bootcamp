// localStorage.setItem('name', 'Korhan')
// console.log(localStorage.getItem('name'));
// localStorage.removeItem('name')
// localStorage.clear()

localStorage.setItem('user', { name: 'Korhan' })
localStorage.setItem('user', JSON.stringify({ name: 'Korhan' }))
const obj = JSON.parse(localStorage.getItem('user'))

//local storage ile metodları aynı
// sessionStorage


document.cookie = 'name=Korhan; expires=' + new Date(9999, 1, 15).toUTCString();
console.log(document.cookie);
