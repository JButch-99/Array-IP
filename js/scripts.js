// Business Logic

function processNumber(value) {
  if (value <= 0 || typeof value !== "number") {
    return null;
  }
  console.log(value);
}

// UI Logic
function handleSubmission() {
  const numberString = -3;
  processNumber(numberString);
}

window.addEventListener("load", function(){
  handleSubmission();
});