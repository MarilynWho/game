window.onload = function () {
    let hit = document.getElementById("hit-btn");
    hit.onclick = hitfunc;
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    context.moveTo(50, 100);
    context.lineTo(400, 200);
    context.stroke();
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