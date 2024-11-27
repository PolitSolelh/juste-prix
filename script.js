// créer trois boutons pour chaque mode de difficulté : 
// Facile (1 à 50), Moyen (1 à 100) et Difficile (1 à 1000) avec une variable "choixDifficulté"
// générer un nombre secret par l'ordinateur
// permettre à un joueur de le deviner
// affiche si le guess est supérieur ou inférieur au juste prix
// en 15 essais maximum.

let tries = 0;

function choixDifficulte(max) {
    if(max === 50) 
    {
        const minCeiled = Math.ceil(1);
        const maxFloored = Math.floor(50);
        document.getElementById("secret").innerHTML = justePrix = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
        document.getElementById("difficulty").innerHTML = "Vous avez choisi la difficulté Facile";
    }
    else if(max === 100) 
    {
        const minCeiled = Math.ceil(1);
        const maxFloored = Math.floor(100);
        document.getElementById("secret").innerHTML = justePrix = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
        document.getElementById("difficulty").innerHTML = "Vous avez choisi la difficulté Moyenne"
    }
    else if(max === 1000) 
    {
        const minCeiled = Math.ceil(1);
        const maxFloored = Math.floor(1000);
        document.getElementById("secret").innerHTML = justePrix = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
        document.getElementById("difficulty").innerHTML = "Vous avez choisi la difficulté Difficile"
    }

    document.getElementById("easy").disabled = true;
    document.getElementById("normal").disabled = true;
    document.getElementById("hard").disabled = true;
}

function reset() {
    document.getElementById("easy").disabled = false;
    document.getElementById("normal").disabled = false;
    document.getElementById("hard").disabled = false;
    document.getElementById("difficulty").innerHTML = "Sélectionnez une difficulté"
    justePrix = 0;
}

console.log(max);