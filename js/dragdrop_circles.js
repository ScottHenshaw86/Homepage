(function() {

    let draggableBoxes = document.querySelectorAll('.draggableBox');
    let outsideBorder = document.querySelector('.outside-border');
    let border = document.querySelector('.border');
    let draggableBorder = document.querySelector('.draggableBorder');
    let borderClipPath = window.getComputedStyle(draggableBorder, null).getPropertyValue('clip-path');
    console.log('borderClipPath', borderClipPath);
    let dragging = false;
    var box;
    let box1 = document.querySelector('.box1');
    let box2 = document.querySelector('.box2');
    let box3 = document.querySelector('.box3');
    let box4 = document.querySelector('.box4');
    let getCorners = document.getElementById('getCornersButton');

    for (let i=0, c=draggableBoxes.length; i<c; i++) {
        addEvents(draggableBoxes[i]);
    };
    
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
        let corner1 = {x: box1Left, y: box1Top};
        let corner2 = {x: box2Left, y: box2Top};
        let corner3 = {x: box3Left, y: box3Top};
        let corner4 = {x: box4Left, y: box4Top};
        let corners = [corner1, corner2, corner3, corner4];

        console.log('corners: ', corners);
        // console.log('corner2: ', corner2);
        // console.log('corner3: ', corner3);
        // console.log('corner4: ', corner4);
    });

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
    draggableBorder.style.clipPath = newPolygon;
    
    function addEvents(element) {
        if (screen && screen.width < 900) {
          element.addEventListener('touchstart', function(e) {
              var ongoingTouches = [];
              e.preventDefault();
              let position = getOffset(e.currentTarget);
              let touch = e.touches;
              let boxX = position.left, boxY = position.top;
              let touchX = touch[0].clientX, touchY = touch[0].clientY;
              border.addEventListener('touchmove', function(event) {
                  element.style.left = (boxX + (event.touches[0].clientX - touchX)) + 'px';
                  element.style.top = (boxY + (event.touches[0].clientY - touchY)) + 'px';
                  element.style.zIndex = '100';
              });
              e.currentTarget.addEventListener('touchend', function(event) {
                  newPosition = getOffset(event.target);
                  event.currentTarget.style.left = newPosition.left;
                  event.currentTarget.style.top = newPosition.top;
                  newBox = border.appendChild(element.cloneNode(true));
                  addEvents(newBox);
                  newBox.style.zIndex = '10';
                  border.removeChild(element);
              })
          });
        }
        ////////////
      	else if (screen && screen.width > 900) {
          element.addEventListener('mousedown', function(e) {
              dragging = true;
              box = e.currentTarget;
              let position = {
                top: box.offsetTop,
                left: box.offsetLeft
            };
              let boxX = position.left, boxY = position.top;
              let mouseX = e.clientX, mouseY = e.clientY;
              
              document.addEventListener('mousemove', function(event) {
                  if (dragging === true) {
                    //   console.log('box', box)
                    box.style.left = (boxX + (event.clientX - mouseX)) + 'px';
                    box.style.top = (boxY + (event.clientY - mouseY)) + 'px';
                    box.style.zIndex = '100';
                    box.style.cursor = 'grabbing';
                    ////////////////////////////////////////
                    box1Top = box1.offsetTop;
                    box1Left = box1.offsetLeft;
                    box2Top = box2.offsetTop;
                    box2Left = box2.offsetLeft;
                    box3Top = box3.offsetTop;
                    box3Left = box3.offsetLeft;
                    box4Top = box4.offsetTop;
                    box4Left = box4.offsetLeft;
                    box1TopPlus = box1.offsetTop+1;
                    box1LeftPlus = box1.offsetLeft+1;
                    box2TopPlus = box2.offsetTop+1;
                    box2LeftMinus = box2.offsetLeft-1;
                    box3TopMinus = box3.offsetTop-1;
                    box3LeftMinus = box3.offsetLeft-1;
                    box4TopMinus = box4.offsetTop-1;
                    box4LeftPlus = box4.offsetLeft+1;
                    newPolygon =  "polygon( " 
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
                    draggableBorder.style.clipPath = newPolygon;
                    borderClipPath = window.getComputedStyle(draggableBorder, null).getPropertyValue('clip-path');
                    // console.log('borderClipPath', borderClipPath);
                    //////////////////////////////////////
                  }
                  
              });
              });
            element.addEventListener('mouseup', function(event) {
                dragging = false;
            event.target.style.cursor = 'grab';
                box = '';
            //   console.log('event.target.offsetTop', event.target.offsetTop);
                // console.log('event.target', event.target)
            //   console.log('event.target.offsetLeft', event.target.offsetLeft);
            })
          
        }
    }
})();