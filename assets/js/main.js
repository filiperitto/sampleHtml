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






//-== HamburgerMenu Toggle
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
//======================== /HamburgerMenu Toggle






//-== modalAbout Toggle
function modalAboutToggle() {
    document.getElementById('modalAbout').classList.toggle('open');
    document.getElementById('body').classList.toggle('scrollhidden');
}

// Select all the elements with example class.
var modalAboutComponent = document.querySelectorAll('.cta-videoAbout');

for (var i = 0; i < modalAboutComponent.length; i++) {
    modalAboutComponent[i].addEventListener('click', modalAboutToggle);
}
//======================== /modalAbout Toggle




//== Anchor Scrollsmooth
// Vanilla JavaScript Scroll to Anchor @ https://perishablepress.com/vanilla-javascript-scroll-anchor/

(function() {
	scrollTo();
})();

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
//======================== /Anchor Scrollsmooth



//== Slider Card
new Glider(document.querySelector('.cards-glider'), {
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: '#dots-cards',
    arrows: {
        prev: '.prev-cards',
        next: '.next-cards'
    },
});
//======================== /Slider Card


//== Slider Review
new Glider(document.querySelector('.swiper-wrapper'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    duration: 2,
    arrows: {
        prev: '.prev-review',
        next: '.next-review'
    },
});
//======================== /Slider Review


//== /Accordion Module
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
//======================== /Accordion Module
        


//Waterfall 

(function() {
    var grid = document.querySelector('.my-grid');
    
    document.addEventListener("load", function() {
        waterfall(grid);
      }, 1000);

    window.addEventListener('resize', function () {
        waterfall(grid);
    });
})();


