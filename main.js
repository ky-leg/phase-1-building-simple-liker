// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const div = document.getElementById('modal')

addEventListener('click', function(event) {
 
  mimicServerCall()
  .then(function (response) {
    console.log(response);
    if(event.target.classList[1] === 'activated-heart') {
      event.target.classList.remove("activated-heart")
    }
    else {
      event.target.classList.add("activated-heart")
    };
  })
  .catch(() => {
    div.classList.remove('hidden');
    setTimeout(() => div.classList.add('hidden'), 3000)
  })
})


// function liker(event) {
//   if (event.target.classList[1] = 'activated-heart') {
//     event.target.classList.remove("activated-heart")
//   }
//   else {
//     event.target.classList.add("activated-heart")
//   }
// }

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
