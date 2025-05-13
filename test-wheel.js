let folderPath = "images/";

let box = document.getElementById("box");

let array = [
    "fransic-jul.png",
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
    "slav-jul.png",
    "sven.png",
    "helicopter.png",
    "krabban-kurt.png"
];


let num = 0;

function add(){
num++;
show(num);
}

function sub(){
    num--;

    if(num <0)
    {
num = array.length;
show(num);
    }
}

let degree = 360 / array.length;
let half = array.length / 2;    


function show(centerIndex) {
    box.innerHTML = "";

    const totalImages = 9;
    const half = Math.floor(totalImages / 2);
    const arrayLen = array.length;

    for (let i = -half; i <= half; i++) {
        // Wrap around using modulo
        let index = (centerIndex + i + arrayLen) % arrayLen;

        let img = document.createElement('img');
        img.src = folderPath + array[index];

        img.style.width = (i === 0) ? "100px" : "75px"; // Center image larger
        img.style.margin = "0 5px";

        box.appendChild(img);
    }
}



