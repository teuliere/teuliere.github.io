
function redirectionLien() {
  var url = "https://www.google.com/search?q=" + document.getElementById("champrecherche").value + "+site:teuliere.github.io";
  window.open(url, '_blank');
}

/* bouton pour affecter un nom à la page principale
let monEntete = document.querySelector('h1');
//monEntete.textContent = 'Bonjour Martinois';
//document.querySelector('body').style.backgroundColor = 'purple';
let monBouton = document.querySelector('button');
if (!localStorage.getItem('nom')) {
//  setNomFamille();
} else {
  let recupNom = localStorage.getItem('nom');
  monEntete.textContent = 'St Martin est trop cool pour : ' + recupNom;
};

monBouton.addEventListener('click', function() {
  setNomFamille();
});*/

/* pour afficher une autre page au clic sur l'image
let monImage = document.querySelector('img');

monImage.addEventListener('click', function() {
    let monSrc = monImage.getAttribute('src');
    if (monSrc === 'z-commun/images/st-martin.jpg') {
          monImage.setAttribute('src', 'z-commun/images/pont-vieux.jpg');    
      } else {
          if (monSrc === 'z-commun/images/pont-vieux.jpg') {
            monImage.setAttribute('src', 'z-commun/images/planeze.jpg');
          } else {
            monImage.setAttribute('src', 'z-commun/images/st-martin.jpg');
          }
    }
});
*/

function setNomFamille() {
  let monNom = prompt('Veuillez saisir votre nom : ');
  localStorage.setItem('nom', monNom);
  monEntete.textContent = 'St Martin est cool pour : ' + monNom;
    };


let imageAffichee = document.querySelector('.imgAffichee');
let barreImage = document.querySelector('.barreImage');
let listeTableaux = ['st-martin','pont-vieux','planeze','melling'];
let listeCommentaires = ['le village','pont vieux','Planezes','monastère'];

for(let i = 0; i < 4; i++) {
  let nouvelleImage = document.createElement('img');
  nouvelleImage.setAttribute('src', 'z-commun/images/' + listeTableaux[i] + '.jpg');
  nouvelleImage.setAttribute('alt', 'St Martin - Tableau de Laurence - ' + listeCommentaires[i]);
  nouvelleImage.setAttribute('width', '600px');
  nouvelleImage.setAttribute('height', '480px');
  barreImage.appendChild(nouvelleImage);
  nouvelleImage.onclick = function(e) {
    let imageCourante = e.target.getAttribute('src');
    imageAffichee.setAttribute('src', imageCourante);
    let commentaireCourant = e.target.getAttribute('alt');
    imageAffichee.setAttribute('alt', commentaireCourant);
  }
}

let imageAffichee2 = document.querySelector('.imgAffichee2');
let barreImage2 = document.querySelector('.barreImage2');
let listeTableaux2 = ['cartesudestSatellite','cartesudestIGN classique','cartesudest1950','cartesudestEsri','cartesudestcadastre'];
let listeCommentaires2 = ['vue satellite','carte IGN classique','vue aérienne 1950','carte Esri','cadastre'];

for(let i = 0; i < 5; i++) {
  let nouvelleImage = document.createElement('img');
  nouvelleImage.setAttribute('src', 'z-commun/images/' + listeTableaux2[i] + '.JPG');
  nouvelleImage.setAttribute('alt', 'Sud est de St Martin - ' + listeCommentaires2[i]);
  nouvelleImage.setAttribute('width', '750px');
  nouvelleImage.setAttribute('height', '530px');
  barreImage2.appendChild(nouvelleImage);
  nouvelleImage.onclick = function(e) {
    let imageCourante = e.target.getAttribute('src');
    imageAffichee2.setAttribute('src', imageCourante);
    let commentaireCourant = e.target.getAttribute('alt');
    imageAffichee2.setAttribute('alt', commentaireCourant);
  }
}
