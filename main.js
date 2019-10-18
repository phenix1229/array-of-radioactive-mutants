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

// function oddOrEven(arr) {
//   let i = 0;

//   while(i < arr.length){
//     if (arr[i] % 2 === 0){
//       arr[1] = 'even';
//     } else {
//       arr[i] = 'odd';
//     }
//     i = i + 1;
//   }
// }

// function changeNextThreeToValue(arr, ind, val) {
//   let i = ind;

//   while(i < i + 3){
//     arr[i] = val;
//     i = i + 1;
//   }
// }

module.exports = {
  changeLast,
  addMeToEnd,
  addMeToStart,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}