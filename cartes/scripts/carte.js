
let imageAfficheeNO = document.querySelector('.imgAfficheeNO');
let barreImageNO = document.querySelector('.barreImageNO');
let listeTableauxNO = ['CarteNordOuestSatellite','CarteNordOuestIGNClassique','CarteNordOuest1950','CarteNordOuestEsri','CarteNordOuestCadastre'];
let listeCommentairesNO = ['vue satellite','carte IGN classique','vue aérienne 1950','carte Esri','cadastre'];

for(let i = 0; i < 5; i++) {
  let nouvelleImage = document.createElement('img');
  nouvelleImage.setAttribute('src', 'images/' + listeTableauxNO[i] + '.JPG');
  nouvelleImage.setAttribute('alt', 'Nord Ouest de St Martin - ' + listeCommentairesNO[i]);
  nouvelleImage.setAttribute('width', '760px');
  nouvelleImage.setAttribute('height', '660px');
  barreImageNO.appendChild(nouvelleImage);
  nouvelleImage.onclick = function(e) {
    let imageCourante = e.target.getAttribute('src');
    imageAfficheeNO.setAttribute('src', imageCourante);
    let commentaireCourant = e.target.getAttribute('alt');
    imageAfficheeNO.setAttribute('alt', commentaireCourant);
  }
}

let imageAfficheeSO = document.querySelector('.imgAfficheeSO');
let barreImageSO = document.querySelector('.barreImageSO');
let listeTableauxSO = ['CarteSudOuestSatellite','CarteSudOuestIGNClassique','CarteSudOuest1950','CarteSudOuestEsri','CarteSudOuestCadastre'];
let listeCommentairesSO = ['vue satellite','carte IGN classique','vue aérienne 1950','carte Esri','cadastre'];

for(let i = 0; i < 5; i++) {
  let nouvelleImage = document.createElement('img');
  nouvelleImage.setAttribute('src', 'images/' + listeTableauxSO[i] + '.JPG');
  nouvelleImage.setAttribute('alt', 'Sud Ouest de St Martin - ' + listeCommentairesSO[i]);
  nouvelleImage.setAttribute('width', '555px');
  nouvelleImage.setAttribute('height', '665px');
  barreImageSO.appendChild(nouvelleImage);
  nouvelleImage.onclick = function(e) {
    let imageCourante = e.target.getAttribute('src');
    imageAfficheeSO.setAttribute('src', imageCourante);
    let commentaireCourant = e.target.getAttribute('alt');
    imageAfficheeSO.setAttribute('alt', commentaireCourant);
  }
}

let imageAfficheeNE = document.querySelector('.imgAfficheeNE');
let barreImageNE = document.querySelector('.barreImageNE');
let listeTableauxNE = ['CarteNordEstSatellite','CarteNordEstIGNClassique','CarteNordEst1950','CarteNordEstEsri','CarteNordEstCadastre'];
let listeCommentairesNE = ['vue satellite','carte IGN classique','vue aérienne 1950','carte Esri','cadastre'];

for(let i = 0; i < 5; i++) {
  let nouvelleImage = document.createElement('img');
  nouvelleImage.setAttribute('src', 'images/' + listeTableauxNE[i] + '.JPG');
  nouvelleImage.setAttribute('alt', 'Sud est de St Martin - ' + listeCommentairesNE[i]);
  nouvelleImage.setAttribute('width', '735px');
  nouvelleImage.setAttribute('height', '505px');
  barreImageNE.appendChild(nouvelleImage);
  nouvelleImage.onclick = function(e) {
    let imageCourante = e.target.getAttribute('src');
    imageAfficheeNE.setAttribute('src', imageCourante);
    let commentaireCourant = e.target.getAttribute('alt');
    imageAfficheeNE.setAttribute('alt', commentaireCourant);
  }
}

let imageAfficheeSE = document.querySelector('.imgAfficheeSE');
let barreImageSE = document.querySelector('.barreImageSE');
let listeTableauxSE = ['cartesudestSatellite','cartesudestIGN classique','cartesudest1950','cartesudestEsri','cartesudestcadastre'];
let listeCommentairesSE = ['vue satellite','carte IGN classique','vue aérienne 1950','carte Esri','cadastre'];

for(let i = 0; i < 5; i++) {
  let nouvelleImage = document.createElement('img');
  nouvelleImage.setAttribute('src', 'images/' + listeTableauxSE[i] + '.JPG');
  nouvelleImage.setAttribute('alt', 'Sud est de St Martin - ' + listeCommentairesSE[i]);
  nouvelleImage.setAttribute('width', '750px');
  nouvelleImage.setAttribute('height', '530px');
  barreImageSE.appendChild(nouvelleImage);
  nouvelleImage.onclick = function(e) {
    let imageCourante = e.target.getAttribute('src');
    imageAfficheeSE.setAttribute('src', imageCourante);
    let commentaireCourant = e.target.getAttribute('alt');
    imageAfficheeSE.setAttribute('alt', commentaireCourant);
  }
}

let imageAfficheeE = document.querySelector('.imgAfficheeE');
let barreImageE = document.querySelector('.barreImageE');
let listeTableauxE = ['CarteEstSatellite','CarteEstIGNClassique','CarteEst1950','CarteEstEsri','CarteEstCadastre'];
let listeCommentairesE = ['vue satellite','carte IGN classique','vue aérienne 1950','carte Esri','cadastre'];

for(let i = 0; i < 5; i++) {
  let nouvelleImage = document.createElement('img');
  nouvelleImage.setAttribute('src', 'images/' + listeTableauxE[i] + '.JPG');
  nouvelleImage.setAttribute('alt', 'Est de St Martin - ' + listeCommentairesE[i]);
  nouvelleImage.setAttribute('width', '445px');
  nouvelleImage.setAttribute('height', '650px');
  barreImageE.appendChild(nouvelleImage);
  nouvelleImage.onclick = function(e) {
    let imageCourante = e.target.getAttribute('src');
    imageAfficheeE.setAttribute('src', imageCourante);
    let commentaireCourant = e.target.getAttribute('alt');
    imageAfficheeE.setAttribute('alt', commentaireCourant);
  }
}

let imageAfficheeV = document.querySelector('.imgAfficheeV');
let barreImageV = document.querySelector('.barreImageV');
let listeTableauxV = ['CarteVillageSatellite','CarteVillageIGNClassique','CarteVillage1950','CarteVillageEsri','CarteVillageCadastre'];
let listeCommentairesV = ['vue satellite','carte IGN classique','vue aérienne 1950','carte Esri','cadastre'];

for(let i = 0; i < 5; i++) {
  let nouvelleImage = document.createElement('img');
  nouvelleImage.setAttribute('src', 'images/' + listeTableauxV[i] + '.JPG');
  nouvelleImage.setAttribute('alt', 'Village de St Martin - ' + listeCommentairesV[i]);
  nouvelleImage.setAttribute('width', '683px');
  nouvelleImage.setAttribute('height', '603px');
  barreImageV.appendChild(nouvelleImage);
  nouvelleImage.onclick = function(e) {
    let imageCourante = e.target.getAttribute('src');
    imageAfficheeV.setAttribute('src', imageCourante);
    let commentaireCourant = e.target.getAttribute('alt');
    imageAfficheeV.setAttribute('alt', commentaireCourant);
  }
}
