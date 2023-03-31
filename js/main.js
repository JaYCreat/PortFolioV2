
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


// map media 

L.mapquest.key = 'mWniJSNZnvSDUmAwPg3p5qgROUBqBEgb';

var map = L.mapquest.map('map', {
center: [47.218371, -1.553621], // Coordonnées de Nantes, France
layers: L.mapquest.tileLayer('map'),
zoom: 12
});




 // Sélectionnez tous les éléments de navigation avec un identifiant commençant par "nav-"
 const navItems = document.querySelectorAll('[id^="nav-"]');

 // Stockez les couleurs d'origine des icônes SVG
 const originalColors = {
   'nav-about': 'rgba(255, 255, 255, 0.74)',
   'nav-resume': 'rgba(255, 255, 255, 0.74)',
   'nav-portfolio': 'rgba(255, 255, 255, 0.74)',
   'nav-contact': 'rgba(255, 255, 255, 0.74)',
 };

 // Ajoutez un écouteur d'événements 'click' à chaque élément de navigation
 navItems.forEach((navItem) => {
   navItem.addEventListener('click', (event) => {
     // Restaurez la couleur d'origine de tous les éléments
     navItems.forEach((otherNavItem) => {
       const otherSvg = otherNavItem.querySelector('svg');
       otherSvg.setAttribute('fill', originalColors[otherNavItem.id]);
     });

     // Changez la couleur de remplissage de l'icône SVG dans l'élément cliqué
     const svg = event.target.closest('a').querySelector('svg');
     svg.setAttribute('fill', '#12FF0D');
   });
 });




