const imageBox = document.getElementById("imageBox");
const myImg = document.getElementById("myImg");
const myInput = document.getElementById("myInput");
const inputButton = document.getElementById("inputButton");
const descriptionBox = document.getElementById("descriptionBox");
const optionsBox = document.getElementById("optionsBox");
const navBox = document.getElementById("navBox");

let currentPosition = 1;

const places = [
    {
        "name":"Ingang van gang (1)",
        "description":"u staat op de trap richting de s̵̛̛̪͕̼͚̖̩̠̲̘̪̠̳̞̙̃̿̎̒͊̇͊͒̄̓͗̉̋͘͜ç̶̛̭̥͔͕̙̣̣̣̭̠̳̼̤̰͊̒̆͆̅͆̈́̅̅̓͋͂̑̑ͅạ̶̼̬̭̭̠̣̬͗̏̽̿̀̑͛̉̅̆̇̎̓͒͊̌̇̊̌̽̽͐̕̚͜͝͝͝r̶̡̰̙̞͓̗̙̖͓̱̭̹͓̼͉͈̈́͌̌̐̈́̆̎́̑̆͋̃̕̚͜͠y̶̢̜̥̥̻̳͈̥̘̲̮̑̔́̑͒̐͗͂̄͋́̓̈́̉̿̈́̕͝ͅ  verdieping",
        "image":"img/1",
        "options":[
            {"direction":"de trap op","destination":2}
        ]
    },
    {
        "name":"TRAP",
        "description":"Gang van de s̵̛̛̪͕̼͚̖̩̠̲̘̪̠̳̞̙̃̿̎̒͊̇͊͒̄̓͗̉̋͘͜ç̶̛̭̥͔͕̙̣̣̣̭̠̳̼̤̰͊̒̆͆̅͆̈́̅̅̓͋͂̑̑ͅạ̶̼̬̭̭̠̣̬͗̏̽̿̀̑͛̉̅̆̇̎̓͒͊̌̇̊̌̽̽͐̕̚͜͝͝͝r̶̡̰̙̞͓̗̙̖͓̱̭̹͓̼͉͈̈́͌̌̐̈́̆̎́̑̆͋̃̕̚͜͠y̶̢̜̥̥̻̳͈̥̘̲̮̑̔́̑͒̐͗͂̄͋́̓̈́̉̿̈́̕͝ͅ  verdieping",
        "image":"img/1.jpg",
        "options":[
            {"direction":"de trap op","destination":2},
        ]
    },
    {
        "name":"GANG",
        "description":"u staat op de trap richting de s̵̛̛̪͕̼͚̖̩̠̲̘̪̠̳̞̙̃̿̎̒͊̇͊͒̄̓͗̉̋͘͜ç̶̛̭̥͔͕̙̣̣̣̭̠̳̼̤̰͊̒̆͆̅͆̈́̅̅̓͋͂̑̑ͅạ̶̼̬̭̭̠̣̬͗̏̽̿̀̑͛̉̅̆̇̎̓͒͊̌̇̊̌̽̽͐̕̚͜͝͝͝r̶̡̰̙̞͓̗̙̖͓̱̭̹͓̼͉͈̈́͌̌̐̈́̆̎́̑̆͋̃̕̚͜͠y̶̢̜̥̥̻̳͈̥̘̲̮̑̔́̑͒̐͗͂̄͋́̓̈́̉̿̈́̕͝ͅ  verdieping",
        "image":"img/2.jpg",
        "options":[
            {"direction":"rechtdoor","destination":3}          
        ]
    },
    {
        "name":"RECHTDOOR",
        "description":"u bent in de docentenkamer",
        "image":"img/3.jpg",
        "options":[
            {"direction":"links","destination":4},
            {"direction":"rechts","destination":5},
            {"direction":"rechtdoor","destination":6}
        ]
    },
    {
        "name":"4",
        "description":"u staat in de gang van de eerste etage met een man dat aan het twerken is...",
        "image":"img/4.jpg",
        "options":[
            {"direction":"terug","destination":3}        
        ]
    },
    {
        "name":"5",
        "description":"Ominous lokaal met een bord",
        "image":"img/5.jpg",
        "options":[
            {"direction":"terug","destination":3}           
        ]
    },
    {
        "name":"6",
        "description":"je loopt verder.",
        "image":"img/6.jpg",
        "options":[
            {"direction":"links","destination":7},
            {"direction":"rechtdoor","destination":9}, 
            {"direction":"rechts","destination":8}            
        ]
    },
    {
        "name":"7",
        "description":"Je ziet een lokaal maar, je wilt geen risico nemen om binnen te gaan.",
        "image":"img/7.jpg",
        "options":[
            {"direction":"terug","destination":6}           
        ]
    },
    {
        "name":"8",
        "description":"lokaal met prullenbak bij de voorkant",
        "image":"img/8.jpg",
        "options":[
            {"direction":"terug","destination":6},           
        ]
    },
    {
        "name":"9",
        "description":"Je gaat door nog een deur heen",
        "image":"img/9.jpg",
        "options":[
            {"direction":"rechts","destination":11},
            {"direction":"rechtdoor","destination":12}           
        ]
    },
    {
        "name":"10",
        "description":"u staat in het examenlokaal",
        "image":"img/10.jpg",
        "options":[
            {"direction":"noord","destination":11},
            {"direction":"west","destination":11}           
        ]
    },
    {
        "name":"11",
        "description":"Je staat bij het lokaal maar, je hoort iemand schreeuwen...",
        "image":"img/11.jpg",
        "options":[
            {"direction":"terug","destination":9},       
        ]
    },
    {
        "name":"12",
        "description":"je kijkt rond maar, je moet rechtdoor lopen...",
        "image":"img/12.jpg",
        "options":[
            {"direction":"noord","destination":13},          
        ]
    },
    {
        "name":"13",
        "description":"je bent er eindelijk maar, je voelt je heel zwak...?",
        "image":"img/13.jpg",          
        
    }
];

function showLocation(){
    // maak de html-blokken leeg
    navBox.innerHTML = "";
    optionsBox.innerHTML = "";
    
    // zet je juiste omschrijving in het description blok in de html
    descriptionBox.innerHTML = places[currentPosition].description;

    // zet het juiste plaatje wat hoort bij de positie neer
    myImg.src = places[currentPosition].image;

    // ga voor de huide plaats alle elementen in de eigenschap options na
    let possibleDirections = places[currentPosition].options.map((option,i) => { 

        // plaats alle opties in een <p> en plaats die in de optionsBox 
        let directionsP = document.createElement("p");
        directionsP.innerHTML = "<b>" + option.direction + "</b>: naar de " + places[option.destination].name;
        optionsBox.appendChild(directionsP);

        // maak voor iedere direction een button aan

        let btn = document.createElement("input");
        btn.setAttribute("type","button");
        btn.setAttribute("class","inputButton");
        btn.setAttribute("value",option.direction);
        navBox.appendChild(btn);

        // maak voor ieder button een click-handler aan
        btn.addEventListener("click", ()=>{
            currentPosition = option.destination;

            //laat van de gekozen destination de lokatie zien
            showLocation();
        });
    });
}

showLocation();