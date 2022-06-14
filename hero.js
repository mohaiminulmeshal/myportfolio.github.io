var input = document.getElementById("input");
var result = document.getElementById("result");
var conversionType = document.getElementById("conversionType");
var conversionTypeValue;

input.addEventListener("keyup", myResult);
conversionType.addEventListener("change", myResult);

conversionTypeValue = resultType.value;
console.log(conversionTypeValue);
function myResult() {
  conversionTypeValue = conversionType.value;
  if (conversionTypeValue === "K2P") {
    result.value = Number(input.value) * 2.2046;
  } else { 
    result.value=Number(input.value)*0.4536;
  } 
}
