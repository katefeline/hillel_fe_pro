let counter = 0;

let buttonPlus = document.getElementById('btn+');
buttonPlus.addEventListener('click', function() {
    ++counter;
});

let buttonMinus = document.getElementById('btn-');
buttonMinus.addEventListener('click', function () {
    --counter;
})

let buttonReset = document.getElementById('btnReset');
buttonReset.addEventListener('click', function () {
    counter = 0;
})

window.addEventListener("click", function(){
    document.getElementById("text").innerHTML = counter;
});