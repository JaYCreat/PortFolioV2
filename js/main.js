
const textArray = ["Developpeur front junior", "Basé en France"];

const textElement = document.getElementById("text");

let textIndex = 0;


let charIndex = 0;


let currentText = "";

function type() {
  if (textIndex === textArray.length) {
    textIndex = 0;
  }
  const text = textArray[textIndex];
 
  if (currentText === text) {
    setTimeout(() => {
      let textLength = currentText.length;
      let interval = setInterval(() => {
        currentText = currentText.substring(0, textLength);
        textElement.textContent = currentText;
        textLength--;
        if (textLength === -1) {
          clearInterval(interval);
          textIndex++;
          charIndex = 0;
          currentText = "";
      
          type();
        }
      }, 50);
    }, 3000);
  } else {
   
    currentText = text.substring(0, charIndex + 1);
    textElement.textContent = currentText;
    charIndex++;
   
    setTimeout(type, 200);
  }
}


type();
