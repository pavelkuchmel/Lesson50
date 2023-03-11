/*
let body = document.getElementById("body");
let arrayColor = [];
for (let i = 0; i < 10; i++){
    arrayColor.push("rgb(" +
        Math.round(255*Math.random()) +
        "," +
        Math.round(255*Math.random()) +
        "," +
        Math.round(255*Math.random()) +
        ")");
}

body.addEventListener("mousemove", function (e){
    body.style.backgroundColor = "rgb(" + e.pageY + "," + e.pageX + "," + e.pageX  + ")";
});
*/
let arrayColor = [];

for (let i = 0; i < 10; i++){
    arrayColor.push("rgb(" +
        Math.round(255*Math.random()) +
        "," +
        Math.round(255*Math.random()) +
        "," +
        Math.round(255*Math.random()) +
        ")");
}

let divOut = document.getElementById("out");
let divIn = document.getElementById("in");

/*
let node = document.createElement("h2");
let childNode = document.createTextNode(divIn.clientWidth);
node.appendChild(childNode);
document.getElementsByTagName("body")[0].appendChild(node);
*/

function rdmInt(min, max){
    return Math.floor(min + Math.random() * (max + 1 - min));
}
divIn.addEventListener("mouseenter", function () {
    divIn.style.backgroundColor = arrayColor[rdmInt(0, 9)];
});
divIn.addEventListener("click", function (){
    divOut.addEventListener("click", function (event) {
        divIn.style.left = event.pageX - divIn.clientWidth/2 +'px';
        divIn.style.top = event.pageY - divIn.clientHeight/2 +'px';
    });
});
