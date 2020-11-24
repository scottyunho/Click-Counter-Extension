let counterDisplayElem = document.getElementById("counter-display");
let counterMinusElem = document.getElementById("counter-minus");
let counterPlusElem = document.getElementById("counter-plus");

let count = 0;
updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = `${count}`;
};
