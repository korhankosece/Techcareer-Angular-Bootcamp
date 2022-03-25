// const getData = () => {
//     let _data
//     fetch("https://northwind.vercel.app/api/suppliers")
//         .then(res => res.json())
//         .then(data => {
//             console.log("then", data);
//             _data = data
//         })
//         .catch(err => console.log(err))

//     console.log(_data);
// }

// const getData = async () => {
//     try {
//         const res = await fetch("https://northwind.vercel.app/api/suppliers")
//         const data = await res.json()
//         console.log(data);
//         console.log(2)
//     } catch (error) {
//         console.log('Get Supplier Error', error);
//     }
// }

// getData()


const postData = async () => {
    const companyName = document.querySelector('#companyName').value
    const contactName = document.querySelector('#contactName').value

    if (companyName && contactName) {

        const data = { companyName, contactName }

        const opt = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }

        try {
            const res = await fetch("https://northwind.vercel.app/api/suppliers", opt)
            const _data = await res.json();
            console.log(_data);
        } catch (error) {
            console.log('Supplier POST error', error);
        }

    } else {
        console.log('REQUIRED');
    }
}

const btn = document.querySelector('button')
btn.addEventListener('click', postData)