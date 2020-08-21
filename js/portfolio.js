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

function detectSwipe(f) {
    var detect = {
        startX: 0,
        startY: 0,
        endX: 0,
        endY: 0,
        minX: 200,   // min X swipe for horizontal swipe
        maxX: 200,   // max X difference for vertical swipe
        minY: 200,   // min Y swipe for vertical swipe
        maxY: 200    // max Y difference for horizontal swipe
    },
        direction = null,
        element = document.body;

    element.addEventListener('touchstart', function (event) {
        var touch = event.touches[0];
        detect.startX = touch.screenX;
        detect.startY = touch.screenY;
    });

    element.addEventListener('touchmove', function (event) {
        // event.preventDefault();
        var touch = event.touches[0];
        detect.endX = touch.screenX;
        detect.endY = touch.screenY;
    });

    element.addEventListener('touchend', function (event) {
        if (
            // Horizontal move.
            (Math.abs(detect.endX - detect.startX) > detect.minX)
                && (Math.abs(detect.endY - detect.startY) < detect.maxY)
        ) {
            direction = (detect.endX > detect.startX) ? 'right' : 'left';
        } else if (
            // Vertical move.
            (Math.abs(detect.endY - detect.startY) > detect.minY)
                && (Math.abs(detect.endX - detect.startX) < detect.maxX)
        ) {
            direction = (detect.endY > detect.startY) ? 'down' : 'up';
        }

        if ((direction !== null) && (typeof f === 'function')) {
            f(direction);
        }
    });
}

detectSwipe(myfunction);

function myfunction(direction) {
    if (direction === 'right') {
        plusSlides(1)
    } else if (direction === 'left') {
        plusSlides(-1)
    }
}