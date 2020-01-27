let logo = document.getElementById('logo');

// let personDiv = document.getElementById('person');
// let personContainer = document.getElementById('personContainer');

let questionDiv = document.getElementById('question');
let questionContainer = document.getElementById('questionContainer');

let startBtn = document.getElementById('startBtn');
// let questionBtn = document.getElementById('questionBtn');
let restartBtn = document.getElementById('restartBtn');
let resetBtn = document.getElementById('resetBtn');

// let personSelected = '';
let questionSelected = '';

// const persons = [
//   'Rahul Singh',
//   'Kumar Janmejay',
//   'Mohit Kumar',
//   'Palak',
//   'Sunny',
//   'Akshay',
//   'Sushmita',
//   'Prateek',
//   'Ratul',
//   'Tamil',
//   'Siva',
//   'Vivek',
//   'Sunayana'
// ];

const questions = [
  'What is the perk at ZRX that you have misused the most?',
  'The zombie apocalypse is coming, who are three people you want on your team?',
  'What\'s your best ZRX scary story?',
  'What\'s your weirdest conversation with your manager?',
  'Funniest incident during your journey with ZRX?',
  'Whom are you most scared off at ZRX? Why?',
  'What\'s your crazy ZRX confession?',
  'Craziest person at work? Why?',
  ''
];

// const personsLength = persons.length;
const questionsLength = questions.length;

if (
  // parseInt(window.localStorage.getItem('persons_done')) == personsLength ||
  parseInt(window.localStorage.getItem('questions_done')) == questionsLength
) {
  window.localStorage.clear();
}

// if (!window.localStorage.getItem('persons_done')) {
//   window.localStorage.setItem('persons_done', '0');
// }

if (!window.localStorage.getItem('questions_done')) {
  window.localStorage.setItem('questions_done', '0');
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// function getPerson() {
//   while (true) {
//     let person = Math.floor(Math.random() * personsLength);
//     if (!window.localStorage.getItem(persons[person])) {
//       window.localStorage.setItem(persons[person], '1');

//       if (!window.localStorage.getItem('persons_done')) {
//         window.localStorage.setItem('persons_done', '1');
//       } else {
//         window.localStorage.setItem(
//           'persons_done',
//           (parseInt(window.localStorage.getItem('persons_done')) + 1).toString()
//         );
//       }
//       return person;
//     }
//   }
// }

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
  // if (parseInt(window.localStorage.getItem('persons_done')) >= personsLength) {
  //   return 'No more ZoomRx-ers left';
  // }

  if (parseInt(window.localStorage.getItem('questions_done')) >= questionsLength) {
    return 'No more questions left!';
  }

  // const p = getPerson();
  const q = getQuestion();
  // personSelected = persons[p];
  questionSelected = questions[q];
  return 1;
}

function selectPerson() {
  // personSelected = '';
  questionSelected = '';
  let stat = getPersonQuestion();
  if (stat != 1) {
    window.localStorage.clear();
    // personDiv.innerHTML = '';
    questionDiv.innerHTML = '';
    // personContainer.style.setProperty('display', 'none');
    questionContainer.style.setProperty('display', 'none');

    startBtn.style.setProperty('display', 'none');
    // questionBtn.style.setProperty('display', 'none');
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
    // personContainer.style.setProperty('display', 'block');
    // personRandomize();
    // personDiv.innerHTML = personSelected;
    // startBtn.style.setProperty('display', 'none');
    // questionBtn.style.setProperty('display', 'initial');
    questionContainer.style.setProperty('display', 'block');
    questionRandomize();
    questionDiv.innerHTML = questionSelected;
    // startBtn.style.setProperty('display', 'initial');
    // restartBtn.style.setProperty('display', 'initial');
  } else {
    console.log('ERROR!!');
  }
});

// questionBtn.addEventListener('click', () => {
//   questionContainer.style.setProperty('display', 'block');
//   questionRandomize();
//   questionDiv.innerHTML = questionSelected;
//   questionBtn.style.setProperty('display', 'none');
//   restartBtn.style.setProperty('display', 'initial');
// });

restartBtn.addEventListener('click', () => {
  // personDiv.innerHTML = '';
  questionDiv.innerHTML = '';
  // personContainer.style.setProperty('display', 'none');
  questionContainer.style.setProperty('display', 'none');
  restartBtn.style.setProperty('display', 'none');
  startBtn.style.setProperty('display', 'initial');
});

resetBtn.addEventListener('click', () => {
  resetBtn.style.setProperty('display', 'none');
  startBtn.style.setProperty('display', 'initial');
});

// async function personRandomize() {
//   questionBtn.style.setProperty('visibility', 'hidden');
//   const ran = Math.floor(Math.random() * 20) + 5;
//   for (let i = 0; i < ran; i++) {
//     let person = Math.floor(Math.random() * personsLength);
//     personDiv.innerHTML = persons[person];
//     await sleep(70);
//   }
//   questionBtn.style.setProperty('visibility', 'initial');
// }

async function questionRandomize() {
  // restartBtn.style.setProperty('visibility', 'hidden');
  startBtn.style.setProperty('visibility', 'hidden');
  const ran = Math.floor(Math.random() * 20) + 5;
  for (let i = 0; i < ran; i++) {
    let question = Math.floor(Math.random() * questionsLength);
    questionDiv.innerHTML = questions[question];
    await sleep(70);
  }
  // restartBtn.style.setProperty('visibility', 'initial');
  startBtn.style.setProperty('visibility', 'initial');
}

logo.addEventListener('dblclick', () => {
  document.body.classList.toggle('darkMode');
});
