let redBtn = document.getElementById("red");
let blueBtn = document.getElementById("blue");
let blackBtn = document.getElementById("black");
let imgchange = document.getElementById("imgchange");

redBtn.onclick = function() {

    imgchange.src = "./img/portada-1-1.png";
}

blueBtn.onclick = function() {
    imgchange.src = "./img/portada-1-2.png";
}

blackBtn.onclick = function() {
    imgchange.src = "./img/unisex-lado-1.jpg";
}