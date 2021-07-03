
//index  0   1   2   3   4   5   6   7   8   9   10  11
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//month   1   2   3   4   5   6   7   8   9   10  11  12


function ageCalculate() {

  //Delaration
  ///////////////////Date That User Enter (Your Birth Date)//////////////////////////////
  let inputUser = new Date(document.getElementById("birthdate").value);
  let userYear = inputUser.getFullYear();
  let userMonth = inputUser.getMonth() + 1;   //Digital number from 0 to 30
  let userDay = inputUser.getDate();

  ///////////////////////// Current Date /////////////////////////////
  let today = new Date();
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1;
  let currentDate = today.getDate();

  let ageInYear, ageInMonth, ageInDay;
  checkFeb(currentYear);
  //////////////////////////////////////Condition////////////////////////////////////////

  /////////////////////////// First Condition //////////////////
  if (
    userYear > currentYear ||
    (userMonth > currentMonth && userYear == currentYear) ||
    (userDay > currentDate && userMonth == currentMonth && userYear == currentYear)
  ) {
    alert("Not Born Yet");
    displayResult("-", "-", "-");
    return;
  }

  ageInYear = currentYear - userYear;
  /////////////////////////////Second Condition///////////////////////

  if (currentMonth >= userMonth) {
    if (currentMonth == userMonth) {
      let surprise = document.getElementById('surprise');
      let string = document.getElementById('string');
      ageInMonth = currentMonth - userMonth;
      surprise.style.display = 'block';
      string.textContent = "Surprise :D, It's Your Birthday";
    }
    else if (currentMonth > userMonth) {
      ageInMonth = currentMonth - userMonth;
    }
  }
  else {
    ageInYear--;
    ageInMonth = 12 + currentMonth - userMonth;
  }
  /////////////////////////////Third Condition////////////////////////////////
  if (currentDate >= userDay) {
    if (currentDate == userDay) {
      let surprise = document.getElementById('surprise');
      let string = document.getElementById('string');
      ageInDay = currentDate - userDay;
      surprise.style.display = 'block';
      string.textContent = "Surprise :D, It's Your Birthday";
    }
    else if (currentDate > userDay) {
      ageInDay = currentDate - userDay;
    }

  }
  else {
    ageInMonth--;
    let days = months[currentMonth - 2];
    ageInDay = days + currentDate - userDay;
  }
  displayResult(ageInDay, ageInMonth, ageInYear);
}

function displayResult(bDate, bMonth, bYear) {
  document.getElementById("year").textContent = bYear;
  document.getElementById("month").textContent = bMonth;
  document.getElementById("day").textContent = bDate;
}

function checkFeb(year) {
  year % 4 == 0 ? months[1] = 29 : months[1] = 28;
}

