

// document.addEventListener("DOMContentLoaded", function(event) { 

  document.onkeyup = function(event){

    var userText = document.getElementById("name");
   
    var userGuess = event.key;

    console.log(userGuess);

    var artists = ["bad bunny", "daddy yankee", "don omar", "enrique iglesias", "farruko", "j balvin", "juan magan", "luis fonsi", "maluma", "nicky jam", "ozuna", "piso 21", "sebastian yatra", "wisin", "yandel"];

    var randomArtist = artists[(Math.floor(Math.random()*artists.length))];
      
    console.log(randomArtist);
    
    userText.textContent = (" _ ").repeat(randomArtist.length);

    if(artists.indexOf(userGuess) !== -1){
      userText.textContent === userGuess
    }
  }
// });