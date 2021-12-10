function solveEquation(a, b, c) {
  let arr = [];
  let d;
  d = b ** 2 - (4 * a * c);
  console.log(d);

  if (d === 0) {
    let x = (- b) / (2 * a);
    arr.push(x);
  } else if (d > 0) {
    let x1 = (- b + Math.sqrt(d)) / (2 * a);
    let x2 = (- b - Math.sqrt(d)) / (2 * a);
    arr.push(x1);
    arr.push(x2);
  } 
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
