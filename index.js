let button_decrease = document.getElementById("button-decrease");

let button_increase = document.getElementById("button-increase");

let button_reset = document.getElementById("button-reset");

let current_count = document.getElementById("current-count");



let counter = 0;

button_decrease.addEventListener("click", decreaseCounter );
button_increase.addEventListener("click", increaseCounter );
button_reset.addEventListener("click", resetCounter );

function decreaseCounter() {
    counter = counter - 1;
    updateCount();
}

function increaseCounter() {
    counter = counter + 1;
    updateCount();
}

function resetCounter() {
    counter = 0;
    updateCount();
}

function updateCount () {
    current_count.innerHTML = counter;
}