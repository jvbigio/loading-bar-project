'use strict';
// create a loading bar when page loads
const loadingBarItemEl = document.querySelector('.loading-bar__item');
// const thirtyButtonEl = document.querySelector('.thirty-percent');
// const sixtyButtonEl = document.querySelector('.thirty-percent');
// const hundredButtonEl = document.querySelector('.hundred-percent');
const buttonEl = document.getElementsByClassName('button');
const buttonContainerEl = document.querySelector('.button__container');


function buttonProgress() {
  buttonContainerEl.addEventListener('click', function(event) {
    if (event.target === this.firstElementChild) {
      loadingBarItemEl.style.width = `${'30%'}`;
    } else if (event.target === this.children[1]) {
      loadingBarItemEl.style.width = `${'60%'}`;
    } else if (event.target === this.lastElementChild) {
      loadingBarItemEl.style.width = `${'100%'}`;
    }
  });
}

buttonProgress();




// make width of loadingBarEl bigger as time goes on:

// let width = 0;
// let loadingBar = setInterval(function() {
//   if (width >= 100) {
//     clearInterval(loadingBar);
//   } else {
//     width++;
//     loadingBarItemEl.style.width = width + '%';
//   }
// }, 10)


// function thirtyPercent() {
//   thirtyButtonEl.addEventListener('click', function() {
//     if (event.target.classList.contains(th)) {
//       clearInterval(loadingBar);
//     } else {
//       width++;
//       loadingBarItemEl.style.width = width;
//     }
//   }, 10)
// }

// thirtyPercent();


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

// ** TRY: completing challenge using css class .thirty, .sixty and 
// use classList.add('.thirty);
