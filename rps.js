let userScore=0;
let compScore=0;
const user_Score=document.getElementById("user-score");
const comp_Score=document.getElementById("comp-score");
const choices=document.querySelectorAll(".choice");
const msg=document.getElementById("msg");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    //Math.random ()*3 for generating nos between 0 to 2 
    const randIndx= Math.floor(Math.random()*3);
    return options[randIndx];

}
const drawGame=(userChoice)=>{
    console.log("Game Was Drawn!");
    msg.innerText=`Game Was Drawn! Both chose ${userChoice}`;
    msg.style.backgroundColor="blue";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("You Win!");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        user_Score.innerText=userScore;
    }
    else{
        console.log("You Lose!");
         msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
         msg.style.backgroundColor="red"
         compScore++;
         comp_Score.innerText=compScore;
    }

}
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    //comp choice
    const compChoice=genCompChoice();
    console.log("computer choice=",compChoice);
    if(userChoice==compChoice){
        drawGame(userChoice);
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice=="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="paper"?true:false;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})