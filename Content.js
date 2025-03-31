let intervalId = null;

let folderPath = "images/";

let array = [
    "basic-pieere.png",
    "evil-sven.png",
    "gangsta-pieere.png",
    "guld-slav.png",
    "MAC.png",
    "Pieere-french.png",
    "hat.png",
    "slav.png",
    "snobben.png", 
    "snobben2.png",
    "svenn.png",
    "tank-pieere.png",
    "bagarebengtsson.png",
    "fransic-jul.png",
    "slav-jul.png",
    "sven.png",
    "helicopter.png"
];

//? för bilder som jag tryckt på
let physicsImages = [];
let physicsImagesnmber = 0;

function startIntervalIfEnabled() {
    chrome.storage.sync.get("enabled", (data) => {
        if (data.enabled) {
            console.log("Feature is enabled");
            runRandomInterval();
        } else {
            console.log("Feature is disabled");
            if (intervalId) {
                clearTimeout(intervalId);
                intervalId = null;
            }
        }
    });
}


function runRandomInterval(speedMode) {
    if (intervalId) {
        clearTimeout(intervalId);
    }

    if (!speedMode) {
        chrome.storage.sync.get("speedMode", (data) => {
            runRandomInterval(data.speedMode || "normal");
        });
        return;
    }

    let randomTime;
    switch (speedMode) {
        case "fast":
            randomTime = Math.floor(Math.random() * (15000 - 5000) + 10000); //! 10-20s
            break;
        case "slow":
            randomTime = Math.floor(Math.random() * (600000 - 120000) + 120000); //! 2-10min
            break;
        default:
            randomTime = Math.floor(Math.random() * (300000 - 60000) + 60000); //! 1-5min
            break;
    }

    console.log(`Next image will appear in ${randomTime / 1000} seconds`);

    intervalId = setTimeout(() => {
        chrome.storage.sync.get("enabled", (data) => {
            if (data.enabled) {
                imageselecter(0, 250);
                runRandomInterval(speedMode); // Schedule the next run
            } else {
                console.log("Interval stopped because feature is disabled.");
                intervalId = null;
            }
        });
    }, randomTime);
}





//! num bestämmer plats
let num;
let charachternum;

let ispressed = false;

function imageselecter(num, charachternum) {

    const img = document.createElement("img");
    img.style.transform = "rotate(0deg)";

    //! charachternum bestämmer karaktär
    //! 250 är ett random nummer som jag bara valde
    //! IFall det är 250 så blir det en random gubbe
    if (charachternum == 250) {
        charachternum = Math.floor(Math.random() * 17);
    }


    let result = array[charachternum];

    if (num == 0) {
        num = Math.floor(Math.random() * 9) + 1;
    }

    if (charachternum == 16) {
        num = 9;
    }


    img.src = chrome.runtime.getURL(folderPath + result);

    img.style.width = "100px";
    img.style.zIndex = "10000";

    if (charachternum == 16) {
        img.style.width = "125px";
    }

  

    //! övre högre hörnet
    if (num == 1) {


        img.style.position = "fixed";
        img.style.top = "-25px";
        img.style.right = "-150px";
        img.style.transform = "rotate(-175deg)";

        if (charachternum == 3 || charachternum == 7) {
            img.style.top = "-20px";
            img.style.transform = "rotate(-125deg)";

        }

        else if (charachternum == 4 || 8) {
            img.style.transform = "rotate(-125deg)";
        }

        img.style.transition = "right 1s ease-out";

        document.body.appendChild(img);


        setTimeout(() => {
            img.style.right = "-10px";
        }, 100);


        setTimeout(() => {
            img.style.right = "-150px";
        }, 2500);

        setTimeout(() => {
            if (document.body.contains(img)) {
                document.body.removeChild(img);
            }
        }, 3500);

    }
    //! högre mitten
    else if (num == 2) {

        img.style.position = "fixed";
        img.style.top = "50%";
        img.style.right = "-150px";
        img.style.transform = "rotate(-90deg)";

        img.style.transition = "right 1s ease-out";

        document.body.appendChild(img);


        setTimeout(() => {
            img.style.right = "-10px";
        }, 100);


        setTimeout(() => {
            img.style.right = "-150px";
        }, 2500);

        setTimeout(() => {
            if (document.body.contains(img)) {
                document.body.removeChild(img);
            }
        }, 3500);

    }

    //! höger nedre hörnet
    else if (num == 3) {

        img.style.position = "fixed";
        img.style.bottom = "-25px";
        img.style.right = "-150px";
        img.style.transform = "rotate(-45deg)";

        if (charachternum == 3 || charachternum == 7) {
            img.style.bottom = "-20px";
            img.style.transform = "rotate(-25deg)";

        }

        else if (charachternum == 4 || charachternum == 8) {
            img.style.transform = "rotate-25deg)";
        }

        img.style.transition = "right 1s ease-out";

        document.body.appendChild(img);


        setTimeout(() => {
            img.style.right = "-25px";
        }, 100);


        setTimeout(() => {
            img.style.right = "-150px";
        }, 2500);

        setTimeout(() => {
            if (document.body.contains(img)) {
                document.body.removeChild(img);
            }
        }, 3500);
    }
    //! 33% från höger nedre mitten
    else if (num == 4) {
        img.style.position = "fixed";
        img.style.bottom = "-150px";
        img.style.right = "33%";

        if (charachternum == 3 || charachternum == 7) {
            img.style.bottom = "-20px";
        }


        img.style.transition = "bottom 1s ease-out";

        document.body.appendChild(img);


        setTimeout(() => {
            img.style.bottom = "-1%";
        }, 100);


        setTimeout(() => {
            img.style.bottom = "-150px";
        }, 2500);

        setTimeout(() => {
            if (document.body.contains(img)) {
                document.body.removeChild(img);
            }
        }, 3500);

    }
    //! 66% från höger nedre mitten
    else if (num == 5) {
        img.style.position = "fixed";
        img.style.bottom = "-150px";
        img.style.right = "66%";

        if (charachternum == 3 || charachternum == 7) {
            img.style.bottom = "-20px";
        }


        img.style.transition = "bottom 1s ease-out";

        document.body.appendChild(img);


        setTimeout(() => {
            img.style.bottom = "-1%";
        }, 100);


        setTimeout(() => {
            img.style.bottom = "-150px";
        }, 2500);

        setTimeout(() => {
            if (document.body.contains(img)) {
                document.body.removeChild(img);
            }
        }, 3500);


    }
    //! Vänstra nedre hörnet
    else if (num == 6) {


        img.style.position = "fixed";
        img.style.bottom = "-25px";
        img.style.left = "-150px";
        img.style.transform = "rotate(45deg)";

        if (charachternum == 3 || charachternum == 7) {
            img.style.bottom = "-20px";
            img.style.transform = "rotate(25deg)";

        }

        else if (charachternum == 4 || charachternum == 8) {
            img.style.transform = "rotate(25deg)";
        }

        img.style.transition = "left 1s ease-out";

        document.body.appendChild(img);


        setTimeout(() => {
            img.style.left = "-25px";
        }, 100);


        setTimeout(() => {
            img.style.left = "-150px";
        }, 2500);

        setTimeout(() => {
            if (document.body.contains(img)) {
                document.body.removeChild(img);
            }
        }, 3500);

    }

    //! VÄnstra sidan Y-mitten
    else if (num == 7) {
        img.style.position = "fixed";
        img.style.top = "50%";
        img.style.left = "-150px";
        img.style.transform = "rotate(90deg)";

        img.style.transition = "left 1s ease-out";

        document.body.appendChild(img);


        setTimeout(() => {
            img.style.left = "-10px";
        }, 100);


        setTimeout(() => {
            img.style.left = "-150px";
        }, 2500);

        setTimeout(() => {
            if (document.body.contains(img)) {
                document.body.removeChild(img);
            }
        }, 3500);

    }

    else if (num == 8) {


        img.style.position = "fixed";
        img.style.top = "-25px"; // Distance from the top
        img.style.left = "-150px";
        img.style.transform = "rotate(125deg)";

        if (charachternum == 3 || charachternum == 7) {
            img.style.top = "-20px"; // Distance from the top
            img.style.transform = "rotate(125deg)";

        }

        else if (charachternum == 4 || charachternum == 8) {
            img.style.top = "-10px";
            img.style.transform = "rotate(145deg)";
        }

        img.style.transition = "left 1s ease-out";

        document.body.appendChild(img);


        setTimeout(() => {
            img.style.left = "-10px";
        }, 100);


        setTimeout(() => {
            img.style.left = "-150px";
        }, 2500);

        setTimeout(() => {
            if (document.body.contains(img)) {
                document.body.removeChild(img);
            }
        }, 3500);

    }

    else if (num == 9) {

        img.style.position = "fixed";
        img.style.bottom = "0px";

        if (charachternum == 16) {
            img.style.bottom = "10%";
        }

        img.style.left = "-150px";

        if (charachternum == 3 || charachternum == 7) {
            img.style.bottom = "-5px";
        }

        if (charachternum == 5 || charachternum == 0) {
            img.style.bottom = "-6px";
        }

        img.style.transition = "left 6s ease-out";

        document.body.appendChild(img);


        setTimeout(() => {
            if (charachternum == 16) {
                img.style.left = "140%";
            }
            else {
                img.style.left = "105%";
            }
        }, 2500);



        setTimeout(() => {
            if (document.body.contains(img)) {
                document.body.removeChild(img);
            }
        }, 8000);

    }



    else if (num == 10) {


    }

    else if (num == 11) {


    }

    else if (num == 12) {


    }
}

startIntervalIfEnabled();



// ** 

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'K') {

        imageselecter(1, 250);
        imageselecter(2, 250);
        imageselecter(3, 250);
        imageselecter(4, 250);
        imageselecter(5, 250);
        imageselecter(6, 250);
        imageselecter(7, 250);
        imageselecter(8, 250);
        imageselecter(9, 250);


        setTimeout(() => {
            imageselecter(9, 250);
        }, 500);

        setTimeout(() => {
            imageselecter(9, 250);
        }, 1000);

        setTimeout(() => {
            imageselecter(9, 250);
        }, 750);

        setTimeout(() => {
            imageselecter(9, 16);
        }, 1000);

    }

    //! RND charachter
    if (event.ctrlKey && event.key === 'ö') {
        physics(0);

    }
    //! Fransic + slav
    if (event.ctrlKey && event.key === 'ä') {
        physics(1);

    }

    //! Snobben
    if (event.ctrlKey && event.key === 'å') {
        physics(2);

    }

    //! Pieere
    if (event.ctrlKey && event.key === 'i') {
        physics(3);

    }

    if(event.ctrlKey && event.key === 'm')
    {
        deletephysics();
        
    }

});



function deletephysics() {
    physicsImages.forEach(obj => {
        if (document.body.contains(obj.element)) {
            document.body.removeChild(obj.element);
        }
    });
    physicsImages = [];  // Clear the array
    physicsImagesnmber = 0; // Reset the counter
}


let isPhysicsRunning = false; // Prevent multiple loops

function physics(rndnum) {
    let rndnumer;
    let physResult;
    let phyImage = document.createElement('img');

    if (rndnum == 0) {
        let physicsCharacterNum = Math.floor(Math.random() * 17);
        physResult = array[physicsCharacterNum];
    }

    else if (rndnum == 1) {
        let smallarr = ["3", "7", "13", "14"];
        rndnumer = Math.floor(Math.random() * 4)
        let physicsCharacterNum = smallarr[rndnumer];
        physResult = array[physicsCharacterNum];
    }

    else if (rndnum == 2) {
        let smallarr = ["8", "9"];
        rndnumer = Math.floor(Math.random() * 2)
        let physicsCharacterNum = smallarr[rndnumer];
        physResult = array[physicsCharacterNum];
    }

    else if (rndnum == 3) {
        let smallarr = ["0", "2","5","11","6"];
        rndnumer = Math.floor(Math.random() * 5)
        let physicsCharacterNum = smallarr[rndnumer];
        physResult = array[physicsCharacterNum];
    }


    phyImage.src = chrome.runtime.getURL(folderPath + physResult);

    document.body.appendChild(phyImage);
    physicsImages.push({
        element: phyImage,
        velocityX: (Math.random() - 0.5) * 2.5, //? Slightly reduced initial speed
        velocityY: Math.random() * 3 + 1, //? Reduced fall speed
        bounceFactor: 0.3, //? New: Keeps reducing bounce effect after each hit
    });

    phyImage.style.transition = "transform 0.2s ease-out";
    phyImage.style.position = "fixed";
    phyImage.style.top = "-350px";
    phyImage.style.left = Math.random() * (window.innerWidth - 120) + "px"; // Ensure no spawning off-screen
    phyImage.style.width = "100px";
    phyImage.style.zIndex = "10000";

    if (!isPhysicsRunning) {
        isPhysicsRunning = true;
        requestAnimationFrame(updatePhysics); //? Start physics loop only once
    }
}

function updatePhysics() {
    let currentTime = Date.now();

    physicsImages.forEach((obj) => {
        let img = obj.element;
        let rect = img.getBoundingClientRect();

        // Apply gravity
        obj.velocityY += 0.2;

        // Move image
        let newTop = rect.top + obj.velocityY;
        let newLeft = rect.left + obj.velocityX;

        // **Screen Borders** (left, right, and top)
        if (newLeft <= 5) {
            obj.velocityX *= -0.4; // Less bounce
            newLeft = 5;
        }
        if (newLeft + rect.width >= window.innerWidth - 5) {
            obj.velocityX *= -0.4;
            newLeft = window.innerWidth - rect.width - 5;
        }
        if (newTop <= 5) {
            obj.velocityY *= -0.4;
            newTop = 5;
        }

        // //! HEEEERE - Stop exactly on the ground
        let groundLevel = window.innerHeight - rect.height;
        if (newTop >= groundLevel) {
            if (!obj.settleTime) obj.settleTime = currentTime; // Mark settle time
            newTop = groundLevel;
            obj.velocityY = 0;
            obj.velocityX *= 0.9;
            obj.bounceFactor *= 0.5;

            if (Math.abs(obj.velocityX) < 0.2) {
                obj.velocityX = 0;
            }
        } else {
            obj.settleTime = null; // Reset timer if not on ground
        }

        // //! WALKING LOGIC - Wander left/right and small hops every 15s
        if (obj.settleTime && currentTime - obj.settleTime > 15000) {
            if (!obj.walking) {
                obj.walking = true;
                let moveDistance = 150; // Move up to 150px total
                let walkInterval = setInterval(() => {
                    // Move left or right by 5-10px
                    obj.velocityX = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 5 + 5);

                    // Add small vertical jumps
                    obj.velocityY = -Math.random() * 3 - 2; // Tiny jump (falling slightly down as they walk)

                    moveDistance -= Math.abs(obj.velocityX);
                    if (moveDistance <= 0 || Math.random() < 0.1) { // Stop randomly sometimes
                        clearInterval(walkInterval);
                        obj.walking = false;
                        obj.settleTime = currentTime; // Restart the timer
                    }
                }, 500); // Move and jump every half second
            }
        }

        img.style.top = `${newTop}px`;
        img.style.left = `${newLeft}px`;

        // Slow down completely if nearly stopped
        if (Math.abs(obj.velocityX) < 0.05 && Math.abs(obj.velocityY) < 0.05) {
            obj.velocityX = 0;
            obj.velocityY = 0;
        }
    });

    checkCollisions();
    requestAnimationFrame(updatePhysics);
}

function checkCollisions() {
    for (let i = 0; i < physicsImages.length; i++) {
        let img1 = physicsImages[i];
        let rect1 = img1.element.getBoundingClientRect();

        for (let j = i + 1; j < physicsImages.length; j++) {
            let img2 = physicsImages[j];
            let rect2 = img2.element.getBoundingClientRect();

            if (
                rect1.left < rect2.right &&
                rect1.right > rect2.left &&
                rect1.top < rect2.bottom &&
                rect1.bottom > rect2.top
            ) {
                console.log("Collision detected!");

                let dx = rect2.left - rect1.left;
                let dy = rect2.top - rect1.top;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance === 0) continue; // Prevent division by zero

                let nx = dx / distance;
                let ny = dy / distance;

                let relativeVelocityX = img2.velocityX - img1.velocityX;
                let relativeVelocityY = img2.velocityY - img1.velocityY;

                let speed = relativeVelocityX * nx + relativeVelocityY * ny;
                if (speed > 0) continue; // Prevent objects from sticking together

                // **Even Less Bounce Effect**
                let collisionDampening = 0.2; //? Lowered to reduce bounce further
                img1.velocityX -= nx * (speed * collisionDampening);
                img1.velocityY -= ny * (speed * collisionDampening);
                img2.velocityX += nx * (speed * collisionDampening);
                img2.velocityY += ny * (speed * collisionDampening);

                // Random rotation effect
                let randomRotation1 = (Math.random() * 30 - 15).toFixed(1); // Even less rotation
                let randomRotation2 = (Math.random() * 30 - 15).toFixed(1);

                img1.element.style.transform = `rotate(${randomRotation1}deg)`;
                img2.element.style.transform = `rotate(${randomRotation2}deg)`;

                // If they are slow, make them settle
                if (Math.abs(img1.velocityX) < 0.2 && Math.abs(img1.velocityY) < 0.2) {
                    img1.velocityX = 0;
                    img1.velocityY = 0;
                    img1.element.style.top = `${rect1.top + 2}px`;
                }

                if (Math.abs(img2.velocityX) < 0.2 && Math.abs(img2.velocityY) < 0.2) {
                    img2.velocityX = 0;
                    img2.velocityY = 0;
                    img2.element.style.top = `${rect2.top + 2}px`;
                }
            }
        }
    }
}
