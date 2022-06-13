var input = document.getElementById("input");
var result = document.getElementById("result");
var inputType = document.getElementById("inputType");
var resultType = document.getElementById("resultType");
var inputTypeValue, resultTypeValue;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;
console.log("shv");
function myResult() {
  inputTypeValue = inputType.value;
  resultTypeValue = resultType.value;

  if (inputTypeValue === "Pound" && resultTypeValue === "Kilogram") {
    result.value = Number(input.value) * 0.4536;
  } else if (inputTypeValue === "Kilogram" && resultTypeValue === "Pound") {
    result.value = Number(input.value) * 2.2046;
  } else if (inputTypeValue === "Kilogram" && resultTypeValue === "Kilogram") {
    result.value = input.value;
  } else if (inputTypeValue === "Pound" && resultTypeValue === "Pound") {
    result.value = input.value;
  }
}
