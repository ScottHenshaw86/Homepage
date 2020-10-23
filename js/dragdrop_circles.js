(function() {

    let draggableBoxes = document.querySelectorAll('.draggableBox');
    let border = document.querySelector('.border');
    let draggableBorder = document.querySelector('.draggableBorder');
    let dragging = false;
    var box;
    let box1 = document.querySelector('.box1');
    let box2 = document.querySelector('.box2');
    let box3 = document.querySelector('.box3');
    let box4 = document.querySelector('.box4');
    let getCorners = document.getElementById('getCornersButton');
    
    function getOffset(element) {
        var top = 0,
            left = 0;
        do {
            top += element.offsetTop;
            left += element.offsetLeft;
        } while (element = element.offsetParent);
        return {
            top: top,
            left: left
        }
    }

    getCorners.addEventListener('click', function() {
        let corner1 = {x: box1.offsetLeft, y: box1.offsetTop};
        let corner2 = {x: box2.offsetLeft, y: box2.offsetTop};
        let corner3 = {x: box3.offsetLeft, y: box3.offsetTop};
        let corner4 = {x: box4.offsetLeft, y: box4.offsetTop};
        let corners = [corner1, corner2, corner3, corner4];

        console.log('corners: ', corners);
    });

    function makePolygon() {
        let box1Top = box1.offsetTop;
        let box1Left = box1.offsetLeft;
        let box2Top = box2.offsetTop;
        let box2Left = box2.offsetLeft;
        let box3Top = box3.offsetTop;
        let box3Left = box3.offsetLeft;
        let box4Top = box4.offsetTop;
        let box4Left = box4.offsetLeft;
        let box1TopPlus = box1.offsetTop+1;
        let box1LeftPlus = box1.offsetLeft+1;
        let box2TopPlus = box2.offsetTop+1;
        let box2LeftMinus = box2.offsetLeft-1;
        let box3TopMinus = box3.offsetTop-1;
        let box3LeftMinus = box3.offsetLeft-1;
        let box4TopMinus = box4.offsetTop-1;
        let box4LeftPlus = box4.offsetLeft+1;
        let newPolygon =  "polygon( " 
                + box1Left + "px " + box1Top + "px, "
                + box4Left + "px " + box4Top + "px, " 
                + box4LeftPlus + "px " + box4TopMinus + "px, " 
                + box1LeftPlus + "px " + box1TopPlus + "px, " 
                + box2LeftMinus + "px " + box2TopPlus + "px, " 
                + box3LeftMinus + "px " + box3TopMinus + "px, " 
                + box4LeftPlus + "px " + box4TopMinus + "px, " 
                + box4Left + "px " + box4Top + "px, " 
                + box3Left + "px " + box3Top + "px, " 
                + box2Left + "px " + box2Top + "px)";
        // console.log('newPolygon: ', newPolygon);
        return newPolygon;
    }

    draggableBorder.style.clipPath = makePolygon();
    
    function addEvents(element) {
        if (screen && screen.width < 900) {
            element.addEventListener('touchstart', function(e) {
                dragging = true;
                box = e.currentTarget;
                let position = {
                top: box.offsetTop,
                left: box.offsetLeft
                };
                let touch = e.touches;
                let boxX = position.left, boxY = position.top;
                let touchX = touch[0].clientX, touchY = touch[0].clientY;
                document.addEventListener('touchmove', movingTouchBox = function(event) {
                    if (dragging === true) {
                        box.style.left = (boxX + (event.touches[0].clientX - touchX)) + 'px';
                        box.style.top = (boxY + (event.touches[0].clientY - touchY)) + 'px';
                        box.style.zIndex = '100';
                        draggableBorder.style.clipPath = makePolygon();
                    } 
                });
              });
              element.addEventListener('touchend', function(event) {
                  document.removeEventListener('mousemove', movingTouchBox);
                  dragging = false;
                  box = '';
              })
          }
        ////////////
      	else if (screen && screen.width > 900) {
          element.addEventListener('mousedown', function(e) {
              console.log('mousedown');
              dragging = true;
              box = e.currentTarget;
              let position = {
                top: box.offsetTop,
                left: box.offsetLeft
              };
              let boxX = position.left, boxY = position.top;
              let mouseX = e.clientX, mouseY = e.clientY;
              
              document.addEventListener('mousemove', movingBox = function(event) {
                  console.log('mousemove');
                  if (dragging === true) {
                    box.style.left = (boxX + (event.clientX - mouseX)) + 'px';
                    box.style.top = (boxY + (event.clientY - mouseY)) + 'px';
                    box.style.zIndex = '100';
                    box.style.cursor = 'grabbing';                    
                    draggableBorder.style.clipPath = makePolygon();
                  } 
              });
            });
            element.addEventListener('mouseup', function(event) {
                document.removeEventListener('mousemove', movingBox);
                console.log('mouseup');
                dragging = false;
            event.target.style.cursor = 'grab';
                box = '';
            })
          
        }
    }

    for (let i=0, c=draggableBoxes.length; i<c; i++) {
        addEvents(draggableBoxes[i]);
    };

})();