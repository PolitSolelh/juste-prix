let tries = 0;
let justePrix = 0;

function choixDifficulte(max) {
    if(max === 50) 
    {
        const minCeiled = Math.ceil(1);
        const maxFloored = Math.floor(50);
        justePrix = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
        document.getElementById("difficulty").innerHTML = "Vous avez choisi la difficulté Facile";
    }
    else if(max === 100) 
    {
        const minCeiled = Math.ceil(1);
        const maxFloored = Math.floor(100);
        justePrix = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
        document.getElementById("difficulty").innerHTML = "Vous avez choisi la difficulté Moyenne"
    }
    else if(max === 1000) 
    {
        const minCeiled = Math.ceil(1);
        const maxFloored = Math.floor(1000);
        justePrix = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
        document.getElementById("difficulty").innerHTML = "Vous avez choisi la difficulté Difficile"
    }

    document.getElementById("easy").style.display = "none";
    document.getElementById("normal").style.display = "none";
    document.getElementById("hard").style.display = "none";
    document.getElementById("guess").style.display = "flex";
    document.getElementById("send").style.display = "flex";
}

function reset() {
    document.getElementById("easy").style.display = "flex";
    document.getElementById("normal").style.display = "flex";
    document.getElementById("hard").style.display = "flex";
    document.getElementById("guess").style.display = "none";
    document.getElementById("send").style.display = "none";
    document.getElementById("difficulty").innerHTML = "Sélectionnez une difficulté";
    document.getElementById("tentatives").innerHTML = "";
    document.getElementById("prix").innerHTML = "";
    document.getElementById("guess").value = "";
    tries = 0;
    justePrix = 0;
}

function humanGuess() {
    let guess = document.getElementById("guess").value;

    if(tries < 14) {
        if(guess > justePrix) 
        {
        tries++;
        document.getElementById("tentatives").innerHTML = `C'est votre essai numéro ${tries}`
        document.getElementById("prix").innerHTML = "C'est moins";
        }
        else if(guess < justePrix) 
        {
        tries++;
        document.getElementById("tentatives").innerHTML = `C'est votre essai numéro ${tries}`
        document.getElementById("prix").innerHTML = "C'est plus";

        }
        else if(guess = justePrix) 
        {
        tries++;
        document.getElementById("tentatives").innerHTML = "";
        document.getElementById("prix").innerHTML = `Vous avez gagné en ${tries} essais ! Le juste prix est : ${justePrix}`;
        document.getElementById("guess").style.display = "none";
        document.getElementById("send").style.display = "none";

        }
    }
    else {
        tries++;
        document.getElementById("tentatives").innerHTML = `C'est votre essai numéro ${tries}`
        document.getElementById("prix").innerHTML = `Vous avez perdu. Le juste prix était ${justePrix}`;

    }
}