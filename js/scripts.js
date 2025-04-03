// Business Logic

function validateNumber(value) {
  if (typeof value !== "number" || value === '') {
    return null;
  } 
}

function validNumberToArray(value, invalid) {
  let numberArray = [];
  
  if (invalid) {
    return null;
  } 

  for (let i = 0; i <= value; i++) {
    numberArray.push(i);
  }
  return numberArray;
}

function processArray(array) { 
  const setOfNumbers = [1, 2, 3];
  for (let i = 0; i <= array.length; i++) {
    if (array[i] >= 0) {
      const splitArrayIndex = array[i].toString().split('');
      const numA = parseInt(splitArrayIndex[0]);
      const numB = parseInt(splitArrayIndex[1]);
      const numC = parseInt(splitArrayIndex[2]);
      const numD = parseInt(splitArrayIndex[3]);
      
      if (splitArrayIndex.length === 2) {
        let validNumA = setOfNumbers.includes(numA);
        let validNumB = setOfNumbers.includes(numB);

        if (validNumA && validNumB) {
          array[i] = Math.max(numA, numB);
        } else if (validNumA) {
          array[i] = numA;
        } else if (validNumB) {
          array[i] = numB;
        }
      } else if (splitArrayIndex.length === 3) {
        let validNumA = setOfNumbers.includes(numA);
        let validNumB = setOfNumbers.includes(numB);
        let validNumC = setOfNumbers.includes(numC);

        if (validNumA && validNumB && validNumC) {
          array[i] = Math.max(numA, numB, numC);
        } else if (validNumA && validNumC) {
          array[i] = Math.max(numA, numC);
        } else if (validNumA && validNumB) {
          array[i] = Math.max(numA, numB);
        } else if (validNumB && validNumC) {
          array[i] = Math.max(numB, numC);
        } else if (validNumA || validNumA || validNumC) {
          array[i] = numA
        }
      }
    } 
    
    if (array[i] === 1) {
      array[i] = array[i] + "=/TEST/=" +  '"Beep!"';
    } else if (array[i] === 2) {
      array[i] = array[i] + "=/TEST/=" + '"Boop!"';
    } else if (array[i] === 3) {
      array[i] = array[i] + "=/TEST/=" + '"' + "Won't you be my neighbor?" + '"';
    }
  }
  console.log(array);
  return array;
}

// UI Logic

function createElementsAndAppend(arrayList) {
  let whiteboardPanel = document.getElementById("whiteboard");
  let p = document.createElement("p");
  
  whiteboardPanel.textContent = null;
  
  p.textContent = arrayList.join(', ');
  whiteboardPanel.append(p); 
}     

function handleSubmission(event) {
  event.preventDefault();
  const numberString = parseInt(document.getElementById("numberBox").value);

  // Business Logic
  const notValid = validateNumber(numberString);
  const numArray = validNumberToArray(numberString, notValid);
  const newProcessedArray = processArray(numArray);
  
  
  // UI Logic
  createElementsAndAppend(newProcessedArray);
}

window.addEventListener("load", function(){
  document.querySelector("form#numberInputBox").addEventListener("submit", handleSubmission);
});