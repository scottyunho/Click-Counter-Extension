let counterDisplayElem = document.getElementById("counter-display");
let counterMinusElem = document.getElementById("counter-minus");
let counterPlusElem = document.getElementById("counter-plus");
let count;



function updateDisplay(){
    chrome.storage.sync.get(['counter'], function(result) {
        console.log('Value currently is ' + result.counter);
        count = result.counter;
        counterDisplayElem.innerHTML = count;
    });
};


//bootup
document.addEventListener("DOMContentLoaded", ()=> {
    chrome.storage.sync.get(['counter'], function(result) {
        console.log('Value currently is ' + result.counter);
        count = result.counter;
        counterDisplayElem.innerHTML = count;
    });
});

//if
counterPlusElem.addEventListener("click",()=>{
    count++;
    chrome.storage.sync.set({counter: count}, function() {
        console.log('Value is set to ' + count);
    });

    updateDisplay();
});

counterMinusElem.addEventListener("click",()=>{
    count--;
    chrome.storage.sync.set({counter: count}, function() {
        console.log('Value is set to ' + count);
    });
    updateDisplay();
});



