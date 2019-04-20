var alioramus = ["a", "l", "i", "o", "r", "a", "m", "u", "s"]
var borogovia = ["b", "o", "r", "o"," g", "o"," v", "i", "a"]
var euhelopus = ["e", "u", "h", "e", "l", "o", "p", "u", "s"]
var hagryphus = ["h", "a", "g", "r", "y", "p", "h", "u", "s"]
var iguanodon = ["i", "g", "u", "a", "n", "o", "d", "o", "n"]
var irritator = ["i", "r", "r", "i", "t", "a", "t", "o", "r"]
var maiasaura = ["m", "a", "i", "a", "s", "a", "u", "r", "a"]
var mononykus = ["m", "o", "n", "o", "n", "y", "k", "u", "s"]
var noasaurus = ["n", "o", "a", "s", "a", "u", "r", "u", "s"]
var othnielia = ["o", "t", "h", "n", "i", "e", "l", "i", "a"]
var oviraptor = ["o", "v", "i", "r", "a", "p", "t", "o", "r"]
var saichania = ["s", "a", "i", "c", "h", "a", "n", "i", "a"]
var sinraptor = ["s", "i", "n", "r", "a", "p", "t", "o", "r"]
var talarurus = ["t", "a", "l", "a", "r", "u", "r", "u", "s"]
var unenlagia = ["u", "n", "e", "n", "l", "a", "g", "i", "a"]
var underscore = ["_", "_", "_", "_", "_", "_", "_", "_", "_"]

var dinosaursList = [alioramus, borogovia, euhelopus, hagryphus, iguanodon, irritator, maiasaura, mononykus, noasaurus, othnielia, oviraptor, saichania, sinraptor, talarurus, unenlagia]

var dinoGuess = dinosaursList[Math.floor(Math.random() * dinosaursList.length)]

console.log (dinoGuess)
    
var Wins = document.getElementById("Wins")
//var wins = document.createElement ("div")
//wins.textContent = "Wins: " //+
//Menu.appendChild(wins)
//Wins.append(!) 



//var usedletters = document.createElement ("div")
//usedletters.textContent = "Letters already used: " 
//Menu.appendChild(usedletters)


//var guessremain = document.createElement ("div")
//guessremain.textContent = "Number of guesses /remaining: "+ (12-i)
//Menu.appendChild(guessremain)
var usedletters = document.getElementById("usedletters")
var guessremain = document.getElementById("guessremain")

for (var i = 0; i<12; i++) {
   
    document.onkeyup = function(event) {
        var letterGuess = event.key
        console.log (letterGuess)
        usedletters.append(letterGuess) 
        if (dinoGuess.indexOf(letterGuess) > -1) {
            //var usedletters = document.createElement ("div")
            // usedletters.textContent = "Letters already used: " +letterGuess
            // Menu.appendChild(usedletters)   
            var a = dinoGuess.indexOf(letterGuess)
            underscore[a] = letterGuess
            console.log (a)
            console.log (underscore)
            dinoGuess [a] = 0
            console.log (dinoGuess)
        }
            //else if if (dinoGuess.indexOf(letterGuess) === -1)
        else {
                //var guessremain = document.createElement ("div")
            //guessremain.textContent = "Number of guesses /remaining: "+ (12-i)
            //Menu.appendChild(guessremain)
       
        } 
    
    }
    
}

guessremain.append(12-i) 
var guessdino = document.getElementById("guessdino")
//var guessdino = document.createElement ("div")
//guessdino.textContent = "Guess this Dino: " //+
//Menu.appendChild(guessdino)
guessdino.append(underscore)














//if() {

//}

//else if () {

//}