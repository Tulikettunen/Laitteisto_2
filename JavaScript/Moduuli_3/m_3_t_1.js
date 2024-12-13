// tehtävä 1
'use strict';

const kohde = document.querySelector('#target');

kohde.innerHTML += `<li>First item</li>`;
kohde.innerHTML += `<li>Second item</li>`;
kohde.innerHTML += `<li>Third Item</li>`;

kohde.classList.add('my-list');

