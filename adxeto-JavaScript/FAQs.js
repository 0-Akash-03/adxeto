const defaultFirstUlEl = document.querySelector('.default-first-ul');
const defaultSecondUlEl = document.querySelector('.default-second-ul');
const defaultThirdUlEl = document.querySelector('.default-third-ul');
const defaultFourthUlEl = document.querySelector('.default-fourth-ul');
const defaultFifthUlEl = document.querySelector('.default-fifth-ul');
const defaultSixthUlEl = document.querySelector('.default-sixth-ul');

const openFirstUlEl = document.querySelector('.open-first-ul');
const openSecondUlEl = document.querySelector('.open-second-ul');
const openThirdUlEl = document.querySelector('.open-third-ul');
const openFourthUlEl = document.querySelector('.open-fourth-ul');
const openFifthUlEl = document.querySelector('.open-fifth-ul');
const openSixthUlEl = document.querySelector('.open-sixth-ul');

const closeFirstUlEl = document.querySelector('.close-first-ul');
const closeSecondUlEl = document.querySelector('.close-second-ul');
const closeThirdUlEl = document.querySelector('.close-third-ul');
const closeFourthUlEl = document.querySelector('.close-fourth-ul');
const closeFifthUlEl = document.querySelector('.close-fifth-ul');
const closeSixthUlEl = document.querySelector('.close-sixth-ul');

function openFirstAnswer() {
  defaultFirstUlEl.style.display = 'none';
  openFirstUlEl.style.display = 'block';
}

function openSecondAnswer() {
  defaultSecondUlEl.style.display = 'none';
  openSecondUlEl.style.display = 'block';
}

function openThirdAnswer() {
  defaultThirdUlEl.style.display = 'none';
  openThirdUlEl.style.display = 'block';
}

function openFourthAnswer() {
  defaultFourthUlEl.style.display = 'none';
  openFourthUlEl.style.display = 'block';
}

function openFifthAnswer() {
  defaultFifthUlEl.style.display = 'none';
  openFifthUlEl.style.display = 'block';
}

function openSixthAnswer() {
  defaultSixthUlEl.style.display = 'none';
  openSixthUlEl.style.display = 'block';
}


function closeFirstAnswer() {
  defaultFirstUlEl.style.display = 'block';
  openFirstUlEl.style.display = 'none';
}

function closeSecondAnswer() {
  defaultSecondUlEl.style.display = 'block';
  openSecondUlEl.style.display = 'none';
}

function closeThirdAnswer() {
  defaultThirdUlEl.style.display = 'block';
  openThirdUlEl.style.display = 'none';
}

function closeFourthAnswer() {
  defaultFourthUlEl.style.display = 'block';
  openFourthUlEl.style.display = 'none';
}

function closeFifthAnswer() {
  defaultFifthUlEl.style.display = 'block';
  openFifthUlEl.style.display = 'none';
}

function closeSixthAnswer() {
  defaultSixthUlEl.style.display = 'block';
  openSixthUlEl.style.display = 'none';
}

defaultFirstUlEl.addEventListener('click', openFirstAnswer);
defaultSecondUlEl.addEventListener('click', openSecondAnswer);
defaultThirdUlEl.addEventListener('click', openThirdAnswer);
defaultFourthUlEl.addEventListener('click', openFourthAnswer);
defaultFifthUlEl.addEventListener('click', openFifthAnswer);
defaultSixthUlEl.addEventListener('click', openSixthAnswer);

closeFirstUlEl.addEventListener('click', closeFirstAnswer);
closeSecondUlEl.addEventListener('click', closeSecondAnswer);
closeThirdUlEl.addEventListener('click', closeThirdAnswer);
closeFourthUlEl.addEventListener('click', closeFourthAnswer);
closeFifthUlEl.addEventListener('click', closeFifthAnswer);
closeSixthUlEl.addEventListener('click', closeSixthAnswer);