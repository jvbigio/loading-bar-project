// create a loading bar when page loads
const loadingBarItemEl = document.querySelector('.loading-bar__item');
// make width of loadingBarEl bigger as time goes on:

let width = 1;
let loadingBar = setInterval(function() {
  if (width >= 100) {
    clearInterval(loadingBar);
  } else {
    width++;
    loadingBarItemEl.style.width = width + '%';
  }
}, 10)

// let count = 0;
// let incrementor = setInterval(function() {
//   if (count === 10) {
//     clearInterval(incrementor);
//   } else {
//     count++;
//     console.log(count);
//   }
// }, 1000) // 1000 ms = 1sec

// challenge:
// have 3 buttons right below bar, and each button should say 30%, 60%, 100%
// when click on 30%, bar should show only 30%
//60% up to 60%, etc
// add eventlistener for each button, then load to each position