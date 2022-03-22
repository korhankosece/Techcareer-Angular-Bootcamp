// const text = new String('Korhan')
// const arr = new Array([1,2,3])
// let _name = 'Korhan'

const myPromise = new Promise(function (resolve, reject) {
    let succes = true;
    if (succes) {
        resolve({ category: "Food" })
    } else {
        reject('ERROR !')
    }
})

const myPromise2 = new Promise(function (resolve, reject) {
    let succes = true;
    if (succes) {
        setTimeout(() => {
            resolve({ name: "Korhan", surname: "Kosece" })
        }, 2000);
    } else {
        reject('ERROR !')
    }
})


// myPromise.then((data) => {
//     console.log(1);
//     console.log(data);
// }).catch(err => console.log(err)).finally(() => console.log('done'))

// console.log('selam');


// Promise.all([myPromise, myPromise2]).then(data => {
//     console.log(data);
// }).catch(err => console.log(err))

// Promise.race([myPromise2, myPromise]).then(data => {
//     console.log(data);
// }).catch(err => console.log(err))

console.log(1)