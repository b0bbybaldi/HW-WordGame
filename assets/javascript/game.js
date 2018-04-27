var choices =[' ', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var artists = ['bad bunny', 'daddy yankee', 'don omar', 'enrique iglesias', 'farruko', 'j balvin', 'juan magan', 'luis fonsi', 'maluma', 'nicky jam', 'ozuna', 'piso 21', 'sebastian yatra', 'wisin', 'yandel'];

var randomArtist = "";

var letters = [];

var hits = [];

var wrongs = [];

var wins = 0;

var tries = 10;

var spaces = 0;

var rights = 0;

function reset(){

  randomArtist = artists[(Math.floor(Math.random()*artists.length))];
 
  letters = randomArtist.split('');

  spaces = letters.length;

  tries = 10;

  rights = 0;

  hits = [];

  wrongs = [];

  choices =[' ', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  test = false;

  start();
}

function start(){
  randomArtist = artists[(Math.floor(Math.random()*artists.length))];
  console.log(randomArtist);

  letters = randomArtist.split('');

  spaces = letters.length;

  tries = 10;

  rights = 0;

  hits = [];

  wrongs = [];

  choices =[' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  for(var i=0; i<spaces;i++){
    hits.push(' _ ');
    document.getElementById('name').innerHTML = hits;
  }

  document.getElementById('name').innerHTML = hits.join(' ');

  document.getElementById('lives').innerHTML = tries;

  document.getElementById('score').innerHTML = wins;
}

function compare(userGuess){
  if(randomArtist.indexOf(userGuess) > -1){
    for(var i=0; i< spaces; i++){
       if(letters[i] === userGuess){
          rights++;
          hits[i] = userGuess;
          document.getElementById('name').innerHTML = hits.join(' ');
        }
    }
  }else{
    wrongs.push(userGuess);
    tries--;
    document.getElementById('lives').innerHTML = tries;
    document.getElementById('guess').innerHTML = wrongs;
  }
}

function result(){
  if(rights === spaces){
    wins++;
    document.getElementById('score').innerHTML = wins;
    alert('You Won!');
    reset();
  }else if(tries === 0){
    alert('You Lost :(');
    reset();
  }
}

start();

document.onkeyup = function(event){

  test = true;

  var userGuess = event.key;

  console.log(userGuess);

  for(var i=0; i<choices.length; i++){
    if(userGuess === choices[i] && test === true){
      compare(userGuess);
      result();
    }
  }
} 

    
   
