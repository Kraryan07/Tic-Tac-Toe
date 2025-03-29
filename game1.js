let btn=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgamebtn=document.querySelector("#btn2");
let msgcont=document.querySelector(".winner");
let winmsg=document.querySelector("#msg");
let player1=true;

const arr=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];



let cnt=0;
btn.forEach((box) => {
    box.addEventListener("click",()=>{
        if(player1){
           box.innerText="x";
            player1=false;
        }else{
            box.innerText="o";
            player1=true;
        }
        box.disabled="true";
       
        let out=winpatt();
        cnt++;
       if(cnt===9 && !out){
         showdraw();
       }
    });
});
const res=()=>{
    player1=true;
   enableboxes();
   msgcont.classList.add("hide");
   cnt=0;
}
const disableboxes=()=>{
    for(let box of btn){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of btn){
        box.disabled=false;
        box.innerText="";
    }
}
const showdraw=()=>{
    winmsg.innerText="match is drawn";
    msgcont.classList.remove("hide");
    disableboxes();
}
const showwinner=(winner)=>{
    winmsg.innerText=`congrats, winner is ${winner}`;
    msgcont.classList.remove("hide");
    disableboxes();
}
const winpatt=()=>{
    for(patt of arr){
    
    let pos1=btn[patt[0]].innerText;
    let pos2=btn[patt[1]].innerText;
    let pos3=btn[patt[2]].innerText;

    if(pos1!=""&&pos2!=""&&pos3!=""){
        if(pos1===pos2&&pos2===pos3){
            // console.log(pos1," you won");
            showwinner(pos1);
            return true;
        }
    }
    }
}
newgamebtn.addEventListener("click",res);
reset.addEventListener("click",res);
