let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice");
let message = document.querySelector("#msg");
let user = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");
let mess = document.getElementsByClassName("message")


let generation = () => {
    const option = ["rock", "paper", "scissor"];
    //rock paper scissor
    const math = Math.floor(Math.random() * 3)
    return option[math];
    console.log(math)
}

const winner = (userwin,userchoice,computerchoice) => {
    if (userwin) {
        userscore++;
        user.innerHTML = userscore;
        message.innerHTML = `You Win! ${userchoice} beats ${computerchoice}`;
        message.style.backgroundColor = "Green"
        if (userscore ===8) {
            alert("You win game is overr!   Please refersh")
            // message.innerHTML = "You win game is over"
            userscore = "8";
        }
    } else {
        compscore++;
        comp.innerHTML = compscore;
        message.innerHTML = `You Lose! ${computerchoice} beats ${userchoice}`;
        message.style.backgroundColor = "Red"
        if (compscore ===8) {
            alert('computer win game is overr!   please refersh')
            // message.innerHTML = "computer winner game is over"
            compscore = "8";
        }
    }
}
const draw = () => {
    message.innerHTML = "Game was draw"
}

let playgame = (userchoice) => {
    //Generate computer choice
    const computerchoice = generation(); 
   
    if (userchoice === computerchoice) {
        draw();
    } else {
        userwin = true;
        if (userchoice === "rock") {
            //paper scissor
            userwin = computerchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            //rock scissor
            userwin = computerchoice === "scissor" ? false : true;
        } else {
            //rock paper
            userwin = computerchoice == "rock" ? false : true;
        }
        winner(userwin,userchoice,computerchoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})