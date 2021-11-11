$(document).ready(function(){
    //Filter Portfolio Grid
    let $btns = $('.project-area .button-group button');
    $btns.click(function(e){
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');
        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });
        return false;
    })

    //Click on All button to reset the grid display
    $('.project-area .button-group #btn-all').trigger('click');
    $('.project-area .button-group #btn-all').trigger('click');
    
    //Magnific Popup
    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
        // other options
    });

    //Owl-carousel
    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        dots:true,
        responsive:{
            0:{items:1},
            544:{items:2}
        }
    })

    //Sticky Navigation Menu
    let nav_offset_top = $('.header_area').height() + 50;

    function navBarFixed(){
        if($('.header_area').length){
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if(scroll >= nav_offset_top){
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navBarFixed();

});