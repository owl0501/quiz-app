const quizData = [
    {
        question: 'What year is this?'
        , a: '2021'
        , b: '2022'
        , c: '2023'
        , d: '2024'
        , answer: 'a'
    }
    , {
        question: 'How long a day is?'
        , a: '12'
        , b: '8'
        , c: '24'
        , d: '48'
        , answer: 'c'
    }
    , {
        question: 'What is the first human in the world?'
        , a: 'John'
        , b: 'Adan'
        , c: 'Eve'
        , d: 'Jesus'
        , answer: 'b'
    }
    , {
        question: 'What is the most used programming language?'
        , a: 'java'
        , b: 'C'
        , c: 'paython'
        , d: 'javascript'
        , answer: 'd'
    }
];

const question = document.querySelector('#question');
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const submit = document.querySelector('#submit');
let currrentQuiz = 0;
let correct = 0;

loadQuiz();

function loadQuiz() {
    const currrentQuizData = quizData[currrentQuiz];

    question.innerHTML = currrentQuizData.question;
    a_text.innerHTML = currrentQuizData.a;
    b_text.innerHTML = currrentQuizData.b;
    c_text.innerHTML = currrentQuizData.c;
    d_text.innerHTML = currrentQuizData.d;
    return currrentQuizData;
}

submit.addEventListener('click', function () {
    nextQuiz();
});

function nextQuiz() {
    recordCorrect();
    currrentQuiz++;
    if (currrentQuiz < quizData.length) {
        loadQuiz();
    }
    else {
        //TODO: show results
        setResultUI();
    }

}

function getSelectedAnswer() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let answer = undefined;
    answers.forEach(function (item) {
        if (item.checked) {
            answer = item.id;
        }
    });
    return answer;
}

function recordCorrect() {
    const myAnswer = getSelectedAnswer();
    console.log(myAnswer);
    if ((currrentQuiz < quizData.length) && myAnswer === quizData[currrentQuiz].answer) {
        correct++;
    }
}
function setResultUI() {
    const wrap=document.querySelector('.wrap');
    wrap.innerHTML='';
    let strRes = `You finish!Your acurracy: ${correct}/${quizData.length}.`;
    const result_text=document.createElement('h2');
    result_text.className='result';
    result_text.innerHTML = strRes;
    const btnReload=document.createElement('button');
    btnReload.innerText='Relaod';
    btnReload.addEventListener('click',function(){
        location.reload();
    });
    wrap.appendChild(result_text);
    wrap.appendChild(btnReload);
}