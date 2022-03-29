// $(function () {
// });

$(document).ready(function () {

    // this bind edilme farkı arrow function
    // let obj = {
    //     name: 'korhan',
    //     surname: 'Kosece',
    //     getName() {
    //         return this.name
    //     }
    // }
    // console.log(obj.getName());

    // $('p').click(function () {
    //     console.log(this);
    //     $(this).hide()
    // })

    // $('p').click(function () {
    //     console.log(this);
    //     $(this).hide()
    // })

    // $('p').dblclick(function () {
    //     $(this).hide()
    // })

    // $('p').mouseenter(function () {
    //     $(this).hide()
    // })

    // $('p').mouseleave(function () {
    //     $(this).hide()
    // })

    // $('input').focus(function () {
    //     // document.querySelector('input').style
    //     $(this).css('background-color', 'yellow')
    // })

    // $('input').blur(function () {
    //     // document.querySelector('input').style
    //     $(this).css('background-color', 'green')
    // })

    // document.querySelector('p').addEventListener()
    // $('p').on('click', function () {
    //     $(this).hide()
    //     $(this).show()
    // })

    // $('button').click(function () {
    // $('#paragraph').toggle(1500)
    // $('#paragraph').hide(1500)
    // })

    // $('button').click(function () {
    //     // $('.div1').fadeIn()
    //     // $('.div2').fadeIn("slow")
    //     // $('.div3').fadeIn(2000)

    //     // $('.div1').fadeToggle()
    //     // $('.div2').fadeToggle("slow")
    //     // $('.div3').fadeToggle(2000)

    //     $('.div1').fadeTo("slow", 0.10)
    //     $('.div2').fadeTo("slow", 0.4)
    //     $('.div3').fadeTo("slow", 0.6)
    // })


    // $("#flip").click(function () {
    //     $("#panel").slideDown(2000);
    //     $("#panel").slideUp(2000);
    //     $("#panel").slideToggle(2000);
    // });

    // stop ile effectleri tek tek durdurur
    // $("button").click(function () {
    //     $("#panel").stop()
    // });

    // $('button').click(function () {
    //     $('#paragraph').hide()
    //     alert('Paragraf gizlendi')
    // })

    // $('button').click(function () {
    //     $('#paragraph').hide('slow', function () {
    //         alert('Paragraf gizlendi')
    //     })
    // })

    //getters
    // $('button').click(function () {
    //innerText
    // console.log($('#paragraph').text());
    // //innerHtml
    // console.log($('#paragraph').html());
    // //value
    // console.log($('input').val());
    //getAttributes
    // console.log($('input').attr('type'));
    // })

    //setters
    // $('button').click(function () {
    //     // $('#paragraph').text('Artık yeni paragraf bu')
    //     // $('#paragraph').html('<b>Artık yeni paragraf bu</b>')
    //     $('input').val('Amon Amarth')
    // })

    // $('button').click(function () {
    //     //setAttributes
    //     $('input').attr('type', 'number')
    //     $('input').attr({
    //         type: 'text',
    //         disabled: true
    //     })
    // })

    // function appendText() {
    //     let txt1 = '<p>Text</p>'
    //     let txt2 = $('<p></p>').text('Text2')
    //     let txt3 = document.createElement('p')
    //     txt3.innerText = 'Text3'

    //     // $('body').append(txt1, txt2, txt3)
    //     // $('body').after(txt1, txt2, txt3)
    //     // $('body').before(txt1, txt2, txt3)
    //     $('body').prepend(txt1, txt2, txt3)
    // }

    // function remove() {
    //     //filtre parametresi gönderilebilir
    //     // $('p').remove('#paragraph')
    //     $('#paragraph').empty()
    // }

    // $('button').click(remove)

    // $('button').click(function () {
    //     // console.log($('p').css('color'));
    //     $('p').css({ "background-color": "yellow", "font-size": "200%" });
    // })
    // $('button').click(function () {
    //     //  $('p').addClass('text')
    //     // $('p').removeClass('text')
    //     $('p').toggleClass('text')
    // })

    //Dimension
    //elementin kendisi 
    // width() height()
    // //bordera kadar
    // innerWidth()  innerHieght()
    // //border dahil 
    // outerWidth()  outerHieght()
    // //margin dahil
    // outerWidth(true)  outerHieght(true)


    //Traversing (Dom elementleri arasında gezinme)
    // $('button').click(function () {
    // console.log($('span').parent());
    // console.log($('span').parents());
    // console.log($('span').parents('div'));
    // console.log($('span').parentsUntil('body'));

    // console.log($('.div').children());
    // console.log($('.div').find('span'));

    // siblings()
    // next()
    // nextAll()
    // nextUntil()
    // prev()
    // prevAll()
    // prevUntil()
    // })

    // $('button').click(function () {
    //     // console.log($('div').first());
    //     // $('div').first().css('border', '1px solid black')
    //     // console.log($('div').last());
    //     // console.log($('div').eq(1));
    //     console.log($('div').not('.div'));
    // })

    //Filter
    // $('input').on('keyup', function () {
    //     const value = $(this).val().toLowerCase();
    //     $('ul li').filter(function () {
    //         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    //     })
    // })

    // $.noConflict();

})


