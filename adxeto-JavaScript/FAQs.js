const downSideArrowOneEl = document.querySelector('.d-arrow-one');
const downSideArrowTwoEl = document.querySelector('.d-arrow-two');
const downSideArrowThreeEl = document.querySelector('.d-arrow-three');
const downSideArrowFourEl = document.querySelector('.d-arrow-four');
const downSideArrowFiveEl = document.querySelector('.d-arrow-five');
const downSideArrowSixEl = document.querySelector('.d-arrow-six');


const upSideArrowOneEl = document.querySelector('.u-arrow-one');
console.dir(upSideArrowOneEl);
const upSideArrowTwoEl = document.querySelector('.u-arrow-two');
const upSideArrowThreeEl = document.querySelector('.u-arrow-three');
const upSideArrowFourEl = document.querySelector('.u-arrow-four');
const upSideArrowFiveEl = document.querySelector('.u-arrow-five');
const upSideArrowSixEl = document.querySelector('.u-arrow-six');


function openAnswerText(event) {
  const answerParagraph = event.target.parentElement.nextElementSibling;
  answerParagraph.style.display = 'block';
  event.target.style.display = 'none';
  event.target.nextElementSibling.style.display = 'block';
}

function closeAnswerText(event) {
  const answerParagraph = event.target.parentElement.nextElementSibling;
  answerParagraph.style.display = 'none'
  event.target.style.display = 'none';
  event.target.parentElement.children[1].style.display = 'block';
}

downSideArrowOneEl.addEventListener('click', openAnswerText);
downSideArrowTwoEl.addEventListener('click', openAnswerText);
downSideArrowThreeEl.addEventListener('click', openAnswerText);
downSideArrowFourEl.addEventListener('click', openAnswerText);
downSideArrowFiveEl.addEventListener('click', openAnswerText);
downSideArrowSixEl.addEventListener('click', openAnswerText);


upSideArrowOneEl.addEventListener('click', closeAnswerText);
upSideArrowTwoEl.addEventListener('click', closeAnswerText);
upSideArrowThreeEl.addEventListener('click', closeAnswerText);
upSideArrowFourEl.addEventListener('click', closeAnswerText);
upSideArrowFiveEl.addEventListener('click', closeAnswerText);
upSideArrowSixEl.addEventListener('click', closeAnswerText);