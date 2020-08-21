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