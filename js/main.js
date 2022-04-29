let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
//

// let prevArrow = document.querySelector(`.prev[data-prev="${190.keyCode}"`)
// let nextArrow = document.querySelector(`.next[data-next="${188.keyCode}"`)

function plusSlides(n) {
  showSlides(slideIndex += n);
  console.log(`n is`, n)
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function detectArrows(e) {
  console.log(e);
  if (e.keyCode === 190) {
    console.log(`e is 190`);
    plusSlides(1);
  }
  if (e.keyCode === 188) {
    console.log(`e is 188`);
    plusSlides(-1);
  }
}

    // in the active window
  // we will listen for the key being pressed and call on a function to trigger an event
function playSound(e) {
    let audio;
    let note;

    if (slideIndex === 1) {
    // assigns the audio associated with the key being pressed as it's being pressed
        audio = document.querySelector(`audio[data-drum="${e.keyCode}"`);
    // registers the key being pressed
        note = document.querySelector(`.key[data-drum="${e.keyCode}"]`);
    }
    if (slideIndex === 2) {
    // assigns the audio associated with the key being pressed as it's being pressed
         audio = document.querySelector(`audio[data-guitar="${e.keyCode}"`);
    // registers the key being pressed
        note = document.querySelector(`.key[data-guitar="${e.keyCode}"]`);
        console.log(audio)
    }
    if (slideIndex === 3) {
        // assigns the audio associated with the key being pressed as it's being pressed
        audio = document.querySelector(`audio[data-piano="${e.keyCode}"`);
    // registers the key being pressed
        note = document.querySelector(`.key[data-piano="${e.keyCode}"]`);
    }

    // if there is not audio associated with a key that is being pressed
    // simply return so that the function can reoccur
    if(!audio) return;
    // allows the audio to be played every keypress (audio does not need to finish playing before the next keypress)
    audio.currentTime = 0;
    //plays audio
      audio.play();
      
    note.classList.add('playing');
  }


  function removeTransition(e){
    if(e.propertyName !== 'transform') return;

    this.classList.remove('playing');
  }
  
  const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
window.addEventListener('keydown', detectArrows);