// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const getAllHearts = document.querySelectorAll('span.like-glyph');
const modal = document.getElementById('modal');
const errorMsg = document.getElementById('modal-message');


function success() {

  if (heart.innerText == EMPTY_HEART) {
    heart.innerText = FULL_HEART;
    heart.className = 'activated-heart';
  } 

};


function error() {

  modal.className = "";
  errorMsg.textContent = "Hmm...network is bugging out. Try again!";

  setTimeout(() => {
    modal.className = "hidden";
  }, 3000);
  
}

function simpleLiker() {
  
  getAllHearts.forEach((event) => {
    event.addEventListener('click', (e) => {

      if (e.target.innerText === EMPTY_HEART) {
        mimicServerCall()
        .then(() => {  //anonymous function 
          e.target.innerText = FULL_HEART;
          e.target.className = 'activated-heart';})
        .catch(error)   //invoking error fn later ( w/o () )
      } else {
        e.target.innerText = EMPTY_HEART;
        e.target.className = 'like-glyph';
      }
      
    })
  });
}

simpleLiker();









//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
