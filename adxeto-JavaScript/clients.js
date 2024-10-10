const openDivEl = document.getElementById('open-div');
const defaultDivEl = document.getElementById('default-div');
const closeDivEl = document.querySelector('.close-div');

function openOpenDiv() {
  openDivEl.style.display = "block";
  defaultDivEl.style.display = "none";
}

function closeOpenDiv() {
  openDivEl.style.display = "none";
  defaultDivEl.style.display = "block";
}

defaultDivEl.addEventListener('click', openOpenDiv);
closeDivEl.addEventListener('click', closeOpenDiv);


// DirectIQ

const openDivDirectIQEl = document.getElementById('open-div-directiq');
const defaultDivDirectIQEl = document.getElementById('default-div-directiq');
const closeDivDirectIQEl = document.querySelector('.close-div-directiq');

function openOpenDirectIQDiv() {
  openDivDirectIQEl.style.display = "block";
  defaultDivDirectIQEl.style.display = "none";
}

function closeOpenDirectIQDiv() {
  openDivDirectIQEl.style.display = "none";
  defaultDivDirectIQEl.style.display = "block";
}

defaultDivDirectIQEl.addEventListener('click', openOpenDirectIQDiv);
closeDivDirectIQEl.addEventListener('click', closeOpenDirectIQDiv);