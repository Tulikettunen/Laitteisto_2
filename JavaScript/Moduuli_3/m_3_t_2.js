// tehtävä 2
'use strict';

const kohde2 = document.querySelector('#target');

const t = document.createTextNode('First item');
const li = document.createElement('li');
li.appendChild(t);
kohde2.appendChild(li);

const t2 = document.createTextNode('Second item');
const li2 = document.createElement('li');
li2.appendChild(t2);
kohde2.appendChild(li2);

const t3 = document.createTextNode('Third item');
const li3 = document.createElement('li');
li3.appendChild(t3);
kohde2.appendChild(li3);

const second = document.querySelectorAll('li')[1];
second.classList.add('my-item');