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
        return justePrix = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }
    else if(max === 100) 
    {
        const minCeiled = Math.ceil(1);
        const maxFloored = Math.floor(100);
        return justePrix = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }
    else(max === 1000) 
    {
        const minCeiled = Math.ceil(1);
        const maxFloored = Math.floor(1000);
        return justePrix = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    }
}

choixDifficulte(1000)
console.log(justePrix);