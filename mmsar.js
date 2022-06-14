const inputNumbers = document.getElementById("number");
const maxOutput = document.querySelector(".max");
const minOutput = document.querySelector(".min");
const sumOutput = document.querySelector(".sum");
const averageOutput = document.querySelector(".average");
const reverseOutput = document.querySelector(".reverse");

const inputChangeHandler = (event) => {
  event.preventDefault();

  const inputNumbersArray = event.target.value.split(",");

  const maxNumber = inputNumbersArray.reduce((a, b) => {
    return Math.max(a, b);
  });

  const minNumber = inputNumbersArray.reduce((a, b) => {
    return Math.min(a, b);
  });

  const sumNumber = inputNumbersArray.reduce(
    (a, b) => parseInt(a) + parseInt(b),
    0
  );

  const average =
    inputNumbersArray.reduce((a, b) => parseInt(a) + parseInt(b), 0) /
    inputNumbersArray.length;

  const reverseArray = inputNumbersArray.reverse();

  // Edit Dom Element

  maxOutput.textContent = maxNumber;
  minOutput.textContent = minNumber;
  sumOutput.textContent = sumNumber;
  averageOutput.textContent = average;
  reverseOutput.textContent = reverseArray;
};


inputNumbers.addEventListener("change", inputChangeHandler);
inputNumbers.addEventListener("keyup", inputChangeHandler);
