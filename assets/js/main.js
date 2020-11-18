//-== Header fixed on top animation
(function () {

    var headerScroll = getId('header-main'),
        scrollHeight = 10,
        classHeader = 'active';

    //SCROLL
    window.addEventListener("scroll", scrollOn);

    function scrollOn() {
        animatedScroll(headerScroll, classHeader, scrollHeight);
    }

    //Função que on scroll muda o comportamento do elemento
    function animatedScroll(element, classN, height) {
        y = pageYOffset; //resgata do objeto window o valor pageYOffset e guarda na variável
        if (y > height) {
            element.className = classN;
        } else {
            element.className = '';
        }
    }

    // Função toggle adiciona ou tira a class do elemento
    function toggle(element, classe) {
        element.className = element.className ? '' : classe;
    }

    //Função que retorna o id do elemento
    function getId(id) {
        return document.getElementById(id);
    }


})(); 
//========== /Header fixed on top animation


//== Contador
(function(){
    // Set the date we're counting down to
    var countDownDate = new Date("Nov 27, 2030 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
    }, 1000);
})(); 
//========== /Contador




//-== HamburgerMenu Toggle
(function(){
    function hamburgueToggle() {
        document.getElementById('hamb').classList.toggle('open');
        document.getElementById('header-main').classList.toggle('open');
    }
    
    // Select all the elements with example class.
    var hambComponent = document.querySelectorAll('.hamb');
    var itemNavComponent = document.querySelectorAll('.itemNav');
    
    // Loop through the elements.
    for (var i = 0; i < hambComponent.length; i++) {
        hambComponent[i].addEventListener('click', hamburgueToggle);
    }
    for (var i = 0; i < itemNavComponent.length; i++) {
        itemNavComponent[i].addEventListener('click', hamburgueToggle);
    }
})();
//======================== /HamburgerMenu Toggle



//== Lightbox About-2
// https://biati-digital.github.io/glightbox/
(function(){
    var lightboxInlineIframe = GLightbox({
        'selector': '.glightbox4'
    });
})();
//======================== /Lightbox About-2




//== Anchor Scrollsmooth
// Vanilla JavaScript Scroll to Anchor @ https://perishablepress.com/vanilla-javascript-scroll-anchor/
(function() {
    
    function scrollTo() {
        const links = document.querySelectorAll('.menu-item a');
        links.forEach(each => (each.onclick = scrollAnchors));
    }

    function scrollAnchors(e, respond = null) {
        const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
        e.preventDefault();
        var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
        const targetAnchor = document.querySelector(targetID);
        if (!targetAnchor) return;
        const originalTop = distanceToTop(targetAnchor);
        window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
        const checkIfDone = setInterval(function() {
            const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
            if (distanceToTop(targetAnchor) === 0 || atBottom) {
                targetAnchor.tabIndex = '-1';
                targetAnchor.focus();
                window.history.pushState('', '', targetID);
                clearInterval(checkIfDone);
            }
        }, 150);
    }

	scrollTo();
})();

//======================== /Anchor Scrollsmooth


//== Hero Review
(function(){
    new Glider(document.querySelector('.hero-box-template'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        duration: 2,
        arrows: {
            prev: '.prev-hero-template',
            next: '.next-hero-template'
        },
    });
})();
//======================== /Hero Review



//== Slider Card moduleCards-1
new Glider(document.querySelector('.cards-glider'), {
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: '#dots-cards',
    arrows: {
        prev: '.prev-cards',
        next: '.next-cards'
    },
});
//======================== /Slider Card moduleCards-1


//== Slider Review moduleReviews-1
new Glider(document.querySelector('.swiper-wrapper'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    duration: 2,
    arrows: {
        prev: '.prev-review',
        next: '.next-review'
    },
});
//======================== /Slider Review moduleReviews-1

//== Slider Card moduleReviews-2
new Glider(document.querySelector('.glider-reviews'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: false,
    arrows: {
        prev: '.prev-reviews',
        next: '.next-reviews'
    },
    responsive: [{
        breakpoint: 750,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
        }
    }]
});
//======================== /Slider Card moduleReviews-2


//== Accordion Module
(function(){
    let accTitle = document.getElementsByClassName("acc-heading");
    let accContent = document.getElementsByClassName("acc-content");
    let singleMode = true;
    
    for( let j=0; j<accContent.length; j++ ){
        let realHeight = accContent[j].offsetHeight;
        accContent[j].setAttribute("data-height", realHeight + "px");
        accContent[j].style.height = 0;
    }
    
    for( let i=0; i<accTitle.length; i++ ){
        accTitle[i].onclick = function(){
            let openedAcc = this.getAttribute('href').replace('#', '');
    
            if( this.classList.contains("active") ){
                this.classList.remove("active");
                document.getElementById(openedAcc).style.height = 0;
                
                return false;
            }
            
            if( singleMode ){						
                for(let k=0; k<accTitle.length; k++) {
                    accTitle[k].classList.remove("active");
                }
    
                for(let j=0; j<accContent.length; j++) {
                    accContent[j].style.height = 0;
                }
            }
            
            this.classList.add("active");
            
            document.getElementById(openedAcc).style.height = accContent[i].getAttribute("data-height");
            
            return false;
        }
    }
})();
//======================== /Accordion Module
        


//== Waterfall 
(function() {
    var grid = document.querySelector('.my-grid');
    
    document.addEventListener("load", function() {
        waterfall(grid);
      }, 1000);

    window.addEventListener('resize', function () {
        waterfall(grid);
    });
})();
//======================== /Waterfall

(function(){
    //== Modal Toggle
    function modalSampleToggle() {
        document.getElementById('modalSample').classList.toggle('open');
        document.getElementById('inv-modal').classList.toggle('open');
        document.getElementById('body').classList.toggle('scrollhidden');
    }
    // Select all the elements with example class.
    var modalSample = document.querySelectorAll('.modalcta');
    // Loop through the elements.
    for (var i = 0; i < modalSample.length; i++) {
    // Add the class margin to the individual elements.
    modalSample[i].addEventListener('click', modalSampleToggle);
    }
    //------------------------ Modal Header
})();




new ClipboardJS('.btn-copy');


