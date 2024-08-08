let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newgamebutton = document.querySelector("#newgamebtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
const winpatterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],];
const reset=() =>{
    turn = "player1";
    enablebtn();
    msgcontainer.classList.add("hide");
    count = 0;
}    

const enablebtn = () => {
        for(let i of boxes){
            i.disabled = false;
            i.innerText="";
            i.style.backgroundColor="white";
        }
    }
const desablebtn=()=>{
    for(let i of boxes){
        i.disabled = true;
    }
}
const showwinner=(pankaj)=>{
msg.innerText=`Congratulations! Winner is ${pankaj}`;
msgcontainer.classList.remove("hide");
desablebtn();
};

const checkwinner = () =>{
    for(i of winpatterns){
         let a = boxes[i[0]].innerText;
         let b = boxes[i[1]].innerText;
         let c = boxes[i[2]].innerText;
        
   
     if(a !="" && b != "" && c !=""){
        if(a===b && b===c){
            showwinner(a);
            return true;
            }
     }
    }
}
const matchdraw = ()=>{
    msg.innerText="Game Drawn!";
    msgcontainer.classList.remove("hide"); 
    desablebtn();
}
let count = 0;
var turn = "player1"; 
boxes.forEach((a)=>{a.addEventListener("click",()=>{
   if(turn==="player1"){
    a.style.backgroundColor="cyan";
    a.style.textShadow="5px 5px 10px black";
    a.innerText = "X";
    turn = "player2"; 
   }
   else{
    a.style.backgroundColor="hotpink";
    a.style.textShadow="5px 5px 10px black";
    a.innerText = "O";
    turn = "player1";
   }
   a.disabled =true ;
   count++;
   let isWinner=checkwinner();
   if(count === 9 && !isWinner){
        matchdraw();
    }
  }
)});
newgamebutton.addEventListener("click",reset);
resetbtn.addEventListener("click",reset);