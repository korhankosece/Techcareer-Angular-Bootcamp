const addData = () => {
    const companyName = document.querySelector('#companyName').value
    const contactName = document.querySelector('#contactName').value

    if (companyName && contactName) {
        // const data = { companyName: companyName, contactName: contactName };
        const data = { companyName, contactName };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
        fetch('https://northwind.vercel.app/api/suppliers', options)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log("addData error: ", err))

    } else {
        console.log('required!!');
    }
}

const btn = document.querySelector('button')
btn.addEventListener('click', addData)