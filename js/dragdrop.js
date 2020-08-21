(function() {

    let start;
    let draggableBoxes = document.querySelectorAll('.draggableBox');
    let border = document.querySelector('.border');
    let borderSize = border.getBoundingClientRect();

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
    
    function addEvents(element) {
        /////////////
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
                console.log(newPosition);
                event.currentTarget.style.left = newPosition.left;
                event.currentTarget.style.top = newPosition.top;
                newBox = border.appendChild(element.cloneNode(true));
                addEvents(newBox);
                newBox.style.zIndex = '10';
                border.removeChild(element);
                // --------- for the target box
                if ((target1.classList.contains('cloud1') && newBox.classList.contains('cloud1')
                    || target1.classList.contains('cloud2') && newBox.classList.contains('cloud2')
                    || target1.classList.contains('cloud3') && newBox.classList.contains('cloud3')) 
                    && newPosition.left >= targetX - 10 
                    && newPosition.left < targetX + 30 
                    && newPosition.top >= targetY - 10
                    && newPosition.top < targetY + 30) 
                    {
                    target1.classList.add('green');
                    var score = ((Date.now() - start)/1000).toFixed(2);
                    document.getElementById('score').innerHTML = 'Score: ' + score + ' s';
                    bestScore(score);
                    setTimeout(randomTarget, 1500);
                } 
            })
        });
        ////////////
        element.addEventListener('mousedown', function(e) {
            let position = getOffset(e.currentTarget);
            let boxX = position.left, boxY = position.top;
            let mouseX = e.clientX, mouseY = e.clientY;
            border.addEventListener('mousemove', function(event) {
                element.style.left = (boxX + (event.clientX - mouseX)) + 'px';
                element.style.top = (boxY + (event.clientY - mouseY)) + 'px';
                element.style.zIndex = '100';
                element.style.cursor = 'grabbing';
            });
            e.currentTarget.addEventListener('mouseup', function(event) {
                event.currentTarget.style.cursor = 'grab';
                newPosition = getOffset(event.target);
                event.currentTarget.style.left = newPosition.left;
                event.currentTarget.style.top = newPosition.top;
                newBox = border.appendChild(element.cloneNode(true));
                addEvents(newBox);
                newBox.style.zIndex = '10';
                border.removeChild(element);
                // --------- for the target box
                if ((target1.classList.contains('cloud1') && newBox.classList.contains('cloud1')
                    || target1.classList.contains('cloud2') && newBox.classList.contains('cloud2')
                    || target1.classList.contains('cloud3') && newBox.classList.contains('cloud3')) 
                    && newPosition.left >= targetX - 10 
                    && newPosition.left < targetX + 30 
                    && newPosition.top >= targetY - 10
                    && newPosition.top < targetY + 30) 
                    {
                    target1.classList.add('green');
                    var score = ((Date.now() - start)/1000).toFixed(2);
                    document.getElementById('score').innerHTML = 'Score: ' + score + ' s';
                    bestScore(score);
                    setTimeout(randomTarget, 1500);
                } 
            })
        });
    }

    // --------- for the score boxes
    let best = Infinity;
    function bestScore(score) {
        if (score < best) {
            best = score;
            document.getElementById('bestScore').innerHTML = 'Best: ' + best + ' s'
        }
    }
    
    // --------- for the target box
    function randomTarget() {
        start = Date.now();
        let target1 = document.getElementById('target1');
        target1.classList.remove('cloud1', 'cloud2', 'cloud3');
        let randInt = Math.ceil(Math.random()*3);
        switch (randInt) {
            case 1:
                target1.innerHTML = `<img src="img/dragdrop/cloud1dark.png" draggable="false"></img>`;
                break;
            case 2: 
                target1.innerHTML = `<img src="img/dragdrop/cloud2dark.png" draggable="false"></img>`;
                break;
            case 3: 
                target1.innerHTML = `<img src="img/dragdrop/cloud3dark.png" draggable="false"></img>`;
                break;
        }
        let newClass = `cloud${randInt}`;
        target1.classList.add(newClass);
        target1.classList.remove('green');
        target1.style.left = randomX() + 'px';
        target1.style.top = randomY() + 'px';
        targetX = parseInt(target1.style.left);
        targetY = parseInt(target1.style.top);
    }
    
    function randomX() {
        return Math.floor(Math.random() * (borderSize.width - 170)) + borderSize.x;
    }
    function randomY() {
        return Math.floor(Math.random() * (borderSize.height - 200)) + borderSize.y + 50;
    }

    randomTarget();
})();