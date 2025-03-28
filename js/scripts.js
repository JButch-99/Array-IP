// Business Logic

function validNumberToArray(value) {
  let numberArray = [];
  if (value <= 0 || typeof value !== "number" || value === '') {
    return null;
  } 

  for (let i = 1  ; i <= value; i++) {
    numberArray.push(i);
  }
  return numberArray;
}

function processArray(array) {
  for (let i = 0; i <= array.length; i++) {
    if (array[i] >= 10) {
      const splitArrayIndex = array[i].toString().split('');
      const numA = parseInt(splitArrayIndex[0]);
      const numB = parseInt(splitArrayIndex[1]);
      const setOfNumbers = [1, 2, 3];
      
      for (let number = 0; number < setOfNumbers.length; number++) {
        const targetNumber = parseInt(setOfNumbers[number]);
        if (numA === targetNumber && numB !== targetNumber) {
          array[i] = numA;
        } else if (numB === targetNumber && numA !== targetNumber) {
          array[i] = numB;
        } else if (numA === targetNumber && numB === targetNumber) {
          array[i] = numA;
        }
      }
    } 

    if (array[i] === 1) {
      array[i] = "Beep!";
    } else if (array[i] === 2) {
      array[i] = "Boop!";
    } else if (array[i] === 3) {
      array[i] = "Won't you be my neighbor?";
    }
  }
  
  return array;
}

// UI Logic

function createElementsAndAppend(array) {
  const arrayToString = array.join(', ');
  let whiteboardPanel = document.getElementById("whiteboard");
  let p = document.createElement("p");

  p.append(arrayToString);

  whiteboardPanel.innerHTML = null;

  whiteboardPanel.append(p);
}

function handleSubmission(event) {
  event.preventDefault();
  const numberString = parseInt(document.getElementById("numberBox").value);

  // Business Logic
  const numArray = validNumberToArray(numberString);
  const newProcessedArray = processArray(numArray);
  processArray(numArray);
  // UI Logic

  createElementsAndAppend(newProcessedArray);
}

window.addEventListener("load", function(){
  document.querySelector("form#numberInputBox").addEventListener("submit", handleSubmission);
});