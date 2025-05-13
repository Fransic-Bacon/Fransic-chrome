let folderPath2 = "images/";

let array2 = [
    "fransic-jul.png",
    "slav.png",
    "snobben2.png",
    "basic-pieere.png",
    "evil-sven.png",
    "gangsta-pieere.png",
    "guld-slav.png",
    "MAC.png",
    "Pieere-french.png",
    "hat.png",
    "snobben.png",
    "svenn.png",
    "tank-pieere.png",
    "bagarebengtsson.png",
    "sven.png",
    "helicopter.png",
    "slav-jul.png",
    "krabban-kurt.png"
];

let infobox;

let namearr = ["Fransic Bacon", "3ÅrigSlav", "NallePuh Snobben", "basic pieere", "Evil Sven", "Gangsta Pieere",
    "3ÅrigGuldSlav", "Mr Angry Camel", "Fransk Pieere", "Indiana Pieere", "Snobben", "Sven", "Tänk Pieere", "Bagare Bengtsson"
    , "sven igen", "Helicopter", "3ÅrigSlav-Jul", "Klas (Knas-Klas)"];

let box = document.getElementById("boxen");

let num2 = 0;
show(num2);

function add() {
    num2++;
    if (num2 >= array2.length) {
        num2 = 0;
    }
    show(num2);
}

function sub() {
    num2--;
    if (num2 < 0) {
        num2 = array2.length - 1;
    }
    show(num2);
}

function show(centerIndex) {
    box.innerHTML = "";

    const totalImages = 5;
    const half = Math.floor(totalImages / 2);
    const array2Len = array2.length;


    let text = document.createElement('h2');
    text.innerHTML = namearr[centerIndex];

    text.innerHTML = namearr[centerIndex];
    text.style.position = "absolute";
    text.style.top = "10px";
    text.style.left = "50%";
    text.style.transform = "translateX(-50%)";
    text.style.color = "black";
    text.style.padding = "5px 10px";
    text.style.borderRadius = "10px";
    text.style.fontSize = "7.5vh";
    text.style.zIndex = "2";

    box.appendChild(text);

    let specialnummber = 0;

    for (let i = -half; i <= half; i++) {
        // Wrap around using modulo
        let index = (centerIndex + i + array2Len) % array2Len;

        let img = document.createElement('img');
        img.src = folderPath2 + array2[index];

        const rotationDegree = i * 15; // Adjust the 15 value to control tilt intensity

        // Apply styling
        img.style.width = (i === 0) ? "35%" : "25%"; // Center image larger



        img.style.height = "auto";
        img.style.margin = "0 5px";
        img.style.transform = `rotate(${rotationDegree}deg)`;
        img.style.transformOrigin = "bottom center";
        img.style.transition = "all 0.2s ease";

        if (specialnummber == 2) {

            img.style.cursor = "pointer";

            img.id = "btn-remover";
            img.addEventListener('mouseover', () => {
                img.classList.add('heartbeat-hover');
            });
            img.addEventListener('mouseleave', () => {
                img.classList.remove('heartbeat-hover');
            });

            img.addEventListener('click', () => {
                const rect = img.getBoundingClientRect();

                img.style.position = "fixed";
                img.style.left = rect.left + "px";
                img.style.top = rect.top + "px";
                img.style.margin = "0";
                img.style.zIndex = 999;


                void img.offsetWidth;

                img.style.transition = "top 3s ease, opacity 1.5s ease";
                img.style.top = "-150vh";
                img.style.opacity = "0";
 
                console.log("Image flying away!");

                infobox = document.getElementById("infoboxid");

                infobox.style.position = "fixed";
                infobox.style.top = "-150vh";
                infobox.style.left = "50%";
                infobox.style.transform = "translateX(-50%)";
                infobox.style.opacity = "0";

                infobox.classList.remove("empty");

                void infobox.offsetWidth;

                infobox.style.transition = "top 1s ease, opacity 1s ease";
                infobox.style.top = "0px";
                infobox.style.opacity = "1";

                infobox.classList.add("infobox");



                let infoname = document.getElementById("infoname");
                let infoage = document.getElementById("infoage");
                let infodesc = document.getElementById("infodesc");
                let infoimg = document.getElementById("infoimage");


                infoname.innerHTML = "Name: " + charobj[centerIndex].name;
                infoage.innerHTML = "Age: " + charobj[centerIndex].age;
                infodesc.innerHTML = charobj[centerIndex].description;
                infoimg.src = "images/" + array2[centerIndex];

            });

        }

        box.appendChild(img);
        specialnummber++;
    }
}


// Add navigation buttons
function createNavigation() {
    const nav = document.createElement('div');
    nav.style.position = "fixed";

    if (screen.width < 800) {
        nav.style.top = "175px";
        nav.style.zindex = "1";
    }
    else {
        nav.style.bottom = "20px";
    }
    nav.style.left = "50%";
    nav.style.transform = "translateX(-50%)";
    nav.style.display = "flex";
    nav.style.gap = "20px";
    nav.style.zIndex = "9999"; // Make sure it's on top if needed

    const prevBtn = document.createElement('button');
    prevBtn.textContent = "Previous";
    prevBtn.className = "btn btn-secondary";
    prevBtn.onclick = sub;

    const nextBtn = document.createElement('button');
    nextBtn.textContent = "Next";
    nextBtn.className = "btn btn-secondary";
    nextBtn.onclick = add;

    // Apply consistent sizing styles
    [prevBtn, nextBtn].forEach(btn => {
        btn.style.fontSize = "2vh";          // Responsive font size
        btn.style.padding = "10px 20px";     // Comfortable padding
        btn.style.minWidth = "120px";        // Prevent too narrow buttons
        btn.style.borderRadius = "10px";     // Optional: Rounded corners
        btn.style.cursor = "pointer";        // Visual feedback
    });



    nav.appendChild(prevBtn);
    nav.appendChild(nextBtn);


    window.addEventListener('scroll', () => {
        let btnremover = document.getElementById("btn-remover");

        if (window.scrollY > btnremover.offsetTop) {
            nav.style.display = "none";
        }
        else {
            nav.style.display = "flex";
        }
    });



    document.body.appendChild(nav);
}

// Initialize navigation
document.addEventListener('DOMContentLoaded', function () {
    createNavigation();

    // Add keyboard navigation
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') {
            sub();
        } else if (e.key === 'ArrowRight') {
            add();
        }
    });
});






//! för att man ska lämmna infobox
function leave() {

    infobox.classList.remove("infobox");
    infobox.classList.add("empty");

}


