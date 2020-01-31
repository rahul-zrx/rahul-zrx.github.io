const logo = document.getElementById('logo');

const block = document.getElementById('block');
const questionDiv = document.getElementById('question');
const questionContainer = document.getElementById('questionContainer');
const questionImageContainer = document.getElementById('questionImageContainer');
const questionImage = document.getElementById('questionImage');
const placeholderImage = document.getElementById('placeholderImage');

const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const resetBtn = document.getElementById('resetBtn');

let questionSelected = '';
let questionImgURL = '';

const questions = [
  'Which perk in ZRX did you misuse the most?',
  'The zombie apocalypse is coming, who are three ZRXers you want on your team?',
  "What's your most embarrassing story at ZRX?",
  "What's the weirdest conversation you had with your manager?",
  "What's the funniest incident you witnessed at ZRX?",
  // 'Who scares you the most at ZRX? Why?',
  "What's your crazy ZRX confession?",
  'Who is the craziest person you know at ZRX? Why?',
  'What superpower do you think every ZRXer should have?',
  // 'If you are given an opportunity to remake one movie, what movie will you prefer and who, from ZRX, will be the cast?',
  'Imitate a person from ZRX!',
  'Imitate the following sounds: Lion, Wolf, Witch!',
  'If you had 25 hours a day, how would you use your extra time?',
  'Have you ever come to work without taking a shower and somebody noticed?',
  // 'Who is the laziest person you knpw at work? Why?',
  'Dance along with this performance!'
];

const imgDir = 'assets/images/questionImages/';
const imgURLs = [
  '1.jpeg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  // '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.png',
  // '10.jpg',
  '11.jpg',
  '12.jpg',
  '13.jpg',
  '14.jpg',
  // '15.jpg',
  '16.gif'
];

const questionsLength = questions.length;

if (parseInt(window.localStorage.getItem('questions_done')) == questionsLength) {
  window.localStorage.clear();
}

if (!window.localStorage.getItem('questions_done')) {
  window.localStorage.setItem('questions_done', '0');
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getQuestion() {
  while (true) {
    let question = Math.floor(Math.random() * questionsLength);
    if (!window.localStorage.getItem(questions[question])) {
      window.localStorage.setItem(questions[question], '1');

      if (!window.localStorage.getItem('questions_done')) {
        window.localStorage.setItem('questions_done', '1');
      } else {
        window.localStorage.setItem(
          'questions_done',
          (parseInt(window.localStorage.getItem('questions_done')) + 1).toString()
        );
      }
      return question;
    }
  }
}

function getPersonQuestion() {
  if (parseInt(window.localStorage.getItem('questions_done')) >= questionsLength) {
    return 'No more questions left!';
  }

  const q = getQuestion();
  questionSelected = questions[q];
  questionImgURL = imgURLs[q];
  return 1;
}

function selectPerson() {
  questionSelected = '';
  let stat = getPersonQuestion();
  if (stat != 1) {
    window.localStorage.clear();
    questionDiv.innerHTML = '';
    block.style.setProperty('display', 'none');
    startBtn.style.setProperty('display', 'none');
    restartBtn.style.setProperty('display', 'none');
    resetBtn.style.setProperty('display', 'initial');
    console.log('error');
    return -1;
  }
  return 1;
}

startBtn.addEventListener('click', () => {
  let stat = selectPerson();

  if (stat == 1) {
    block.style.setProperty('display', 'block');
    questionRandomize();
    questionDiv.innerHTML = questionSelected;
    questionImage.src = imgDir + questionImgURL;
  } else {
    console.log('ERROR!!');
  }
});

restartBtn.addEventListener('click', () => {
  questionDiv.innerHTML = '';
  block.style.setProperty('display', 'none');
  restartBtn.style.setProperty('display', 'none');
  startBtn.style.setProperty('display', 'initial');
});

resetBtn.addEventListener('click', () => {
  resetBtn.style.setProperty('display', 'none');
  startBtn.style.setProperty('display', 'initial');
});

async function questionRandomize() {
  startBtn.style.setProperty('visibility', 'hidden');
  questionImageContainer.style.setProperty('display', 'none');
  placeholderImage.style.setProperty('display', 'block');
  const ran = Math.floor(Math.random() * 20) + 5;
  for (let i = 0; i < ran; i++) {
    let question = Math.floor(Math.random() * questionsLength);
    questionDiv.innerHTML = questions[question];
    await sleep(70);
  }
  startBtn.style.setProperty('visibility', 'initial');
  questionImageContainer.style.setProperty('display', 'block');
  placeholderImage.style.setProperty('display', 'none');
  questionDiv.innerHTML = questionSelected;
}

logo.addEventListener('dblclick', () => {
  document.body.classList.toggle('darkMode');
  placeholderImage.classList.toggle('inverted');
  document.getElementById('loaderClassElement').classList.toggle('inverted');
});
