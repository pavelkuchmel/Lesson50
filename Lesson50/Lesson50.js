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
    body.style.backgroundColor = "rgb(" + e.pageY + "," + e.screenX + "," + e.pageX + ")";
})