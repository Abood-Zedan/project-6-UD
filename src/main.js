import { shuffle } from './shuffle.js';
import { renderArray } from './utilityRenderFunctions.js';

const btn = document.getElementById('shuffleBtn');
const outputEl = document.getElementById('output');
btn.addEventListener('click', () => {
  const arr = [1, 2, 3, 4, 5];
  shuffle(arr);
  outputEl.textContent = renderArray(arr);
});

const form = document.getElementById('createForm');
const setName = document.getElementById('setName');
const formError = document.getElementById('formError');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!setName.value.trim()) {
    formError.textContent = 'Set name cannot be empty';
  } else {
    formError.textContent = '';
    alert(`Saved set: ${setName.value}`);
    setName.value = '';
  }
});
