// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const errorModal = document.getElementById('modal');
errorModal.classList.add('hidden');

const likeGlyph = document.getElementsByClassName('like-glyph')[0];

likeGlyph.addEventListener('click', (e) => {
  e.target.innerText = EMPTY_HEART;
  e.target.classList.remove('activated-heart');
});

// Your JavaScript code goes here!
mimicServerCall()
.then(() => {
  likeGlyph.innerText = FULL_HEART;
  likeGlyph.classList.add('activated-heart');
})
.catch((error) => { 
  errorModal.innerText = error;
  errorModal.classList.remove('hidden');
});

setTimeout(() => {
  errorModal.classList.add('hidden');
}, 3000);



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
