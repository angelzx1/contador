let currentnumberWrapper = document.getElementById("currentnumber")
let currentnumber = 0;
function increment(){
currentnumber = currentnumber + 1;
currentnumberWrapper.innerHTML = currentnumber;
}
function decrement(){
    currentnumber = currentnumber - 1;
    currentnumberWrapper.innerHTML = currentnumber;
    }