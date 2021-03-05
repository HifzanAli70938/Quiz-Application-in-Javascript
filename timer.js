let seconds=0;
let minutes=0;
setInterval(function(){
    if(seconds<59){
        seconds++;
    }
    else{
        minutes++;
        seconds=0
    };
  let userSeconds= seconds<10 ? `0${seconds}` : `${seconds}`
  let userMinutes= minutes<10 ? `0${minutes}` : `${minutes}`

  
    document.querySelector(".timer").innerHTML=`${userMinutes} : ${userSeconds}`
},1000)
