window.onload = function () {
    let hit = document.getElementById("hit-btn");
    hit.onclick = hitfunc;
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    
    context.beginPath();
    context.moveTo(50, 100);
    context.lineTo(400, 200);

    context.beginPath();
    context.rect(50, 50, 200, 150);
    
    context.fillStyle = "#5e9860";
    context.fill();
    
    context.beginPath();
    context.arc(150, 150, 100, 0, 2 * Math.PI);
    
    context.fillStyle = "#5e9860";
    context.fill();

    context.lineWIdth = 10;
    context.strokeStyle = "af1f1f";

    // context.stroke();
    context.font = "42px Arial";

    context.fillText("Hello World", 300, 100);
    
};

let health = 100;

function hitfunc() { 
    health = health / 2;
    if (health <= 1) {
        alert("Game Over");
    }
    else { 
        console.log(health);
    }
}