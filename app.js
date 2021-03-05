
let questions=[
  { id:1,
    question:"Which city is the capital of Pakistan ?",
    Answer:"Islamabad",
    options:[
        "Karachi",
        "lahore",
        "Islamabad",
        "Peshawar"
    ]
  },
  { id:2,
    question:"Who beccome the Priminister of Pakistan in 2013 Election?",
    Answer:"Nawaz Shareef",
    options:[
        "Yousuf Raza Gillani",
        "Imran Khan",
        "Nawaz Shareef",
        "Rajja Ashraf"
    ]
  },
  { id:2,
    question:"Who won the ICC Cricket world cup of 1992?",
    Answer:"Pakistan",
    options:[
        "Pakistan",
        "India",
        "Australia",
        "New zealand"
    ]
  }
]
function submitform(e){
    e.preventDefault();
    let input=document.getElementById("inputval").value;
   
    sessionStorage.setItem("inputval",input);
    // console.log(input.value);
   location.href="quiz.html";
}

function showQuestion(e){
let question1=document.getElementById("question1");
question1.innerHTML=questions[e].question
let option=document.getElementsByClassName("option");
for(let i=0;i<option.length;i++){
option[i].innerHTML=questions[e].options[i]
}
}

showQuestion(0)
let count=0;
function nextBtn(){
count++;

if(count==questions.length){
  location.href="end.html"
}
showAns();
showQuestion(count);
removeClassList();
}
function addClassList(e){
  removeClassList()
e.classList.add("active");
}
function removeClassList(){
  let active=document.getElementsByClassName("active");
  for(let i=0;i<active.length;i++){
    active[i].classList.remove("active");
  }
}
let score=0;
function showAns(){
  let active=document.querySelector("li.option.active").innerHTML;
  for(var count=0;count<questions.length;count++)
  if(active==questions[count].Answer){
    score+=1;
    // console.log(score);
    sessionStorage.setItem("score",score)
  }
}

