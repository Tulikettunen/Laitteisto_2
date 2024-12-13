//tehtävä 3
'use strict';
const names = ['John', 'Paul', 'Jones'];

const kohde3 = document.querySelector('#target');

for (let i of names) {
  kohde3.innerHTML += `<li> ${i} </li> `;
}