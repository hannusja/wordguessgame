var alioramus = ["a", "l", "i", "o", "r", "a", "m", "u", "s"]
var borogovia = ["b", "o", "r", "o", "g", "o"," v", "i", "a"]
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

//I feel it seems a bit of a cheating to use same lenght words, but folks in youtube example provided for homework did the same

var letters = ["a", "b", "c", "d", "e","f", "g", "h","i", "j", "k", "l","m", "n", "o", "p", "q", "r","s", "t", "u", "v", "w", "x", "y", "z"]

var dinosaursList = [alioramus, borogovia, euhelopus, hagryphus, iguanodon, irritator, maiasaura, mononykus, noasaurus, othnielia, oviraptor, saichania, sinraptor, talarurus, unenlagia]

var dinoGuess = dinosaursList[Math.floor(Math.random() * dinosaursList.length)]

console.log (dinoGuess)
    
var Wins = document.getElementById("Wins")
var score = 0
    Wins.append (score)

var guessdino = document.getElementById("guessdino") 
    guessdino.append(underscore)

var usedletters = document.getElementById("usedletters")


var guessremain = document.getElementById("guessremain")
var guessnumber = 12
    guessremain.append(guessnumber)

///All the above works how I want it. Don't mess with it unless absolutely have to!


//for (var i = 0; i<12; i++) {


//below block is extremely sensitive. Don't breath on it!!!>
    document.onkeyup = function(event) {
        var letterGuess = event.key
        
        if (dinoGuess.indexOf(letterGuess) !== -1) {   
            for (var j = 0; j<9; j++) {
                var a = dinoGuess.indexOf(letterGuess)
                if (a !==-1) {
                    underscore[a] = letterGuess
                    console.log (a)
                    console.log (underscore)
                    dinoGuess [a] = 0
                    console.log (dinoGuess)                  
                }
            }
        }

        for (var k = 0; k<26; k++) {
            var b = letters.indexOf(letterGuess)
            if (b !==-1) {
                console.log (letters[b])
                usedletters.append(letters [b]) 
                letters [b] = 0  
            }              
        } 

    }

//above block is extremely sensitive. Don't breath on it!!!<
//}






//following not working at all. Can't figure out where to show it up


// var count = 0;
// for(var m = 0; m < letters.length; ++m){
//     if(letters[m] == 0) {
//     count++
//     }
// }
// guessnumber = 12 - count




// if (dinoGuess  == [0, 0, 0, 0, 0, 0, 0, 0, 0]) {
//     score++
// }

