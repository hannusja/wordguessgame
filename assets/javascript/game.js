var dinosaursList = [alioramus, borogovia, euhelopus, hagryphus, iguanodon, irritator, maiasaura, mononykus, noasaurus, othnielia, oviraptor, saichania, sinraptor, talarurus, unenlagia]
var alioramus = ["a", "l", "i", "o", "r", "a", "m", "u", "s"]
var borogovia = ["b", "o", "r", "o"," g", "o"," v", "i", "a"]
var euhelopus = ["e", "u", "h", "e", "l", "o","p","u","s"]
var hagryphus = ["h","a","g","r","y","p","h","u","s"]
var iguanodon = ["i","g","u","a","n","o","d","o","n"]
var irritator = ["i","r","r","i","t","a","t","o","r"]
var maiasaura = ["m","a","i","a","s","a","u","r","a"]
var mononykus = ["m","o","n","o","n","y","k","u","s"]
var noasaurus = ["n","o","a","s","a","u","r","u","s"]
var othnielia = ["o","t","h","n","i","e","l","i","a"]
var oviraptor = ["o","v","i","r","a","p","t","o","r"]
var saichania = ["s","a","i","c","h","a","n","i","a"]
var sinraptor = ["s","i","n","r","a","p","t","o","r"]
var talarurus = ["t","a","l","a","r","u","r","u","s"]
var unenlagia = ["u","n","e","n","l","a","g","i","a"]

//for (var i = 0; i<dinosaursList.length; i++) {}
    
var Menu = document.getElementById("menu")

var dinoGuess = dinosaursList[Math.floor(Math.random() * dinosaursList.length)]

document.onkeyup = function(event) {
    var letterGuess = event.key
        var i = 12
        if (dinoGuess.indexOf(letterGuess) > -1) {
            var usedletters = document.createElement ("div")
        usedletters.textContent = "Letters already used: " +letterGuess
            Menu.appendChild(usedletters) 
        
        
        }
        else if (dinoGuess.indexOf(letterGuess) === -1) {
            var guessremain = document.createElement ("div")
        guessremain.textContent = "Number of guesses remaining: "+ i-1
        Menu.appendChild(guessremain)
        }
}




        var wins = document.createElement ("div")
        wins.textContent = "Wins: " //+
        Menu.appendChild(wins)

        var guessdino = document.createElement ("div")
        guessdino.textContent = "Guess this Dino: " //+
        Menu.appendChild(guessdino)









//if() {

//}

//else if () {

//}