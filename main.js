function changeLast(arr, val) {
  arr[arr.length -1] = val;
}

function addMeToEnd(arr) {
  arr.push('Colin');
}

function addMeToStart(arr) {
  arr.unshift('Colin');
}

function changeAllValuesTo(arr, val) {
  let i = 0;

  while(i < arr.length){
    arr[i] = val;
    i = i + 1;
  }
}

function oddOrEven(arr) {
  let i = 0;

  while(i < arr.length){
    if (arr[i] % 2 === 0){
      arr[i] = 'even';
    } else {
      arr[i] = 'odd';
    }
    i = i + 1;
  }
}

function changeNextThreeToValue(ind, arr, val) {
  let i = ind;
  let max = i + 3;
  while(i < max){
  arr[i] = val;
  i = i + 1;
  }
}

module.exports = {
  changeLast,
  addMeToEnd,
  addMeToStart,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}