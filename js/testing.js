var randomSize = function() {
    var footLength= document.getElementById('footLength');
    var footWidth = document.getElementById('footWidth');
    footLength.value= Math.floor(Math.random() * (300 - 100 + 1) ) + 100;
    footWidth.value= Math.floor(Math.random() * (120 - 80 + 1) ) + 80;
};