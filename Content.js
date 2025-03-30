
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
    "sven.png"
];


function startIntervalIfEnabled() {
    chrome.storage.sync.get("enabled", (data) => {
        if (data.enabled) {
            console.log("Feature is enabled");
            runRandomInterval();
        } else {
            console.log("Feature is disabled");
            if (intervalId) {
                clearTimeout(intervalId); // Stop any pending image appearance
                intervalId = null;
            }
        }
    });
}


function runRandomInterval(speedMode) {
    if (intervalId) {
        clearTimeout(intervalId); // Prevent duplicate intervals
    }

    if (!speedMode) {
        chrome.storage.sync.get("speedMode", (data) => {
            runRandomInterval(data.speedMode || "normal"); // Default to normal
        });
        return;
    }

    let randomTime;
    switch (speedMode) {
        case "fast":
            randomTime = Math.floor(Math.random() * (15000 - 5000) + 10000); // 10-20s
            break;
        case "slow":
            randomTime = Math.floor(Math.random() * (600000 - 120000) + 120000); // 2-10min
            break;
        default:
            randomTime = Math.floor(Math.random() * (300000 - 60000) + 60000); // 1-5min
            break;
    }

    console.log(`Next image will appear in ${randomTime / 1000} seconds`);

    intervalId = setTimeout(() => {
        chrome.storage.sync.get("enabled", (data) => {
            if (data.enabled) {
                imageselecter(0);
                runRandomInterval(speedMode); // Schedule the next run
            } else {
                console.log("Interval stopped because feature is disabled.");
                intervalId = null;
            }
        });
    }, randomTime);
}



//? för test alla gubbar
//charachternum = 0;
let num
function imageselecter(num) {

    const img = document.createElement("img");
    img.style.transform = "rotate(0deg)";

    let charachternum = Math.floor(Math.random() * 16);

    let result = array[charachternum];

    if (num == 0) {
        num = Math.floor(Math.random() * 9) + 1;
    }



    img.src = chrome.runtime.getURL(folderPath + result);

    img.style.width = "100px";
    img.style.zIndex = "10000";

    const existingImg = document.querySelector("img");
    if (existingImg) {
        existingImg.remove();
    }

    //? för test animationer
    //    num = 9;
    //! övre högre hörnet
    if (num == 1) {


        img.style.position = "fixed";
        img.style.top = "-25px"; // Distance from the top
        img.style.right = "-150px";
        img.style.transform = "rotate(-175deg)";

        if (charachternum == 3 || charachternum == 7) {
            img.style.top = "-20px"; // Distance from the top
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
        img.style.bottom = "-25px"; // Distance from the top
        img.style.right = "-150px";
        img.style.transform = "rotate(-45deg)";

        if (charachternum == 3 || charachternum == 7) {
            img.style.bottom = "-20px"; // Distance from the top
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
        img.style.bottom = "-150px"; // Starts below the screen
        img.style.right = "33%"; // 33% from the right edge

        if (charachternum == 3 || charachternum == 7) {
            img.style.bottom = "-20px"; // Distance from the top
        }


        img.style.transition = "bottom 1s ease-out";

        document.body.appendChild(img);


        setTimeout(() => {
            img.style.bottom = "-1%";
        }, 100);


        setTimeout(() => {
            img.style.bottom = "-150px"; // Moves it back down
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
        img.style.bottom = "-150px"; // Starts below the screen
        img.style.right = "66%"; // 33% from the right edge

        if (charachternum == 3 || charachternum == 7) {
            img.style.bottom = "-20px"; // Distance from the top
        }


        img.style.transition = "bottom 1s ease-out";

        document.body.appendChild(img);


        setTimeout(() => {
            img.style.bottom = "-1%";
        }, 100);


        setTimeout(() => {
            img.style.bottom = "-150px"; // Moves it back down
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
        img.style.bottom = "-25px"; // Distance from the top
        img.style.left = "-150px";
        img.style.transform = "rotate(45deg)";

        if (charachternum == 3 || charachternum == 7) {
            img.style.bottom = "-20px"; // Distance from the top
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
            img.style.left = "105%";
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

    //? för test alla gubbar
    //  charachternum++;
}

//imageselecter();
//let interval = setInterval(imageselecter, 10000);

startIntervalIfEnabled();



// **  
document.addEventListener("keydown", function (event) {

    if (event.ctrlKey && event.shiftKey && event.key === 'K') {

        imageselecter(1);
        imageselecter(2);
        imageselecter(3);
        imageselecter(4);
        imageselecter(5);
        imageselecter(6);
        imageselecter(7);
        imageselecter(8);
        imageselecter(9);


        setTimeout(() => {
            imageselecter(9);
        },500);

        setTimeout(() => {
            imageselecter(9);
        }, 1000);

        setTimeout(() => {
            imageselecter(9);
        }, 750);

    }


});