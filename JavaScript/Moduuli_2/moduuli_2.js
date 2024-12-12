// 1. Reverse order
function reverseOrder() {
  const numbers = [];
  for (let i = 0; i < 5; i++) {
    const num = parseInt(prompt(`Enter number ${i + 1}:`));
    numbers.push(num);
  }
  console.log("Numbers in reverse order:");
  for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
  }
}

// 2. Alphabetical participant list
function alphabeticalParticipants() {
  const numParticipants = parseInt(prompt("Enter the number of participants:"));
  const names = [];
  for (let i = 0; i < numParticipants; i++) {
    names.push(prompt(`Enter name of participant ${i + 1}:`));
  }
  names.sort();
  const ol = document.createElement("ol");
  names.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    ol.appendChild(li);
  });
  document.body.appendChild(ol);
}

// 3. Reversed alphabetical dog names
function reverseDogNames() {
  const dogs = [];
  for (let i = 0; i < 6; i++) {
    dogs.push(prompt(`Enter the name of dog ${i + 1}:`));
  }
  dogs.sort().reverse();
  const ul = document.createElement("ul");
  dogs.forEach(dog => {
    const li = document.createElement("li");
    li.textContent = dog;
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
}

// 4. Take numbers until zero, sorted descending
function numbersUntilZero() {
  const numbers = [];
  let num;
  do {
    num = parseInt(prompt("Enter a number (0 to stop):"));
    if (num !== 0) {
      numbers.push(num);
    }
  } while (num !== 0);
  numbers.sort((a, b) => b - a);
  console.log("Numbers in descending order:", numbers);
}

// 5. Unique numbers until duplicate
function uniqueNumbers() {
  const numbers = [];
  let num;
  while (true) {
    num = parseInt(prompt("Enter a number:"));
    if (numbers.includes(num)) {
      console.log("Duplicate number found, stopping input.");
      break;
    }
    numbers.push(num);
  }
  numbers.sort((a, b) => a - b);
  console.log("Numbers in ascending order:", numbers);
}

// 6. Dice roll until 6
function rollDiceUntilSix() {
  const ul = document.createElement("ul");
  let roll;
  do {
    roll = Math.floor(Math.random() * 6) + 1;
    const li = document.createElement("li");
    li.textContent = roll;
    ul.appendChild(li);
  } while (roll !== 6);
  document.body.appendChild(ul);
}

// 7. Dice roll until max
function rollDiceUntilMax() {
  const sides = parseInt(prompt("Enter the number of sides on the dice:"));
  const ul = document.createElement("ul");
  let roll;
  do {
    roll = Math.floor(Math.random() * sides) + 1;
    const li = document.createElement("li");
    li.textContent = roll;
    ul.appendChild(li);
  } while (roll !== sides);
  document.body.appendChild(ul);
}

// 8. Concatenate strings
function concatStrings() {
  const strings = ["Johnny", "DeeDee", "Joey", "Marky"];
  let result = "";
  for (const str of strings) {
    result += str;
  }
  document.body.textContent = result;
}

function no() {
    document.body.textContent = " :'("
}

// 9. Filter even numbers
function even() {
  const numbers = [2, 7, 4, 9, 12, 15];
  const evens = numbers.filter(num => num % 2 === 0);
  console.log("Original array:", numbers);
  console.log("Even numbers array:", evens);
}


// 10. Voting Machine

function votingProgram() {
  // Step 1: Ask for number of candidates
  const numCandidates = parseInt(prompt("Enter the number of candidates:"));
  const candidates = [];

  // Step 2: Get candidate names and initialize vote counts
  const resultsDiv = document.createElement("div");
  resultsDiv.innerHTML = "<h2>Candidates:</h2>";
  const candidatesList = document.createElement("ul");
  for (let i = 0; i < numCandidates; i++) {
    const name = prompt(`Enter name for candidate ${i + 1}:`);
    candidates.push({ name: name, votes: 0 });
    const listItem = document.createElement("li");
    listItem.textContent = name;
    candidatesList.appendChild(listItem);
  }

  resultsDiv.appendChild(candidatesList);
  document.body.appendChild(resultsDiv);

  // Step 3: Ask for number of voters
  const numVoters = parseInt(prompt("Enter the number of voters:"));

  // Step 4: Voting process
  let emptyVotes = 0;
  for (let i = 0; i < numVoters; i++) {
    const vote = prompt(`Voter ${i + 1}, enter the name of your chosen candidate:`);
    if (vote) {
      const candidate = candidates.find(c => c.name.toLowerCase() === vote.toLowerCase());
      if (candidate) {
        candidate.votes += 1;
      } else {
        console.log(`Invalid vote: ${vote} does not match any candidate.`);
      }
    } else {
      console.log("Empty vote registered.");
      emptyVotes += 1;
    }
  }

  // Step 5: Determine the winner
  candidates.sort((a, b) => b.votes - a.votes);
  candidates.push({ name: "Empty votes", votes: emptyVotes });
  const winner = candidates[0];

  // Step 6: Print the results
  const resultsOutput = document.createElement("div");
  resultsOutput.innerHTML = `<h2>The winner is ${winner.name} with ${winner.votes} votes.</h2>`;
  const resultsList = document.createElement("ul");
  candidates.forEach(candidate => {
    const listItem = document.createElement("li");
    listItem.textContent = `${candidate.name}: ${candidate.votes} votes`;
    resultsList.appendChild(listItem);
    console.log(`${candidate.name}: ${candidate.votes} votes`);
  });
  resultsOutput.appendChild(resultsList);
  document.body.appendChild(resultsOutput);

  console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
}
