// Business Logic

function validNumberToArray(value) {
  if (value <= 0 || typeof value !== "number" || value === '') {
    return null;
  } 

  let valueString = value.toString().split('');

  return valueString;
}

function processArray(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (parseInt(array[i]) === 1) {
      array[i] = "Beep!";
      newArray.push(array[i]);
    } else if (parseInt(array[i]) === 2) {
      array[i] = "Boop!";
      newArray.push(array[i]);
    } else if (parseInt(array[i]) === 3) {
      array[i] = "Won't you be my neighbor?";
      newArray.push(array[i]);
    }
  }

  console.log(newArray);
  return newArray;
}

// UI Logic
function handleSubmission() {
  const numberString = 13254;

  // Business Logic
  const numArray = validNumberToArray(numberString);
  processArray(numArray);

  // UI Logic
}

window.addEventListener("load", function(){
  handleSubmission();
});