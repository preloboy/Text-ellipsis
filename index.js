// Import stylesheets
import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

const input = document.querySelector('#input')
const output = document.querySelector('#output')

input.addEventListener('input', (event) => {output.textContent = event.currentTarget.value.substring(0,12) + '...'})