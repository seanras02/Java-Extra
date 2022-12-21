const myTitle = document.getElementById('myTitle')
const myImage = document.getElementById('myImage')

let seizoenen = [
    {
        "titel" : "Seizoenen",
        "image" : "img/img/seasons.jpg",
        "backGround" : "gray"
    },
    {
        "titel" : "Lente",
        "image" : "img/img/spring.jpg",
        "backGround" : "green"
    },
    {
        "titel" : "Zomer",
        "image" : "img/img/summer.jpg",
        "backGround" : "yellow"
    },
    {
        "titel" : "Herfst",
        "image" : "img/img/autumn.jpg",
        "backGround" : "orange"
    },
    {
        "titel" : "Winter",
        "image" : "img/img/winter.jpg",
        "backGround" : "white"
    }


];

// let seizoen = {
//     "titel" : "Lente",
//     "image" : "img/img/spring.jpg"
// };

function show(index){
myTitle.innerHTML = seizoenen[index].titel;
myImage.src = seizoenen[index].image;
document.body.style.backgroundColor = seizoenen[index].backGround;
}
