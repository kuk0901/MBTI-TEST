import { questions } from "./data.js";

const progressValueEl = document.querySelector(".progress .value");
const numberEl = document.querySelector(".number");
const questionEl = document.querySelector(".question");
const choice1El = document.querySelector(".choice1");
const choice2El = document.querySelector(".choice2");

let currentNumber = 0;
let mbti = "";

// 화면에 질문 출력
function renderQuestion() {
  const question = questions[currentNumber];
  numberEl.innerHTML = question.number;
  questionEl.innerHTML = question.question;
  choice1El.innerHTML = question.choices[0].text;
  choice2El.innerHTML = question.choices[1].text;
  progressValueEl.style.width = (currentNumber + 1) * 10 + "%";
}

// 답변 클릭시 호출될 함수
function nextQuestion(choiceNumber) {
  if (currentNumber === questions.length - 1) {
    showResultPage();
    return;
  }
  const question = questions[currentNumber];
  mbti += question.choices[choiceNumber].value;
  // mbti = '' + 'E' | 'I' ...
  currentNumber += 1;
  renderQuestion();
}
// 결과 페이지로 이동
function showResultPage() {
  location.href = `/results.html?mbti=${mbti}`; // 쿼리스트링
}

choice1El.addEventListener("click", () => {
  nextQuestion(0);
});
choice2El.addEventListener("click", () => {
  nextQuestion(1);
});

renderQuestion();
