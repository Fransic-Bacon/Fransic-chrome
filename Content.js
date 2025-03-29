

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

//? för test alla gubbar
//charachternum = 0;
function imageselecter() {

    const img = document.createElement("img");
    img.style.transform = "rotate(0deg)";

    let charachternum = Math.floor(Math.random() * 16);

    let result = array[charachternum];

    let num = Math.floor(Math.random() * 9) + 1;

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

        if(charachternum == 5 || charachternum == 0) 
        {
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

function runRandomInterval() {
    let randomTime = Math.floor(Math.random() * (36000 - 15000) + 15000); // Random between 15s-360s

    console.log(`Next imageselecter will run in ${randomTime / 1000} seconds`);

    setTimeout(() => {
        imageselecter(); // Run the function
        runRandomInterval(); // Schedule the next run
    }, randomTime);
}

runRandomInterval();





// **  
document.addEventListener("keydown", function (event) {
   
    if (event.ctrlKey && event.shiftKey && event.key === 'K') {
      
        imageselecter();  

       
    }
});






const positions = [
    { top: "5%", left: "10%" },   // 1
    { top: "15%", left: "5%" },   // 2
    { top: "25%", left: "3%" },   // 3
    { top: "35%", left: "2%" },   // 4
    { top: "45%", left: "5%" },   // 5
    { top: "55%", left: "25%" },  // 6
    { top: "55%", left: "75%" },  // 7
    { top: "45%", left: "95%" },  // 8
    { top: "35%", left: "97%" },  // 9
    { top: "25%", left: "98%" },  // 10
    { top: "15%", left: "95%" },  // 11
    { top: "5%", left: "90%" }    // 12
];

if (1 + 1 == 3) {


    for (let i = 0; i < array.length; i++) {
        let img = document.createElement("img");
        img.src = chrome.runtime.getURL(folderPath + imageFiles[i]);

        img.style.position = "fixed";
        img.style.top = positions[i].top;
        img.style.left = positions[i].left;
        img.style.width = "50px"; // Adjust size as needed
        img.style.zIndex = "10000";

        document.body.appendChild(img);
    }

    if (document.body.contains(img)) {
        document.body.removeChild(img);
    }

    // Append the new image
    document.body.appendChild(img);


}
