const quizData = [{
    question: 'How old is Saifur Islam Nirob?',
    a: '20 Age',
    b: '25 Age',
    c: '27 Age',
    d: '32 Age',
    correct: 'c',
}, {
    question: 'What is the most use programming language in 2020?',
    a: 'Python',
    b: 'Java',
    c: 'C++',
    d: 'JavaScript',
    correct: 'c',
}, {
    question: 'Who is the Prime Minister of Bangladesh?',
    a: 'Jinius Ahmed',
    b: 'Khaleda Zia',
    c: 'Saifur Islam Nirob',
    d: 'Sheikh Hasina',
    correct: 'd',
}, {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'Jason Object Notation',
    d: 'Application Programming Interface',
    correct: 'a',
}, {
    question: 'What years was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '2001',
    d: 'none of the avobe',
    correct: 'b',
}];

const quiz = document.getElementById('quiz');
const answerEl = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');


const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
let answer = undefined;

loadQuiz();

function loadQuiz() {
    deselecteAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {

    let answer = undefined;

    answerEl.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselecteAnswers() {

    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    });
}




submitBtn.addEventListener('click', () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {

            quiz.innerHTML = `
            <h2>You answer correctly at ${score}/${quizData.length} question</h2> 
            <button onclick="location.reload()">Reload</button>

            `;
        }
    }
});
