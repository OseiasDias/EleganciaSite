

$(document).ready(function () {
    //HERO SLider

    $('#slider-troca').owlCarousel({

        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        smartSpeed: 1000,
        dots: true,
        //navText: ['PREV','NEXT'],
        autoplay: true,
        autoplayTimeOut: 7000,
        autoplayHovePause: false,
        Responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            },
            1024: {
                nav: true,
            }
        }
    });

    //Projecto Slider

    $('#portefolio').owlCarousel({

        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        margin: 14,
        smartSpeed: 1000,
        dots: true,
        autoplay: true,
        autoplayTimeOut: 7000,
        autoplayHovePause: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
                margin: 0,
            },
            768: {
                items: 2,
                nav: false,
                center: true,
            },
            1140: {
                items: 2,
                center: true,
                nav: false,
            }
        }
    })
});



$('#mais').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    margin: 10,
    smartSpeed: 1000,
    dots: true,
    autoplay: true,
    autoplayTimeOut: 7000,
    autoplayHovePause: false,
    responsive: {
        0: {
            items: 2,
            nav: false,
            margin: 15,
          
        },
        768: {
            items: 2,
            left: true,
            margin: 10,
        },
        1140: {
            items: 3,
            left: true,
           
         
        }
    }
});



/* SECAO 3*/

$('#works').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    margin: 10,
    smartSpeed: 1000,
    dots: true,
    autoplay: true,
    autoplayTimeOut: 7000,
    autoplayHovePause: false,
    responsive: {
        0: {
            items: 1,
            nav: false,
            margin: 15,
          
        },
        576:{
            items: 2,
            left: true,
            margin: 10,
        },
        768: {
            items: 2,
            left: true,
            margin: 10,
        },
        1140: {
            items: 3,
            left: true,
            margin:25,
           
         
        }
    }
});

$('#testational').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    margin: 10,
    smartSpeed: 1000,
    dots: true,
    autoplay: true,
    autoplayTimeOut: 7000,
    autoplayHovePause: false,
    responsive: {
        0: {
            items: 1,
            nav: false,
            margin: 15,
          
        },
        576:{
            items: 1,
            left: true,
            margin: 10,
        },
        768: {
            items: 1,
            left: true,
            margin: 10,
        },
        1140: {
            items: 1,
            left: true,
            margin:25,
           
         
        }
    }
});



$('#maisss').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    margin: 10,
    smartSpeed: 1000,
    dots: true,
    autoplay: true,
    autoplayTimeOut: 7000,
    autoplayHovePause: false,
    responsive: {
        0: {
            items: 1,
            nav: false,
            margin: 15,
          
        },
        576:{
            items: 2,
            left: true,
            margin: 10,
        },
        768: {
            items: 2,
            left: true,
            margin: 10,
        },
        1140: {
            items: 3,
            left: true,
            margin:25,
           
         
        }
    }
})
