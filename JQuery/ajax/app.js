$(document).ready(function () {
    // $.ajax('https://northwind.vercel.app/api/suppliers', {
    //     success: function (data, status) {
    //         console.log(data);
    //     },
    //     error: function (error) {
    //         console.log(error);
    //     }
    //     complete: function () {
    //         console.log('done');
    //     }
    // })

    // const getData = $.get('https://northwind.vercel.app/api/suppliers', function (data, status) {
    //     console.log(data, status);
    // }).done(function (data) {//success
    //     data.forEach(supplier => {
    //         const li = `<li>${supplier.companyName}</li>`
    //         $('ul').append(li)
    //     });
    // }).fail(function (error) {//error
    //     console.log('Supplier get Error', error);
    // }).always(function () {
    //     console.log('done');
    // })

    // getData.always(function () {//complete
    //     console.log('done 2');
    // })

    $('button').click(function () {
        // $.ajax('https://northwind.vercel.app/api/suppliers', {
        //     type: 'POST',
        //     data: { companyName: 'Apple', contactName: 'Bruce' },
        //     success: function (data, status) {
        //         console.log(data, status);
        //     },
        //     error: function (error) {
        //         console.log('Supplier post error', error);
        //     }
        // })
        const data = { companyName: 'Asus', contactName: 'Bruce' }
        $.post('https://northwind.vercel.app/api/suppliers', data,
            function (data, status) {
                console.log(data, status);
            }).fail(function (error) {
                console.log(error);
            })
    })


})