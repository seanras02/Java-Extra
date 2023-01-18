const myTitle = document.getElementById('myTitle');
const myImg = document.getElementById('myImg');
const myInput = document.getElementById('myInput');
let locaties =
[
    {
        "titel":"plaats 0",
        "img":"img/0.jpg"
    },
    {
        "titel":"plaats 1",
        "img":"img/1.jpg"
    },
    {
        "titel":"plaats 2",
        "img":"img/2.jpg"
    },    
    {
        "titel":"plaats 3",
        "img":"img/3.jpg"
    },    
    {
        "titel":"plaats 4",
        "img":"img/4.jpg"
    },    
    {
        "titel":"plaats 5",
        "img":"img/5.jpg"
    },    
    {
        "titel":"plaats 6",
        "img":"img/6.jpg"
    },    
    {
        "titel":"plaats 7",
        "img":"img/7.jpg"
    },    
    {
        "titel":"plaats 8",
        "img":"img/8.jpg"
    },    
    {
        "titel":"plaats 9",
        "img":"img/9.jpg"
    },    
    {
        "titel":"plaats 10",
        "img":"img/10.jpg"
    },
    {
        "titel":"plaats 11",
        "img":"img/11.jpg"
    }
]

//myTitle.innerHTML = "door script gemaakt looool";
//myImg.src = "img/1.jpg";

function show(index){
    myTitle.innerHTML = locaties[index].titel;
    myImg.src = locaties[index].img;
}

function getInput(){
    show(myInput.value);
   // console.log(myInput.value)
   myInput.value = "";
   myInput.focus();
}