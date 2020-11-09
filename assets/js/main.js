$(document).ready(function () {

    // Hamburg Menu animation
    $('.hamb').click(function () {
        $('#hamb').toggleClass('open');
        $('#header').toggleClass('open');
    });
    
    $('.itemNav').click(function () {
        $('#hamb').toggleClass('open');
        $('#header').toggleClass('open');
    });
    
    
    $('.cta-videoAbout').click(function () {
        $('#modalAbout').toggleClass('open');
        $('body').toggleClass('scrollhidden');
    });


    // Cache selectors
    var lastId,
        topMenu = $(".menu-item, .hero"),
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function (e) {

        var href = $(this).attr("href")
        //offsetTop = href === "#" ? 0 : $(href).offset().top+2;  
        $('html, body').stop().animate({
            scrollTop: href === "#" ? 0 : $(href).offset().top - 150
        }, 1000);

        e.preventDefault();
    });


    // MAIN MENU ANIMATION
    // Menu change
    var nav = $('header');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            nav.addClass("active");
        } else {
            nav.removeClass("active");
        }
    });


});

// Slider's swipe god

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Accordion

$(document).ready(function () {
    'use strict';

    $('.accordion-group').ariaAccordion({
        expandOnlyOne: true,
        slideSpeed: 550
    });

});

//Waterfall 
$(document).ready(function () {
    waterfall('.my-grid');
});