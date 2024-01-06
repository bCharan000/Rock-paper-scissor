let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choise");
const display = document.querySelector("#display");

const userScoreValue = document.querySelector('#yourScore');
const compScoreValue = document.querySelector('#cmpScore');


//for generating random value

const gencompChoise =() =>{
  const options = ['rock','paper','sczr'];
  const randomOptions = Math.floor(Math.random()*3);
  return options[randomOptions];
};

//for draw condition

const drawGame = () =>{
  display.innerText = "The Game was Draw 'No score' ";
  display.style.backgroundColor = '#D35400';
};

// display

const winner =(youWin,compWin) =>{
  if (youWin){
    userScore++
    userScoreValue.innerText=userScore;
    display.innerText = `You Win`;
    display.style.backgroundColor = '#00FF00';
  }else{
    compScore++
    compScoreValue.innerText = compScore;
    display.innerText ='You lost';
    display.style.backgroundColor ="#FF0000";
  }
}

const playGame =(youChoice) => {
  const compChoice =gencompChoise();

  if (youChoice===compChoice) {
    drawGame();
  }else{
    let youWin =true;
    if (youChoice==='rock') {
      //paper sczor
      youWin= compChoice=== 'paper' ? false :true ;
    }else if(youChoice==='paper') {
      youWin=compChoice==='sczr' ? false : true;
    }else {
      youWin=compChoice==='rock' ? false :true;
    }
      winner(youWin,youChoice,compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const youChoice = choice.getAttribute("id");
    playGame(youChoice);
  });
});
