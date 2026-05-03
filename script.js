let box = document.getElementById("box");
let pos = 0;

function move() {
    pos++;
    box.style.left = pos + "px";
    requestAnimationFrame(move);
}

move();