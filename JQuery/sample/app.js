$(document).ready(function () {
    const table = `<table style="width:50%">
                        <tr>
                            <th>ID</th>
                            <th>Customer ID</th>
                            <th>Order Date</th>
                            <th>Product Id</th>
                            <th>Unit Price</th>
                        </tr>
                    </table>`

    $('body').append(table)

    function getOrders() {
        $.get('https://northwind.vercel.app/api/orders', function (data, status) {
            console.log(data, status);
        }).done(function (data) {
            data.reverse().forEach(element => {
                const row = `<tr class="ajax">
                            <td>${element.id}</td>
                            <td>${element.customerId}</td>
                            <td>${new Date(element.orderDate)?.toLocaleString()}</td>
                            <td>${element?.details?.[0].productId}</td>
                            <td>${element?.details?.[0].unitPrice}</td>
                        </tr>
                        `
                $('table').append(row)
            });
        }).fail(function (error) {
            console.log('Order get error:', error);
        })
    }
    getOrders()

    $.get('https://northwind.vercel.app/api/categories', function (data, status) {
        if (status === "success") {
            data.forEach(element => {
                const option = `<option value=${element.id}>${element.name}</option>`
                $('#categories').append(option)
            });
        }
    }).always(async function () {
        const categoryID = $('#categories').val()
        const products = await getProductsByCategoryId(categoryID)
        products.forEach(product => {
            const option = `<option value=${product.id}>${product.name}</option>`
            $('#products').append(option)
        })
    })

    async function getProductsByCategoryId(id) {
        if (id) {
            let products = [];
            await $.get('https://northwind.vercel.app/api/products', function (data, status) {
                console.log(data);
                console.log(id);
                products = data.filter(q => +q.categoryId === +id)
            })
            return products
        }
    }

    $('#categories').on('change', function () {
        const categoryId = $(this).val()
        if (categoryId) {
            $('#products').empty()
            getProductsByCategoryId(categoryId).then(products => {
                products.forEach(product => {
                    const option = `<option value=${product.id}>${product.name}</option>`
                    $('#products').append(option)
                });
            })
        }
    })

    $('form').on('submit', function (e) {
        e.preventDefault();
        const customerId = $("input[id='customer']", this).val()
        const unitPrice = $("input[id='unitPrice']", this).val()
        const product = $("select[id='products']", this).val()

        const productData = { unitPrice: +unitPrice, productId: +product }
        const data = {
            customerId, orderDate: Date.now()
        }
        // data.details.push(productData)

        $.post('https://northwind.vercel.app/api/orders', data, function (data, status) {
            console.log(data, status);
            $('.ajax').each(function (i, value) {
                value.remove();
            });
            getOrders()
        }).fail(function (error) {
            console.log('Order post error:', error);
        })
    })


})