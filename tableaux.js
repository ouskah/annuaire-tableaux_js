$liste = document.getElementById("liste");
$ajouter = document.getElementById("ajouter");
$saisie = document.getElementById("saisie");

tableau = [];


function afficherListe() {

    elements = "";

    for (i=0; i < tableau.length; i++) {
        elements += "<li>" + tableau[i] + "</li>";
    }
    if (tableau.length !== ""){ // si aucune saisie ne pas afficher un <li> vide
        $liste.innerHTML = elements;
    }
}


function ajouter() {
    tableau.push($saisie.value);
    afficherListe();
}

$ajouter.onclick = ajouter;
afficherListe();
