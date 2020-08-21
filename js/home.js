const images = document.getElementsByClassName('demoImage');

const intl = document.getElementById('demoInternational');
const korean = document.getElementById('demoKorean');
const dragDrop = document.getElementById('demoDragDrop');
const weather = document.getElementById('demoWeather');
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
        }
    });
}

// for (let i=0; i<images.length; i++) {
//     images[i].addEventListener('mouseover', function(e) {
//         let name = e.target.getAttribute('src');
//         name = name.split('.');
//         let newName = name[0] + '.gif';
//         e.target.src = `${newName}`;
//     })
//     images[i].addEventListener('mouseout', function(e) {
//         let name = e.target.getAttribute('src');
//         name = name.split('.');
//         let newName = name[0] + '.jpg';
//         e.target.src = `${newName}`;
//     })
// }

const modal = document.getElementById("myModal");
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

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    hamburger.classList.remove('is-active');
  }
}

/////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////

changeImage(intl);
changeImage(korean);
changeImage(dragDrop);
changeImage(weather);