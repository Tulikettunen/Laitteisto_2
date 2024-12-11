
/* 1. Write a program that logs to the console this text: I'm printing to console! (1p */

console.log("I'm printing to console!")

/* 2. Write a program that prompts for user's name and then greets the user.
Print the result to the HTML document: Hello, Name! (2p) */

/*function printOut(){
    const name = prompt('Type your name here:')
    return ('Nice to meet you, ' + name)
}

printOut()*/

// Tehtävä 2: Greeting
function greetUser() {
  const userName = prompt("What's your name?");
  const resultElement = document.getElementById("greetingResult");

  if (userName) {
    resultElement.textContent = `Hello, ${userName}!`;
  } else {
    resultElement.textContent = "Hello, stranger!";
  }
}

// Tehtävä 3: Sum, Product, and Average
function calculateNumbers() {
  const num1 = parseInt(prompt("Enter the first integer:"), 10);
  const num2 = parseInt(prompt("Enter the second integer:"), 10);
  const num3 = parseInt(prompt("Enter the third integer:"), 10);
  const resultElement = document.getElementById("calculationResult");

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    resultElement.textContent = "Please enter valid integers.";
    return;
  }

  const sum = num1 + num2 + num3;
  const product = num1 * num2 * num3;
  const average = sum / 3;

  resultElement.innerHTML = `
    <strong>Results:</strong><br>
    Sum: ${sum}<br>
    Product: ${product}<br>
    Average: ${average.toFixed(2)}
  `;
}

// Tehtävä 4: Sorting Hat
function sortingHat() {
  const userName = prompt("What's your name?");
  const resultElement = document.getElementById("sortingResult");

  if (!userName) {
    resultElement.textContent = "Please enter your name to be sorted!";
    return;
  }

  const houseNumber = Math.floor(Math.random() * 4) + 1; // Random number between 1 and 4
  let house;

  switch (houseNumber) {
    case 1:
      house = "Gryffindor";
      break;
    case 2:
      house = "Slytherin";
      break;
    case 3:
      house = "Hufflepuff";
      break;
    case 4:
      house = "Ravenclaw";
      break;
    default:
      house = "Unknown";
  }

  resultElement.textContent = `${userName}, you are ${house}.`;
}

// Tehtävä 5: Leap Year Check
function checkLeapYear() {
  const year = parseInt(prompt("Enter a year:"), 10);
  const resultElement = document.getElementById("leapYearResult");

  if (isNaN(year)) {
    resultElement.textContent = "Please enter a valid year.";
    return;
  }

  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    resultElement.textContent = `Year ${year} is a leap year.`;
  } else {
    resultElement.textContent = `Year ${year} is not a leap year.`;
  }
}

// Tehtävä 6: Square Root Calculation
function calculateSquareRoot() {
  const confirmResult = confirm("Should I calculate the square root?");
  const resultElement = document.getElementById("squareRootResult");

  if (!confirmResult) {
    resultElement.textContent = "The square root is not calculated.";
    return;
  }

  const number = parseFloat(prompt("Enter a number:"));
  if (isNaN(number)) {
    resultElement.textContent = "Please enter a valid number.";
  } else if (number < 0) {
    resultElement.textContent = "The square root of a negative number is not defined.";
  } else {
    resultElement.textContent = `The square root of ${number} is ${Math.sqrt(number).toFixed(2)}.`;
  }
}

// Tehtävä 7: Dice Roll Sum
function rollDice() {
  const rolls = parseInt(prompt("Enter the number of dice rolls:"), 10);
  const resultElement = document.getElementById("diceRollResult");
  let resultElementList = document.getElementById("diceNumber")


  if (isNaN(rolls) || rolls <= 0) {
    resultElement.textContent = "Please enter a valid number of rolls.";
    return;
  }

  let sum = 0;
  let numbList = [];
  for (let i = 0; i < rolls; i++) {
    let noppa = Math.floor(Math.random() * 6) + 1;
    //console.log(`Noppa ${i+1} = ${noppa} `)
    numbList.push(`The result of dice ${i+1} is ${noppa}.`)
    sum += noppa;
  }

  //document.body.innerText = numbList.join('\n');
  resultElementList.textContent = numbList.join('\n');
  resultElement.textContent = `The sum of ${rolls} dice rolls is ${sum}.`;
}

// Tehtävä 8: Leap Years in Interval
function listLeapYears() {
  const startYear = parseInt(prompt("Enter the start year:"), 10);
  const endYear = parseInt(prompt("Enter the end year:"), 10);
  const listElement = document.getElementById("leapYearList");

  if (isNaN(startYear) || isNaN(endYear) || startYear > endYear) {
    listElement.innerHTML = "Please enter a valid year interval.";
    return;
  }

  let listHTML = "<ul>";
  for (let year = startYear; year <= endYear; year++) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      listHTML += `<li>${year}</li>`;
    }
  }
  listHTML += "</ul>";
  listElement.innerHTML = listHTML;
}

// Tehtävä 9: Prime Number Check
function checkPrimeNumber() {
  const number = parseInt(prompt("Enter an integer:"), 10);
  const resultElement = document.getElementById("primeCheckResult");

  if (isNaN(number) || number < 2) {
    resultElement.textContent = `${number} is not a prime number.`;
    return;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      resultElement.textContent = `${number} is not a prime number.`;
      return;
    }
  }
  resultElement.textContent = `${number} is a prime number.`;
}

// Tehtävä 10: Dice Sum Probability
function diceSumProbability() {
  const diceCount = parseInt(prompt("Enter the number of dice:"), 10);
  const targetSum = parseInt(prompt("Enter the target sum:"), 10);
  const resultElement = document.getElementById("diceProbabilityResult");

  if (isNaN(diceCount) || isNaN(targetSum) || diceCount <= 0 || targetSum <= 0) {
    resultElement.textContent = "Please enter valid numbers.";
    return;
  }

  let matches = 0;
  const trials = 10000;

  for (let i = 0; i < trials; i++) {
    let sum = 0;
    for (let j = 0; j < diceCount; j++) {
      sum += Math.floor(Math.random() * 6) + 1;
    }
    if (sum === targetSum) {
      matches++;
    }
  }

  const probability = ((matches / trials) * 100).toFixed(2);
  resultElement.textContent = `Probability to get sum ${targetSum} with ${diceCount} dice is ${probability}%.`;
}
