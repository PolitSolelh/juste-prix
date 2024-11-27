let tries = 0;
let justePrix = 0;

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
    document.getElementById("guess").disabled = false;
    document.getElementById("send").disabled = false;
}

function reset() {
    document.getElementById("easy").disabled = false;
    document.getElementById("normal").disabled = false;
    document.getElementById("hard").disabled = false;
    document.getElementById("guess").disabled = true;
    document.getElementById("send").disabled = true;
    document.getElementById("difficulty").innerHTML = "Sélectionnez une difficulté";
    tries = 0;
    justePrix = 0;
}

function humanGuess() {
    let guess = document.getElementById("guess").value;
    console.log(guess);
    console.log(justePrix);

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
        document.getElementById("guess").disabled = true;
        document.getElementById("send").disabled = true;

        }
    }
    else {
        tries++;
        document.getElementById("tentatives").innerHTML = `C'est votre essai numéro ${tries}`
        document.getElementById("prix").innerHTML = `Vous avez perdu. Le juste prix était ${justePrix}`;

    }
}