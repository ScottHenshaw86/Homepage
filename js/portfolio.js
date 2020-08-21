const images = document.getElementsByClassName('demoImage');
const intl = document.getElementById('demoInternational');
const korean = document.getElementById('demoKorean');
const dragDrop = document.getElementById('demoDragDrop');
const weather = document.getElementById('demoWeather');
const tesla = document.getElementById('demoTesla');
const intlVideo =   `<video autoplay="autoplay" controls="controls" onclick="this.paused ? this.play() : this.pause();">
                        <source src="img/home/internationalSchoolBrochureDemo.webm" type="video/webm">
                    </video>`;
const koreanVideo =   `<video autoplay="autoplay" controls="controls" onclick="this.paused ? this.play() : this.pause();">
                        <source src="img/home/rawKoreanGameDemo.webm" type="video/webm">
                    </video>`;
const dragDropVideo =   `<video autoplay="autoplay" controls="controls" onclick="this.paused ? this.play() : this.pause();">
                        <source src="img/home/dragDropDemo.webm" type="video/webm">
                    </video>`;
const weatherVideo =   `<video autoplay="autoplay" controls="controls" onclick="this.paused ? this.play() : this.pause();">
                        <source src="img/home/weatherForecastDemo.webm" type="video/webm">
                    </video>`;
const teslaVideo =   `<video autoplay="autoplay" controls="controls" onclick="this.paused ? this.play() : this.pause();">
                        <source src="img/home/teslaDemo.webm" type="video/webm">
                    </video>`;               

changeImage(intl);
changeImage(korean);
changeImage(dragDrop);
changeImage(weather);
changeImage(tesla);

let source;
function changeImage(e) {
    e.addEventListener('click', function() {
        switch (e) {
            case intl: 
                e.innerHTML = intlVideo;
                break;
            case korean:
                e.innerHTML = koreanVideo;
                break;
            case dragDrop:
                e.innerHTML = dragDropVideo;
                break;
            case weather:
                e.innerHTML = weatherVideo;
                break;
            case tesla:
                e.innerHTML = teslaVideo;
                break;
        }
    });
    play = false;
}

const modal = document.getElementById('myModal');
const btn = document.getElementById("myBtn");
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function(e) {
    if (e.currentTarget.classList.contains('is-active')) {
        e.currentTarget.classList.remove('is-active');
        modal.style.display = "none";
    } else {
        e.currentTarget.classList.add('is-active');
        modal.style.display = "block";
    }  
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);
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
            plusSlides(1);
            console.log('left')
        } else {
            plusSlides(-1)
            console.log('right')
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