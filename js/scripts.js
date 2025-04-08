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
  for (let i = 0; i <= array.length; i++) {
    const priorityNumbers = [1, 2, 3];
    
    if (array[i] >= 0) {
      const splitArrayIndex = array[i].toString().split('');
      const numA = parseInt(splitArrayIndex[0]);
      const numB = parseInt(splitArrayIndex[1]);
      const numC = parseInt(splitArrayIndex[2]);
      const numD = parseInt(splitArrayIndex[3]);


      let validNumA = priorityNumbers.includes(numA);
      let validNumB = priorityNumbers.includes(numB);
      let validNumC = priorityNumbers.includes(numC);
      let validNumD = priorityNumbers.includes(numD);

      if (splitArrayIndex.length === 2) {
        if (validNumA && validNumB) {
          array[i] = Math.max(numA, numB);
        } else if (validNumA) {
          array[i] = numA;
        } else if (validNumB) {
          array[i] = numB;
        }
      } 
      
      if (splitArrayIndex.length === 3) {
        if (validNumA && validNumB && validNumC) {
          array[i] = Math.max(numA, numB, numC);
        } else if (validNumA && validNumB) {
          array[i] = Math.max(numA, numB);
        } else if (validNumB && validNumC) {
          array[i] = Math.max(numB, numC);
        } else if (validNumA && validNumC) {
          array[i] = Math.max(numA, numC);
        } else if (validNumA) {
          array[i] = numA;
        }  else if (validNumB) {
          array[i] = numB;
        } else if (validNumC) {
          array[i] = numC;
        }
      }

      if (splitArrayIndex.length === 4) {
        if (validNumA && validNumB && validNumC && validNumD) {
          array[i] = Math.max(numA, numB, numC, numD);
        }

        if (validNumA && validNumB && validNumC && !validNumD) {
          array[i] = Math.max(numA, numB, numC);
        } else if (!validNumA && validNumB && validNumC && validNumD) {
          array[i] = Math.max(numB, numC, numD);
        } else if (validNumA && !validNumB && validNumC && validNumD) {
          array[i] =  Math.max(numA, numC, numD);
        } else if (validNumA && validNumB && !validNumC && validNumD) {
          array[i] = Math.max(numA, numB, numD);
        }

        if (validNumA && validNumB && !validNumC && !validNumD) {
          array[i] = Math.max(numA, numB);
        } else if (validNumA && !validNumB && validNumC && !validNumD) {
          array[i] = Math.max(numA, numC);
        } else if (validNumA && !validNumB && !validNumC && validNumD) {
          array[i] = Math.max(numA, numD); 
        } else if (!validNumA && validNumB && validNumC && !validNumD) {
          array[i] = Math.max(numB, numC);
        } else if (!validNumA && validNumB && !validNumC && validNumD) {
          array[i] = Math.max(numB, numD);
        } else if (!validNumA && !validNumB && validNumC && validNumD) {
          array[i] = Math.max(numC, numD);
        }

        if (validNumA && !validNumB && !validNumC && !validNumD) {
          array[i] = numA;
        } else if (!validNumA && validNumB && !validNumC && !validNumD) {
          array[i] = numB;
        } else if (!validNumA && !validNumB && validNumC && !validNumD) {
          array[i] = numC;
        } else if (!validNumA && !validNumB && !validNumC && validNumD) {
          array[i] = numD;
        }
      }

      if (splitArrayIndex.length === 5) {
        array[i] = 1;
      }
    } 
  }
  console.log(array);
  return array;
}

function convertArrayIndexToString(modifiedArray) {

  for (let i = 0; i <= modifiedArray.length; i++) {
    if (modifiedArray[i] === 1) {
      modifiedArray[i] = '"' + "Beep!" + '"';
    } else if (modifiedArray[i] === 2) {
      modifiedArray[i] = '"' + "Boop!" + '"';
    } else if (modifiedArray[i] === 3) {
      modifiedArray[i] = '"' + "Won't you be my neighbor?" + '"';
    }
  }

  return modifiedArray;
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
  const processingArray = processArray(numArray);
  const convertedArray = convertArrayIndexToString(processingArray);
  
  
  // UI Logic
  createElementsAndAppend(convertedArray);
}

window.addEventListener("load", function(){
  document.querySelector("form#numberInputBox").addEventListener("submit", handleSubmission);
});