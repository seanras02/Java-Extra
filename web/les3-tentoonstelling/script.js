const myImg = document.getElementById('myImg');

const myTitle = document.getElementById('myTitle');


let imgs = ["img/Main2.png", 
"img/vibe1.png", 
"img/Main1.png", 
"img/vibe2.png", 
"img/tree.gif"]

function changeImage(index){
    myTitle.innerHTML = titles[index];
    myImg.src = imgs[index];
}

let titles = [
    "De Images van een plek",
    "Persoon dat aan het spelen is op arcade",
    "Gamende jongen met pacman-pak",
    "Sonic Air-Hockey",
    "Mystical Tree"
];
