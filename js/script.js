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
var timer = 7500;
var last = 0;
let setint;
function getRand (min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
    document.querySelector(".h2").textContent = "Подбирайте только съедобное!";
    setTimeout(function() {
        h2.style.opacity = "0";
        h2.remove();
    }, 5000);
};

setTimeout(blink, 3000);

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
    xRand = getRand(200, place.offsetWidth);
    yRand = getRand(200, place.offsetHeight);
    showImage.style.opacity = "1";
    showImage.style.display = "inline";
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
        if ((eatall[last].offsetLeft >= event.pageX-40) && (eatall[last].offsetLeft <= event.pageX+40) && (eatall[last].offsetTop >= event.pageY-40) && (eatall[last].offsetTop <= event.pageY+40)) {
        count += 1;
        xRand = 0;
        yRand = 0;
        eatall[last].style.opacity = "0";
        last = "";
        catchit.src = "pics/tick.svg";
        document.querySelector(".total").textContent = `Собрано фруктов: ${count}`;
        if (count==3) {
            timer = 4000;
            clearInterval(setint);
            setint = setInterval(letall, timer);
        }
        if ((count >= 10) && (count < 20)) {
            timer = 2000;
            clearInterval(setint);
            setint = setInterval(letall, timer);
            place.style.backgroundColor = "#77DECA";
        } else if ((count >= 20) && (count < 30)) {
            place.style.backgroundColor = "#DFEA88";
        } else if ((count >= 30) && (count < 40)){
            body.style.backgroundColor = "#F0F0F0";
            place.style.backgroundColor = "#5F7AFF";
            total.style.color = "#000000";
        } else if (count >= 40) {
            place.style.backgroundColor = "#44FF5F";
        };
    };
});





