




let playerPoints = 0;
let compPoints = 0;
const choicesArray = ["rock", "paper", "scissors"]
function checkPoints(){
    if(playerPoints == 10){
        alert("YOU WON!")
        let playerPoints = 0;
        let compPoints = 0;
    } else if(compPoints == 10){
        alert("YOU LOSE!")
        let playerPoints = 0;
        let compPoints = 0;
    };
};


function rockChoice(){
    let rock = document.querySelector(".rock");
    rock.addEventListener("click", ()=>{
        alert("You have chosen rock!");
    
        let randomItem = choicesArray[Math.floor(Math.random()*choicesArray.length)];
        if(randomItem=="scissors"){
            alert("Your opponent has chosen scissors! You gain one points!")
            playerPoints += 1;
        } else if(randomItem=="paper"){
            alert("Your opponent has chosen paper, he gains one point!")
           compPoints += 1;
        } else {
            alert("Nothing happens!")
        }

       let humanpoints = document.querySelector(".myPoints");
       let machinepoints = document.querySelector(".cpuPoints");
       humanpoints.textContent = `${playerPoints}`;
       machinepoints.textContent = `${compPoints}`;
       checkPoints();
       humanpoints.textContent = `${playerPoints}`;
       machinepoints.textContent = `${compPoints}`;
    });
};

function paperChoice(){
    let paper = document.querySelector(".paper");
    paper.addEventListener("click", ()=>{
        alert("You have chosen paper!");
        let randomItem = choicesArray[Math.floor(Math.random()*choicesArray.length)];
        if(randomItem=="scissors"){
            alert("Your opponent has chosen scissors! CPU gains one point!")
            compPoints += 1;
        } else if(randomItem=="rock"){
            alert("Your opponent has chosen rock, you gain one point!")
           playerPoints += 1;
        } else {
            alert("Nothing happens!")
        }

       let humanpoints = document.querySelector(".myPoints");
       let machinepoints = document.querySelector(".cpuPoints");
       humanpoints.textContent = `${playerPoints}`;
       machinepoints.textContent = `${compPoints}`;
       checkPoints();
       humanpoints.textContent = `${playerPoints}`;
       machinepoints.textContent = `${compPoints}`;
        
    });

}

function scissorsChoice(){
    let scissors = document.querySelector(".scissors");
    scissors.addEventListener("click", ()=>{
        alert("You have chosen scissors!");
        let randomItem = choicesArray[Math.floor(Math.random()*choicesArray.length)];
        if(randomItem=="paper"){
            alert("Your opponent has chosen paper! You gain one points!")
            playerPoints += 1;
        } else if(randomItem=="rock"){
            alert("Your opponent has chosen rock, he gains one point!")
           compPoints += 1;
        } else {
            alert("Nothing happens!")
        }

       let humanpoints = document.querySelector(".myPoints");
       let machinepoints = document.querySelector(".cpuPoints");
       humanpoints.textContent = `${playerPoints}`;
       machinepoints.textContent = `${compPoints}`;
       checkPoints();
       humanpoints.textContent = `${playerPoints}`;
       machinepoints.textContent = `${compPoints}`;
        
    });

};



scissorsChoice();
paperChoice();
rockChoice();



