const deleteSupplier = () => {
    const id = document.querySelector('#supplierID').value
    if (id) {
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }

        fetch(`https://northwind.vercel.app/api/suppliers/${id}`, options)
            .then(res => res.status === 200 ? res.json() : null)
            .then(data => {
                if (data) {
                    console.log(data)
                    alert('silme işlemi başarılı')
                } else {
                    console.log('Delete supplier error: ', err)
                }
            })
            .catch(err => console.log('Delete supplier error: ', err))
    }
}

const btn = document.querySelector('button')
btn.addEventListener('click', deleteSupplier)