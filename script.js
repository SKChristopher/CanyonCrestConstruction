//divs - background & navbar
let background = document.createElement('div');
background.id = 'background';
document.body.appendChild(background);

let navbar = document.createElement('div');
navbar.id = 'navbar';
navbar.className = 'navbar';
document.getElementById('background').appendChild(navbar);
let navbarLeft = document.createElement('div');
navbarLeft.id = 'navbarLeft';
document.getElementById('navbar').appendChild(navbarLeft);
let navbarRight = document.createElement('div');
navbarRight.id = 'navbarRight';
document.getElementById('navbar').appendChild(navbarRight);
let navbarCenter = document.createElement('div');
navbarCenter.id = 'navbarCenter';
document.getElementById('navbar').appendChild(navbarCenter);

//variables
let workPhotos = ['img/CCC8.jpg', 'img/CCC1.jpg', 'img/CCC2.jpg', 'img/CCC3.jpg', 'img/CCC4.jpg', 'img/CCC5.jpg', 'img/CCC6.jpg', 'img/CCC7.jpg', 'img/CCC0.jpg'];

//logo
// let logo = document.createElement('img');
// logo.id = 'logo';
// logo.src = 'img/logo.png';
// logo.className = 'logo';
// document.getElementById('navbarLeft').appendChild(logo);

//navbar
let home = document.createElement('a');
home.id = 'home';
home.className = 'navLink';
home.href = '#';
home.textContent = 'Home';
document.getElementById('navbarCenter').appendChild(home);
let homeIcon = document.createElement('i');
homeIcon.id = 'homeIcon';
homeIcon.className = 'fa fa-home';
document.getElementById('home').appendChild(homeIcon);

let quotes = document.createElement('a');
quotes.id = 'quotes';
quotes.className = 'navLink';
quotes.href = '#quoteBox';
quotes.textContent = 'View Work';
document.getElementById('navbarCenter').appendChild(quotes);
let quotesIcon = document.createElement('i');
quotesIcon.id = 'quotesIcon';
quotesIcon.className = 'fa fa-eye';
document.getElementById('quotes').appendChild(quotesIcon);

let reviews = document.createElement('a');
reviews.id = 'reviews';
reviews.className = 'navLink';
reviews.href = 'https://member.angieslist.com/member/store/14773869/reviews#';
reviews.target = '_blank';
reviews.textContent = 'Reviews';
document.getElementById('navbarCenter').appendChild(reviews);
let reviewsIcon = document.createElement('i');
reviewsIcon.id = 'reviewsIcon';
reviewsIcon.className = 'fa fa-star';
document.getElementById('reviews').appendChild(reviewsIcon);

let contact = document.createElement('a');
contact.id = 'contact';
contact.className = 'navLink';
contact.href = '#contactUs';
contact.textContent = 'Contact Us';
document.getElementById('navbarCenter').appendChild(contact);
let contactIcon = document.createElement('i');
contactIcon.id = 'contactIcon';
contactIcon.className = 'fa fa-envelope-open';
document.getElementById('contact').appendChild(contactIcon);

//Canyon Crest Construction
let centerText = document.createElement('p');
centerText.id = 'centerText';
centerText.textContent = 'Canyon Crest Construction';
document.getElementById('background').appendChild(centerText);

//Content
let content = document.createElement('div');
content.id = 'content';
document.getElementById('background').appendChild(content);

let viewOurWork = document.createElement('div');
viewOurWork.id = 'viewOurWork';
document.getElementById('content').appendChild(viewOurWork);
let viewWork = document.createElement('p');
viewWork.id = 'viewWork';
viewWork.textContent = '';
viewWork.className = 'titleText';
document.getElementById('viewOurWork').appendChild(viewWork);
let viewWork2 = document.createElement('p');
viewWork2.id = 'viewWork2';
viewWork2.textContent = 'All photos depict work created by Canyon Crest Construction';
viewWork2.className = 'regularText';
document.getElementById('viewOurWork').appendChild(viewWork2);

let carouselCircleDiv = document.createElement('div');
carouselCircleDiv.id = 'carouselCircleDiv';
document.getElementById('content').appendChild(carouselCircleDiv);

let viewWorkPhotos = [];
let carouselCircle = [];
for (let i = 0; i < workPhotos.length; i++) {
    viewWorkPhotos[i] = document.createElement('img');
    viewWorkPhotos[i].className = 'workPhoto';
    viewWorkPhotos[i].src = workPhotos[i];
    document.getElementById('viewOurWork').appendChild(viewWorkPhotos[i]);
    carouselCircle[i] = document.createElement('div');
    carouselCircle[i].className = 'carouselCircle';
    carouselCircle[i].id = 'carouselCircle' + i;
    document.getElementById('carouselCircleDiv').appendChild(carouselCircle[i]);
}

//photo carousel
let timer = 5000;
let photoIndex = 0;
function currentPhoto(x) {
    for (let i = 0; i < workPhotos.length; i++) {
        viewWorkPhotos[i].style.display = 'none';
        viewWorkPhotos[photoIndex].style.display = 'block';
        carouselCircle[i].className = 'carouselCircle';
        carouselCircle[photoIndex].className = 'carouselCircleSelected';
    }
    photoIndex++;
    if (photoIndex >= workPhotos.length) {photoIndex = 0;}
    setTimeout(currentPhoto, timer);
}
currentPhoto(photoIndex);

for (let j = 0; j < workPhotos.length; j++) {
    carouselCircle[j].onclick = function() {
        photoIndex = j;
        for (let i = 0; i < workPhotos.length; i++) {
            viewWorkPhotos[i].style.display = 'none';
            viewWorkPhotos[photoIndex].style.display = 'block';
            carouselCircle[i].className = 'carouselCircle';
            carouselCircle[photoIndex].className = 'carouselCircleSelected';
        }
    }
}

//more content
let learnAboutUs = document.createElement('div');
learnAboutUs.id = 'learnAboutUs';
document.getElementById('content').appendChild(learnAboutUs);
let learn = document.createElement('p');
learn.id = 'learn';
learn.textContent = 'Learn About Us';
learn.className = 'titleText';
document.getElementById('learnAboutUs').appendChild(learn);
let learn2 = document.createElement('p');
learn2.id = 'learn2';
learn2.textContent = 'Canyon Crest Construction has been performing all levels of building, remodeling, and major repairs, since 1998.';
learn2.className = 'regularText';
document.getElementById('learnAboutUs').appendChild(learn2);

let ourServices = document.createElement('div');
ourServices.id = 'ourServices';
document.getElementById('content').appendChild(ourServices);
let services = document.createElement('p');
services.id = 'services';
services.textContent = 'Our Services';
services.className = 'titleText';
document.getElementById('ourServices').appendChild(services);
let services2 = document.createElement('p');
services2.id = 'services2';
services2.textContent = "We offer start-to-finish solutions for every project, specializing in interior or exterior home renovations, including bathroom and kitchen remodeling, home additions, hardscape, outdoor kitchens and more. We guarantee high-quality construction for each and every project. Have your custom project built today!";
services2.className = 'regularText';
document.getElementById('ourServices').appendChild(services2);

let quoteBox = document.createElement('div');
quoteBox.id = 'quoteBox';
document.getElementById('content').appendChild(quoteBox);
let quoteTitle = document.createElement('p');
quoteTitle.id = 'quoteTitle';
quoteTitle.textContent = 'View More Work';
quoteTitle.className = 'titleText';
document.getElementById('quoteBox').appendChild(quoteTitle);
let quoteText = document.createElement('p');
quoteText.id = 'quoteText';
quoteText.textContent = "If you'd like to see more photos of projects completed by Canyon Crest Construction, click here.";
quoteText.className = 'regularText';
document.getElementById('quoteBox').appendChild(quoteText);

let contactUs = document.createElement('div');
contactUs.id = 'contactUs';
document.getElementById('content').appendChild(contactUs);
let contactTitle = document.createElement('p');
contactTitle.id = 'contactTitle';
contactTitle.textContent = 'Contact Us';
contactTitle.className = 'titleText';
document.getElementById('contactUs').appendChild(contactTitle);
let contactText = document.createElement('p');
contactText.id = 'contactText';
contactText.textContent = "Canyon Crest Construction\nLicense 749990\nSouther California Builder\nBuildCanyonCrest@gmail.com\n(949) 678-4271";
contactText.className = 'regularText';
document.getElementById('contactUs').appendChild(contactText);



//banner
let banner = document.createElement('p');
banner.id = 'banner';
banner.textContent = '';
banner.className = 'bannerText';
document.getElementById('content').appendChild(banner);
let license = document.createElement('p');
license.id = 'license';
license.textContent = '';
license.className = 'bannerText'
document.getElementById('content').appendChild(license);
let copyright = document.createElement('p');
copyright.id = 'copyright';
copyright.textContent = 'Copyright 2013. Canyon Crest Construction. All rights reserved.';
document.getElementById('content').appendChild(copyright);


//navbar function
document.body.onscroll = function navbar() {
    let scrollPosY = window.pageYOffset | document.body.scrollTop;
    if (scrollPosY > 30) {
        document.getElementById('navbar').className = 'navbarScroll';
        document.getElementById('logo').className = 'logoScroll';
    } else {
        document.getElementById('navbar').className = 'navbar';
        document.getElementById('logo').className = 'logo';
    }
}

//swiping across photos
document.getElementById('viewOurWork').addEventListener('touchstart', handleTouchStart, false);        
document.getElementById('viewOurWork').addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;                                                        

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            //swipe left
            photoIndex -= 1;
            for (let i = 0; i < workPhotos.length; i++) {
                viewWorkPhotos[i].style.display = 'none';
                viewWorkPhotos[photoIndex].style.display = 'block';
                carouselCircle[i].className = 'carouselCircle';
                carouselCircle[photoIndex].className = 'carouselCircleSelected';
            }
        } else {
            /* right swipe */
            photoIndex += 1;
            for (let i = 0; i < workPhotos.length; i++) {
                viewWorkPhotos[i].style.display = 'none';
                viewWorkPhotos[photoIndex].style.display = 'block';
                carouselCircle[i].className = 'carouselCircle';
                carouselCircle[photoIndex].className = 'carouselCircleSelected';
            }
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};