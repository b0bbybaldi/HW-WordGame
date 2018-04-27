var lives = 10;

var spaces = [];

var wrongs = [];

var tries = document.getElementById("guess")

var userText = document.getElementById("name");

var wins = document.getElementById("score");

var artists = ["BAD BUNNY", "DADDY YANKEE", "DON OMAR", "ENRIQUE IGLESIAS", "FARRUKO", "J BALVIN", "JUAN MAGAN", "LUIS FONSI", "MALUMA", "NICKY JAM", "OZUNA", "PISO 21", "SEBASTIAN YATRA", "WISIN", "YANDEL"];
  
var randomArtist = artists[(Math.floor(Math.random()*artists.length))]

console.log(randomArtist);

var underscore = (" _ ").repeat(randomArtist.length)



document.onkeyup = function(event){
  var userGuess = event.keyCode;

  console.log(userGuess);

  var word = String.fromCharCode(userGuess)

  console.log(word)

  if(randomArtist.indexOf(word)>-1){
    spaces[randomArtist.indexOf(word)] = word;
    userText[0].innerHTML = spaces.join(" ");

    if(userText === randomArtist){
      alert("You win!");
      wins++
    } 
  }else{
    if(lives === 0){
      alert(" You lost! -> Game Over :( ");
    }else{
    wrongs.push(word);
    }
  }

}

userText.textContent = underscore;

   
