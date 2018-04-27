var artists = ["bad bunny", "daddy yankee", "don omar", "enrique iglesias", "farruko", "j balvin", "juan magan", "luis fonsi", "maluma", "nicky jam", "ozuna", "piso 21", "sebastian yatra", "wisin", "yandel"];

var randomArtist = artists[(Math.floor(Math.random()*artists.length))];

console.log(randomArtist);

var lives = 10;

var spaces = [];

var wrongs = [];

var wins = document.getElementById("score");

var tries = document.getElementById("guess");

var userText = document.getElementById("name");

// var getSpaces = function(){
  for(var i=0; i<randomArtist.length;i++){
    spaces.push("_");
  }
//   return spaces;
// }


document.onkeyup = function(event){

  var userGuess = event.keyCode;

  console.log(userGuess);

  var word = String.fromCharCode(userGuess);

  console.log(word);

  if(randomArtist.indexOf(word)>-1){
    spaces[randomArtist.indexOf(word)] = word;
    userText.textContent = spaces.join(" ");

    if(spaces.join(" ") == randomArtist){
      alert("You win!");
      wins++;
    } 
  }else{
      lives--
    if(lives === 0){
      alert(" You lost! -> Game Over :( ");
    }else{
      wrongs.push(word);
      tries.textContent = wrongs;
    }
  }

}

   
