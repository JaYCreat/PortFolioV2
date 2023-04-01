document.addEventListener('DOMContentLoaded', () => {
    const loadingPage = document.querySelector('.loader');
  
    setTimeout(() => {
        loadingPage.classList.add('fadeOut');
        loadingPage.addEventListener('animationend', () => {
          window.location.href = 'page.html'; // Remplacez 'autre_page.html' par l'URL de la page vers laquelle vous souhaitez rediriger.
        });
      }, 6000); // Temps en millisecondes avant que la page de chargement disparaisse (3000 ms = 3 s)
    });
  