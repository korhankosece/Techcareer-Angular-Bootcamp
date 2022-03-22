// fetch("https://northwind.vercel.app/api/suppliers")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log('Custom Error: ', err))

fetch("https://northwind.vercel.app/api/suppliers")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const length = data.length;
        for (let i = 0; i < length; i++) {
            const item = data[i];
            const companyName = item.companyName;
            const liElement = document.createElement('li');
            liElement.innerText = companyName;

            if (companyName && !companyName.includes(' ')) {
                liElement.style.color = "red"
            }
            document.querySelector('#suppliers').appendChild(liElement)
        }
    })
