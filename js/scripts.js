// Business Logic

function validNumberToArray(value) {
  if (value <= 0 || typeof value !== "number" || value === '') {
    return null;
  } 

  let valueString = value.toString().split('');

  return valueString;
}

function processArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (parseInt(array[i]) === 3) {
      array[i] = "Won't you be my neighbor?"
    } else {
      array[i] = "";
    }
  }

  console.log(array);
}

// UI Logic
function handleSubmission() {
  const numberString = 13054;
  const numArray = validNumberToArray(numberString);
  processArray(numArray);
}

window.addEventListener("load", function(){
  handleSubmission();
});