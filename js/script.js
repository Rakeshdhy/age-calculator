let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];


let result = document.getElementById("result");
function calculatorAge() {

  
  let birthDay = new Date(userInput.value);

  // user bithday
  let d1 = birthDay.getDate();
  let m1 = birthDay.getMonth() + 1;
  let y1 = birthDay.getFullYear();

  // current date month n year
  let today = new Date();
  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  // create 3 variables get month day and year

  let y3, m3, d3;

  // year
  y3 = y2 - y1;

  // month
  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  // day
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDayInMonth(y1, m1) + d2 - d1;
  }

  result.innerText = `you are ${y3} years and ${m3} months  ${d3} days olds`;
}

function getDayInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
