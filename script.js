/*
[1] On ajoute la fonction au bouton "J'en veux plus"
*/
let boutonCharger = document.querySelector('#plus button'); // Le bouton qui est dans le Node avec l'ID "plus"
boutonCharger.addEventListener('click', chargerPlus)

/*
[2] Permet de charger les perles du bac supplémentaires puis de les ajouter au DOM;
*/
async function chargerPlus(){
    console.log('je charge...');

    let aAjouter = await chargerJSON('perles.json');

    // [?] Quel est le type des données récupérées ? [?]
    for(let i = 0; i < aAjouter.length; i++){
        console.log(ajouterHTML);
        ajouterHTML(aAjouter[i]);
    }
}

/*
[3] Fonction asynchrone qui charge les nouvelles perles
*/
async function chargerJSON(fichier) {
    let response = await fetch(fichier);
    let perles = await response.json();
    return perles;
}

/*
[3] On ajoute les nouveaux éléments au DOM
*/
function ajouterHTML(perle){
    /*
    Nous allons ajouter les nouveaux éléments après le dernier présent actuellement
    */
    let lesPerles = document.querySelector('#perles');
    let bouton = document.querySelector('#plus');
    
    console.log(perle.contenu);
    /*
    Création du nouvel élément à ajouter
    */
   let article = document.createElement('article');
   article.classList.add('perle' , perle.série)

   let titre = document.createElement('h3');
   titre.innerHTML = `Série ${perle.série} - ${perle.année}`; // Ajoutons ici le titre récupéré
   
   let p = document.createElement('p');
   p.innerHTML = perle.contenu;

   article.appendChild(titre);
   article.appendChild(p);
   lesPerles.insertBefore(article, bouton);
}

/*
[4] À vous de jouer !  
[4] Nous devons maintenant rendre fonctionnels les boutons de filtrage
*/

// Récupérez les boutons de filtrage
// Récupérez le contenu TEXT de ces boutons (le nom des filtres)
// Ajouter une classe .hide dans votre CSS
// Ajoutez cette classe aux éléments correspondants au filtre