// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  
  for (item of arr) {
    if (min > item) {
      min = item;
    }

    if (max < item) {
      max = item;
    }

    sum += item;
  }
  
  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (item of arr) {
    sum += item
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;

  for (arr of arrOfArr) {
    if (max < func(arr)) {
      max = func(arr);
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  
  for (item of arr) {
    if (min > item) {
      min = item;
    }

    if (max < item) {
      max = item;
    }
  }

  let dist = Math.abs(max - min);
  
  return dist;
}
