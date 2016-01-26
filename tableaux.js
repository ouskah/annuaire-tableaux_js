$liste = document.getElementById("liste");
$ajouter = document.getElementById("ajouter");
$annuler = document.getElementById("annuler");
$saisie = document.getElementById("saisie");

tableau = []; // variable tableau avec accès global

function afficherListe() { // afficher la liste des éléments ajouter

    elements = "";

    for (i=0; i < tableau.length; i++) {
        elements += "<li>" + tableau[i] + "</li>";
    }
        $liste.innerHTML = elements; 
}

function ajouter() { // ajout d'un élément à la liste
    tableau.push($saisie.value);
    afficherListe();
    $saisie.value = " "; // effacer la zone de saisie après l'ajout
}


function annuler() { // annuler le dernier élément ajouté
    tableau.pop(); // supprimer le dernier élément du tableau
    afficherListe(); // afficher la nouvelle liste
}



$ajouter.onclick = ajouter; // ajout d'un élément au click sur le button "Ajouter"
$annuler.onclick = annuler; // annuler le dernier élément ajouter au click

afficherListe(); 


