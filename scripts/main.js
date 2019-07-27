let monEntete = document.querySelector('h1');
/*monEntete.textContent = 'Bonjour Saintmartinois';
document.querySelector('body').style.backgroundColor = 'purple';*/
let monBouton = document.querySelector('button');
if (localStorage.getItem('nom')) {
  let recupNom = localStorage.getItem('nom');
  monEntete.textContent = 'St Martin Lys est trop cool pour : ' + recupNom;
};

monBouton.addEventListener('click', function() {
  setNomFamille();
});

let monImage = document.querySelector('img');

monImage.addEventListener('click', function() {
    let monSrc = monImage.getAttribute('src');
    if (monSrc === 'images/st-martin.jpg') {
          monImage.setAttribute('src', 'images/pont-vieux.jpg');    
      } else {
          if (monSrc === 'images/pont-vieux.jpg') {
            monImage.setAttribute('src', 'images/planeze.jpg');
          } else {
            monImage.setAttribute('src', 'images/st-martin.jpg');
          }
    }
});

function setNomFamille() {
  let monNom = prompt('Veuillez saisir votre nom (modifie le titre de la page) : ');
  localStorage.setItem('nom', monNom);
  monEntete.textContent = 'St Martin Lys est cool pour : ' + monNom;
    };
