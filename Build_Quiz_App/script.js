const questions =[
    {
        question: "What is the correct way to declare a variable in JavaScript?",
        answers:[
            {text: "var x = 5;", correct:false},
            {text: "let x = 5;;", correct:false},
            {text: "const x = 5;", correct:false},
            {text: "All of the above;", correct:true}
        ]
    },
    {
        question:"What does the "=== " operator do in JavaScript?",
        answers:[
            {text:"Checks for equality and type",correct:true},
            {text:"Checks for equality only",correct:false},
            {text:"Checks for type only",correct:false},
            {text:"None of the above",correct:false}
        ]

    },
    {
        question: "Which of the following is the correct syntax for a for loop in JavaScript?",
        answers:[
            {text:"for i = 0; i < 5; i++",correct:false},
            {text:"for (var i = 0; i < 5; i++)",correct:true},
            {text:"loop (i = 0; i < 5; i++)",correct:false},
            {text:"repeat (i = 0; i < 5; i++);",correct:false}
        ]
    },
    {
        question: "How do you comment out multiple lines in JavaScript?",
        answers:[
            {text:"// comment //",correct:false},
            {text:"/* comment */",correct:true},
            {text:"<-- comment -->",correct:false},
            {text:"-- comment --",correct:false}
        ] 
    }
];

const questionElement=document.getElementById("question");
const answerButtton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuize(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button =document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtton.appendChild(button);
        if(answer.correct) {
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtton.firstChild){
        answerButtton.removeChild(answerButtton.firstChild);
    }
}

function selectAnswer(e){
    const selectbtn=e.target;
    const iscorrect = selectbtn.dataset.correct === "true";
    if (iscorrect) {
        selectbtn.classList.add("correct");
        score++;
    }
    else {
        selectbtn.classList.add("incorrect");
    }
    Array.from(answerButtton.children).forEach(button =>{
        if(button.dataset.correct==="true") {
            button.classList.add("correct")
        } 
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex<questions.length) {
        showQuestion();
    }else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML=` You scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuize();
    }
})
startQuize();