//tehtävä 4
'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const kohde4 = document.querySelector('#target');
students.forEach(function(stud) {
  const optiooni = document.createElement('option');
  optiooni.innerHTML = stud.name;
  optiooni.value = stud.id;
  kohde4.appendChild(optiooni);
});


//