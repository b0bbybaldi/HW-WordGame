var choices =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var artists = ["bad bunny", "daddy yankee", "don omar", "enrique iglesias", "farruko", "j balvin", "juan magan", "luis fonsi", "maluma", "nicky jam", "ozuna", "piso 21", "sebastian yatra", "wisin", "yandel"];

var randomArtist = "";

var letters = [];

var success = [];

var wrongs = [];

var wins = 0;

var lives = 10;

var spaces = 0;

var rights = 0;

function reset(){

  randomArtist = artists[(Math.floor(Math.random()*artists.length))];

  letters = randomArtist.split('');

  spaces = letters.length;

  console.log(randomArtist);

  lives = 10;

  rights = 0;

  success = [];

  wrongs = [];

  choices =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


  for(var i=0; i<letters.length;i++){
    success.push("_");
    document.getElementById("name").innerHTML = sucess;
  }
  
  document.getElementById("name").innerHTML = sucess.join('');

  document.getElementById("lives").innerHTML = lives;

  document.getElementById("score").innerHTML = wins;

}


document.onkeyup = function(event){

  var userGuess = event.key;

  console.log(userGuess);

  for(var i=0; i<choices.length; i++){
    if(userGuess === choices[i]){
      if(randomArtist.indexOf(userGuess) > -1){
        for(var i=0; i< spaces; i++){
          if(letters[i] === userGuess){
            rights++;
            success[i] = userGuess;
            document.getElementById("name").innerHTML = success.join(" ");
          }
        }
      }else{
        wrongs.push(userGuess);
        lives--;
        document.getElementById("lives").innerHTML = lives;
        document.getElementById("guess").innerHTML = wrongs;
      }

      if(rights === spaces){
        wins++;
        document.getElementById("score").innerHTML = wins;
        alert("You Win");
        reset();
      }else if(lives === 0){
        alert("You Loose");
        reset();
      }
    }
  }
}

    
   
