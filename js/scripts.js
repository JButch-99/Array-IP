// Business Logic

function validNumberToArray(value) {
  let numberArray = [];
  if (value <= 0 || typeof value !== "number" || value === '') {
    return null;
  } 

  for (let i = 0; i <= value; i++) {
    numberArray.push(i);
  }
  return numberArray;
}

function processArray(array) {
  console.log(array);
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
  console.log(array);
  return array;
}

// UI Logic

function imprintArray() {

} 

function handleSubmission() {
  const numberString = 13;

  // Business Logic
  const numArray = validNumberToArray(numberString);
  processArray(numArray);

  // UI Logic
}

window.addEventListener("load", function(){
  handleSubmission();
});