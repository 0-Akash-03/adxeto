const downArrowEl = document.querySelector('.down-arrow');
const upArrowEl = document.querySelector('.hide-up-arrow');
const clientDataLinebreakEl = document.querySelector('.client-data-linebreak');
const clientDetailsEl = document.querySelector('.flex-client-detail');

function openClientDetails() {
  clientDataLinebreakEl.style.display = 'block';
  clientDetailsEl.style.display = 'flex';
  downArrowEl.style.display = 'none';
  upArrowEl.style.display = 'block';
}

function closeClientDetails() {
  clientDataLinebreakEl.style.display = 'none';
  clientDetailsEl.style.display = 'none';
  upArrowEl.style.display = 'none';
  downArrowEl.style.display = 'block';
}

downArrowEl.addEventListener('click', openClientDetails);
upArrowEl.addEventListener('click', closeClientDetails);


// DirectIQ

const downArrowDirectEl = document.querySelector('.down-arrow-direct');
const upArrowDirectEl = document.querySelector('.up-arrow-direct');
const dataLinebreakDirect = document.querySelector('.linebreak-direct');
const clientDetailDirect = document.querySelector('.client-detail-direct');

function openDirectClientDetails () {
  dataLinebreakDirect.style.display = 'block';
  clientDetailDirect.style.display = 'flex';
  downArrowDirectEl.style.display = 'none';
  upArrowDirectEl.style.display = 'block';
}

function closeDirectClientDetails() {
  dataLinebreakDirect.style.display = 'none';
  clientDetailDirect.style.display = 'none';
  upArrowDirectEl.style.display = 'none';
  downArrowDirectEl.style.display = 'block';
}

downArrowDirectEl.addEventListener('click', openDirectClientDetails); 
upArrowDirectEl.addEventListener('click', closeDirectClientDetails);