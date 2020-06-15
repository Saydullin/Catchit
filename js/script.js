mouse = document.querySelector(".mouse");
body = document.querySelector("body");
img = document.querySelector(".img");
h2 = document.querySelector(".h2");
total = document.querySelector(".total");
eat = document.querySelector(".eat");
catchit = document.querySelector(".catchit");
eatall = document.querySelectorAll(".eat");
place = document.querySelector(".place");
let xRand = 0;
let yRand = 0;
let counter = 1;
count = 0;
var timer = 6500;
var last = 0;
let setint;
setTimeout(blink, 3000);
function getRand (min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}

let bgc = {3: {color:"#F0CBCB", timer:5000}, 
10: {color:"#77DECA", timer:2200}, 20: {color:"#DFEA88", timer:1800},
30: {color:"#5F7AFF", timer:1500}, 40: {color: "#44FF5F", timer:3000},
50: {color:"#FFFFFF", timer:2000}, 60: {color:"#9BFFFA", timer:1400},
70: {color:"#ACACAC", timer:1000}, 80: {color:"#FFD818", timer:300}};

function blink () {
    h2.style.opacity = counter;
    if (counter == 0) {
        prom();
    } else {
        setTimeout(function() {
        prom();
        }, 5000);
    }
};

function prom () {
    h2.style.opacity = "1";
    document.querySelector(".h2").textContent = "Время постепенно увеличивается!";
    setTimeout(function() {
        h2.style.opacity = "0";
        h2.remove();
    }, 5000);
};

function letall () {
    last = 0;
    for (let s=0; s < eatall.length; s++) {
        eatall[s].style.opacity = "0";
    };
    for (let i=0; i < eatall.length; i++) {
        showAll(eatall[i], i);
    };
    last = getRand(0, eatall.length-1);
    catchit.src = eatall[last].src;
};

function showAll (showImage, ind) {
    xRand = getRand(25, place.offsetWidth);
    yRand = getRand(35, place.offsetHeight);
    showImage.style.opacity = "1";
    showImage.style.transition = 0.5 + "s";
    showImage.style.left = xRand + "px";
    showImage.style.top = yRand + "px";
};

place.addEventListener("click", () => {
    if (counter == 1) {
        counter = 0;
        h2.style.opacity = "0";
        setint = setInterval(letall, timer);
    } else {
        img.style.transition = 0.5 + "s";
    }
        img.style.left = event.pageX + "px";
        img.style.top = event.pageY + "px";
        img.style.opacity = "1";
        if ((eatall[last].offsetLeft >= event.pageX-45) && (eatall[last].offsetLeft <= event.pageX+45) && (eatall[last].offsetTop >= event.pageY-45) && (eatall[last].offsetTop <= event.pageY+45)) {
        count += 1;
        xRand = 0;
        yRand = 0;
        alert(last);
        eatall[last].style.opacity = "0";
        last = "";
        catchit.src = "pics/tick.svg";
        document.querySelector(".total").textContent = `Собрано фруктов: ${count}`;
        if (bgc[count]) {
            clearInterval(setint);
            setint = setInterval(letall, bgc[count].timer);
            place.style.backgroundColor = bgc[count].color;
        }
    };
});





