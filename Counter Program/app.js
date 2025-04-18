
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let i = 0;

increaseBtn.onclick = function() {
    i++;
    countLabel.textContent = i;
}

decreaseBtn.onclick = function() {
    i--;
    countLabel.textContent = i;
}

resetBtn.onclick = function() {
    i = 0;
    countLabel.textContent = i;
}






