// TRAVERSE DATA CYU ASSIGNMENT START CODE

// Load Data From Files
let surveyData;
fetch("data/survey-results.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (surveyData = strData.split(/\r?\n/)));

let ageData;
fetch("data/age-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (ageData = strData.split(/\r?\n/)));

let numberData;
fetch("data/number-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (numberData = strData.split(/\r?\n/)));

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions
function traverseSurveyData() {
  let yesCount = 0;
  let noCount = 0;
  let maybeCount = 0;

  for (let i = 0; i < surveyData.length; i++) {
    if (surveyData[i] === "Yes") {
      yesCount++;
    } else if (surveyData[i] === "No") {
      noCount++;
    } else if (surveyData[i] === "Maybe") {
      maybeCount++;
    }
  }
  // Traverse the surveyData array to:
  // Count the number of "Yes" responses,
  // Count the number of "No" responses,
  // Count the number of "Maybe" responses,
  // and output the results in the outputEl.

  outputEl.innerHTML = `<h4>Survey Data</h4>
  <p>Yes: ${yesCount}</p>
  <p>No: ${noCount}</p>
  <p>Maybe: ${maybeCount}</p>`;
  console.log(surveyData);
}

function traverseAgeData() {
  let under18Count = 0;
  let between18And35Count = 0;
  let between36And65Count = 0;
  let above65Count = 0;

  for (let i = 0; i < ageData.length; i++) {
    if (ageData[i] < 18) {
      under18Count++;
    } else if (ageData[i] >= 18 && ageData[i] <= 35) {
      between18And35Count++;
    } else if (ageData[i] >= 36 && ageData[i] <= 65) {
      between36And65Count++;
    } else if (ageData[i] > 65) {
      above65Count++;
    }
  }
  // Traverse the ageData array to:
  // Count the number of ages under 18,
  // Count the number of ages between 18 and 35, inclusive
  // Count the number of ages between 36 and 65, inclusive
  // Count the number of ages above 65,
  // and output the results in the outputEl.

  outputEl.innerHTML = `<h4>Age Data</h4>
  <p>Under 18: ${under18Count}</p>
  <p>Between 18 and 35: ${between18And35Count}</p>
  <p>Between 36 and 65: ${between36And65Count}</p>
  <p>Above 65: ${above65Count}</p>`;
  console.log(ageData);
}

function traverseNumberData() {
  let evenNums = 0;
  let oddNums = 0;

  for (let i = 0; i < numberData.length; i++) {
    if (numberData[i] % 2 == 0) {
      evenNums++;
    } else if (numberData[i] % 2 != 0) {
      oddNums++;
    }
  }

  // Traverse the numberData array to:
  // Count the number of even numbers,
  // Count the number of odd numbers,
  // and output the results in the outputEl.

  outputEl.innerHTML = `<h4>Number Data</h4>
  <p>Number of even numbers: ${evenNums}</p>
  <p>Number of odd: ${oddNums}</p>`;
  console.log(numberData);
}
