const boxes=document.querySelectorAll('.box');

let n=0;
let ans=false;

function check(box){
   if(ans==false){
        //row check
    for(let j=0;j<9;j+=3){
        if(box[j].innerHTML==box[j+1].innerHTML
            &&box[j+1].innerHTML==box[j+2].innerHTML
            &&box[j].innerHTML!=""){
            ans=true;
        }
    }
    }
    if(ans==false){
        //coloumn check
        for(let j=0;j<3;j++){
            if(box[j].innerHTML==box[j+3].innerHTML
                &&box[j+3].innerHTML==box[j+6].innerHTML
                &&box[j].innerHTML!=""){
                ans=true;
            }
        } 
    }
    if(ans==false){
        //corner check
        if(box[0].innerHTML==box[4].innerHTML
            &&box[0].innerHTML==box[8].innerHTML&&
            box[0].innerHTML!=""){
            ans=true;
        }
        else if(box[2].innerHTML==box[4].innerHTML
            &&box[2].innerHTML==box[6].innerHTML
            &&box[2].innerHTML!=""){
            ans=true;
        } 
    }

    if(ans==true){
        for(let j=0;j<box.length;j++){
            box[j].disabled=true;
            box[j].style.boxShadow='none';
        }
        alert("Game Over");
    }
    if(n==9){
        alert("Draw");
    }
}


for(let i=0;i<boxes.length;i++){
    boxes[i].addEventListener("click",()=>{
        if(boxes[i].innerHTML==""){
            if(n%2==0){
                boxes[i].innerHTML='X';
            }
            else{
                boxes[i].innerHTML='O';
            }
            n++;
            if(n>4){
                //set delay
                setTimeout(()=>{
                    check(boxes);
                },0);
            }
        }
        else{
            alert("Alredy used");
        }
    })
}