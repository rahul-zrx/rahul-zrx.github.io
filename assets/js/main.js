let personDiv = document.getElementById('person');
let personContainer = document.getElementById('personContainer');

let questionDiv = document.getElementById('question');
let questionContainer = document.getElementById('questionContainer');

let startBtn = document.getElementById('startBtn');
let questionBtn = document.getElementById('questionBtn');
let restartBtn = document.getElementById('restartBtn');
let resetBtn = document.getElementById('resetBtn');

let personSelected = '';
let questionSelected = '';

const persons = [
  'Rahul Singh',
  'Kumar Janmejay',
  'Mohit Kumar',
  'Palak',
  'Sunny',
  'Akshay',
  'Sushmita',
  'Prateek',
  'Ratul',
  'Tamil',
  'Siva',
  'Vivek',
  'Sunayana'
];

const questions = [
  'What’s the greatest bit of advice a parent or mentor has given you?',
  'What technology innovation made the most impact on your life?',
  'Describe a challenging situation you’ve been in and tell how you resolved it?',
  'How would you spend one million dollars?',
  'Who is your hero, and why?',
  'Tell us your earliest childhood memory.',
  'Who was your favorite teacher in school and how did s/he impact you?',
  'If you could choose an age to remain forever, which age would you choose?',
  'What is one important skill every person should have?',
  'What is your favorite sport to watch?',
  'If you had one free hour each day, how would you use it?',
  'What was the best thing that happened to you this weekend? This month? This year?',
  'If you could go anywhere in the world on vacation, where would you go?',
  'How would your friends describe you?',
  'What would be the ultimate gift for you to receive?',
  'If you could live anywhere in the world, where would it be?',
  'Would you rather be invisible or be able to read minds?',
  'If you had a time machine, what point in the past or future would you visit?',
  'Name two things you consider yourself to be very good at.',
  'If you could live in any period of history, when would it be?',
  'What is the best perk that you have had at a job?',
  'Describe one experience you’ve had where you took a huge leap of faith.',
  'What is the best vacation you’ve ever had?',
  'Where in the world have you been that you thought was paradise?',
  'What is the meaning of your name?',
  'If you could host a talk show, who would be your first guest?',
  'What is one word that you would use to describe your team?',
  'Share a personal fact no one would ever guess about you.',
  'What is the most important personal attribute that you bring to your job?',
  'What is one thing you admire most about the person to the right of you?',
  'What would you like to be known for?',
  'What fictional place would you like to visit?',
  'Share a funny incident in your life.',
  'What is your favorite outdoor activity?',
  'Who would you like to exchange roles with?',
  'What is one of the things on your bucket list?',
  'Describe yourself in 3 words.',
  'What do you enjoy doing to relieve stress?',
  'If you were famous, what would you be famous for?',
  'What do you think you will be doing 20 years from now?',
  'If you didn’t need a job, were healthy, and had plenty of time, what would you do?',
  'What do you consider your greatest achievement?',
  'What is a recent book that you have enjoyed? Why?',
  'What would you do with your “15 minutes” of fame?',
  'Over the course of your life, how many cities have you lived in and which was your favorite?',
  'What was going on during the happiest time of your life?',
  'If you could only take one physical item with you on a deserted island, what it would be?',
  'What’s one sentence you’d like to hear from your boss?',
  'If you could have a dinner with someone who is alive or dead, who would it be and why?',
  'What are you going to do when you retire?',
  'If you could hang out with any cartoon character, who would you choose and why?',
  'If you could add a word to the dictionary what would you add and what would it mean?',
  'What clothing item would make you walk out on a date if someone wore it?',
  'The zombie apocalypse is coming, who are three people you want on your team?',
  'If you could choose your age forever, what age would you choose and why?',
  'If you were to change your name, what name would you change to and why?',
  'If you could meet any living person for dinner, who would you pick and why?',
  'What is your most used emoji?',
  'Would you rather have invisibility or flight?',
  'Would you rather live where it only snows or the temperature never falls below 100 degrees?',
  'Cats or dogs?',
  'Teleportation or flying?',
  'Would you rather be invisible or be able to read minds?',
  'If you could be an animal, what animal would you be and why?',
  'If you could bring back any fashion trend what would it be?',
  'What’s your best scary story?',
  'If you had 25 hours a day, how would you use your extra time?',
  'If you could commit any crime and get away with it what would you choose and why?',
  'How would you spend a million dollars? How about a billion?',
  'If you could be any supernatural creature, what would you be and why?',
  'If you could change places with anyone in the world, who would it be and why?',
  'If you could kill any fashion trend forever what would it be?',
  'If you had to delete all but three apps from your smartphone, which ones would you keep?',
  'What skill do you think everyone should have?',
  'Share a confession',
  'Activity: Dance',
  'Activity: Roast'
];

// const questions = [
//   'Corporis nisi perspiciatis corporis tenetur. Facilis maxime molestiae tenetur in veritatis. Veniam nesciunt optio magnam rerum qui qui tempore. Molestiae et perspiciatis molestiae facere optio voluptatem. Est harum repellendus voluptatem ut assumenda. Et excepturi tenetur placeat aut qui minima odio voluptas. Iure in minus sit assumenda vitae eligendi optio rerum. Eaque saepe ut eius quisquam nemo eaque aliquam. Sunt quidem neque consectetur molestiae vel. Sed modi atque veniam. Id inventore aut similique magni velit et distinctio. Aut itaque culpa fugit dolores commodi. Impedit reiciendis delectus molestiae accusamus quo id voluptas iusto vel. Vel voluptas sed doloremque aut eos. Ea tempore aut nobis.Expedita et ut pariatur quo ipsam. Nam quae nobis. Perferendis voluptatem et quae dolorum aut itaque itaque. Earum omnis officia laudantium recusandae quia nesciunt et tenetur dolorem. Rerum eum ut vero aut autem non velit est.'
// ];

const personsLength = persons.length;
const questionsLength = questions.length;

if (
  parseInt(window.localStorage.getItem('persons_done')) == personsLength ||
  parseInt(window.localStorage.getItem('questions_done')) == questionsLength
) {
  window.localStorage.clear();
}

if (!window.localStorage.getItem('persons_done')) {
  window.localStorage.setItem('persons_done', '0');
}

if (!window.localStorage.getItem('questions_done')) {
  window.localStorage.setItem('questions_done', '0');
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getPerson() {
  while (true) {
    let person = Math.floor(Math.random() * personsLength);
    if (!window.localStorage.getItem(persons[person])) {
      window.localStorage.setItem(persons[person], '1');

      if (!window.localStorage.getItem('persons_done')) {
        window.localStorage.setItem('persons_done', '1');
      } else {
        window.localStorage.setItem(
          'persons_done',
          (parseInt(window.localStorage.getItem('persons_done')) + 1).toString()
        );
      }
      return person;
    }
  }
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
  if (parseInt(window.localStorage.getItem('persons_done')) == personsLength) {
    return 'No more ZoomRx-ers left';
  }

  if (parseInt(window.localStorage.getItem('questions_done')) == questionsLength) {
    return 'No more questions left!';
  }

  const p = getPerson();
  const q = getQuestion();
  personSelected = persons[p];
  questionSelected = questions[q];
  return 1;
}

function selectPerson() {
  personSelected = '';
  questionSelected = '';
  let stat = getPersonQuestion();
  if (stat != 1) {
    window.localStorage.clear();
    personDiv.innerHTML = '';
    questionDiv.innerHTML = '';
    personContainer.style.setProperty('display', 'none');
    questionContainer.style.setProperty('display', 'none');
    startBtn.style.setProperty('display', 'none');
    questionBtn.style.setProperty('display', 'none');
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
    personContainer.style.setProperty('display', 'block');
    personRandomize();
    personDiv.innerHTML = personSelected;
    startBtn.style.setProperty('display', 'none');
    questionBtn.style.setProperty('display', 'initial');
  }
});

questionBtn.addEventListener('click', () => {
  questionContainer.style.setProperty('display', 'block');
  questionRandomize();
  questionDiv.innerHTML = questionSelected;
  questionBtn.style.setProperty('display', 'none');
  restartBtn.style.setProperty('display', 'initial');
});

restartBtn.addEventListener('click', () => {
  personDiv.innerHTML = '';
  questionDiv.innerHTML = '';
  personContainer.style.setProperty('display', 'none');
  questionContainer.style.setProperty('display', 'none');
  restartBtn.style.setProperty('display', 'none');
  startBtn.style.setProperty('display', 'initial');
});

resetBtn.addEventListener('click', () => {
  resetBtn.style.setProperty('display', 'none');
  startBtn.style.setProperty('display', 'initial');
});

async function personRandomize() {
  questionBtn.style.setProperty('visibility', 'hidden');
  const ran = Math.floor(Math.random() * 20) + 5;
  for (let i = 0; i < ran; i++) {
    let person = Math.floor(Math.random() * personsLength);
    personDiv.innerHTML = persons[person];
    await sleep(70);
  }
  questionBtn.style.setProperty('visibility', 'initial');
}

async function questionRandomize() {
  restartBtn.style.setProperty('visibility', 'hidden');
  const ran = Math.floor(Math.random() * 20) + 5;
  for (let i = 0; i < ran; i++) {
    let question = Math.floor(Math.random() * questionsLength);
    questionDiv.innerHTML = questions[question];
    await sleep(70);
  }
  restartBtn.style.setProperty('visibility', 'initial');
}
