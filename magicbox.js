const textArea = document.getElementById("inputbox");

const clearBtn = document.querySelector(".clear");
const capitalizeBtn = document.querySelector(".capitalize");
const sortBtn = document.querySelector(".sort");
const reverseBtn = document.querySelector(".reverse");
const stripBlankBtn = document.querySelector(".strip_blank");
const addNumbersBtn = document.querySelector(".add_numbers");
const shuffleBtn = document.querySelector(".shuffle");

const clearBtnHandler = () => {
  textArea.value = "";
};

const capitalizeBtnHandler = () => {
  textArea.value = textArea.value.toUpperCase();
};

const sortBtnHandler = () => {
  const textAreaContent = textArea.value.trim();

  textArea.value = textAreaContent.split("\n").sort().join("\n");
};

const reverseBtnHandler = () => {
  const textLines = textArea.value.trim().split("\n");
  let reversedlines = "";

  textLines.forEach((textLine) => {
    reversedlines += textLine.split("").reverse().join("") + "\n";
  });

  textArea.value = reversedlines;
};

const stripBlankBtnHandler = () => {
  const textLines = textArea.value.split("\n");
  let strippedLines = "";
  console.log(textLines);
  textLines.forEach((textLine) => {
    if (textLine === "") {
      return;
    }

    strippedLines += textLine.trim() + "\n";
  });

  textArea.value = strippedLines;
};

const addNumbersBtnHandler = () => {
  const textLines = textArea.value.trim().split("\n");
  let numberAddedLines = "";

  textLines.forEach((textLine, index) => {
    numberAddedLines += `${index + 1})` + textLine + "\n";
  });

  textArea.value = numberAddedLines;
};

const shuffleBtnHandler = () => {
  const textLines = textArea.value.trim().split("\n");
  textArea.value = textLines.sort(() => Math.random() - 0.5).join("\n");
};

clearBtn.addEventListener("click", clearBtnHandler);
capitalizeBtn.addEventListener("click", capitalizeBtnHandler);
sortBtn.addEventListener("click", sortBtnHandler);
reverseBtn.addEventListener("click", reverseBtnHandler);
stripBlankBtn.addEventListener("click", stripBlankBtnHandler);
addNumbersBtn.addEventListener("click", addNumbersBtnHandler);
shuffleBtn.addEventListener("click", shuffleBtnHandler);
