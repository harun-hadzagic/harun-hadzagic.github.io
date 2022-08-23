const quizData= [
    {
        question: `What is the capital of Bosnia and Herzegovina?`,
        a: `Banja Luka`,
        b: `Sarajevo`,
        c: `Mostar`,
        d: `Neum`,
        correct: `b`
    },
    {
        question: `What is the capital of Serbia?`,
        a: `Novi Sad`,
        b: `Prijepolje`,
        c: `Subotica`,
        d: `Beograd`,
        correct: `d`
    },
    {
        question: `What is the capital of Croatia?`,
        a: `Zagreb`,
        b: `Dubrovnik`,
        c: `Split`,
        d: `Pula`,
        correct: `a`
    },
    {
        question: `What is the capital of Montenegro?`,
        a: `Budva`,
        b: `Kotor`,
        c: `Podgorica`,
        d: `Ulcinj`,
        correct: `c`
    },
    {
        question: `What is the capital of Albania?`,
        a: `Durres`,
        b: `Vlore`,
        c: `Berat`,
        d: `Tirana`,
        correct: `d`
    },   
]

let currentQuiz = 0;
let score = 0;

const quiz = document.getElementById(`quiz`)
const questionEl = document.getElementById(`question`);
const a_text = document.getElementById(`a_text`);
const b_text = document.getElementById(`b_text`);
const c_text = document.getElementById(`c_text`);
const d_text = document.getElementById(`d_text`);
const submitBtn = document.getElementById(`button`)
const answerEl = document.querySelectorAll(`.answer`)

loadQuiz();

function loadQuiz() {
    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    console.log(`hi`)

    let answer = undefined;

    answerEl.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswer(){
    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener(`click`, () => {
    const answer = getSelected();
console.log (answer)
    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score ++;
        }

    currentQuiz++;
    if(currentQuiz< quizData.length){
        loadQuiz();
    } else{
        quiz.innerHTML = `<h2> You got ${score} out of 5 cities correct!</h2> <button onclick="location.reload()"> Reload </button>`
    }

    }
});