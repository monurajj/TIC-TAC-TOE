var gameBoard = document.querySelector('.game-board');

var cells = document.querySelectorAll('.cell');

let l = [];
let turnX = true;
let boxes = Array.from(document.querySelectorAll(".cell"));
boxes.forEach((box) => {
    box.addEventListener("click", () =>
    {if(box.innerText===""){

        if(turnX){
            box.innerText= "X";
            turnX = false;
            l.unshift(box);
            checkWinner();
        }else{
            box.innerText = "O";
            turnX=true;
            l.unshift(box);
            checkWinner();
        }
        }             
    })
})

const winningPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
const whowins = (winner) =>{
    alert(`${winner} wins!`);
}
const checkWinner = () => {
    for(let pattern of winningPatterns){
        let case1 = boxes[pattern[0]].innerText;
        let case2 = boxes[pattern[1]].innerText;
        let case3 = boxes[pattern[2]].innerText;
        console.log(pattern, case1 !== "" && case2 !== "" && case3 !== "",  case1===case2 && case1===case3);
        if (case1 != "" && case2 != "" && case3 !=""){
            if(case1===case2 && case2===case3){
                whowins(case1);
                return true;
            }
            
        }
    }
    if(boxes[0].innerText != "" && boxes[1].innerText != "" && boxes[2].innerText != "" && boxes[3].innerText != "" && boxes[4].innerText != "" && boxes[5].innerText != "" && boxes[6].innerText != "" && boxes[7].innerText != "" && boxes[8].innerText != ""){
    draw();
}
    return false;
}
if(boxes[0].innerText != "" && boxes[1].innerText != "" && boxes[2].innerText != "" && boxes[3].innerText != "" && boxes[4].innerText != "" && boxes[5].innerText != "" && boxes[6].innerText != "" && boxes[7].innerText != "" && boxes[8].innerText != ""){
    draw();
}

let Restart = document.querySelector('#restartButton');
Restart.addEventListener("click", () =>{
    boxes.forEach((box) =>
    box.innerText = "")
})


let undo = document.querySelector("#undoButton");
undo.addEventListener('click', ()=>{
    l[0].innerText = "";
    l.shift(l[0]);
    if (turnX){
        turnX=false;
    }else{
        turnX=true;
    }
})