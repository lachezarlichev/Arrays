function maxNUmber(array) {
  let resultArray = [];
  for (let i = 0; i < array.length; i++) {
    let isBigger = true;
    let currentNumber = array[i];
    for (let k = i + 1; k < array.length; k++) {
      if (currentNumber <= array[k]) {
        isBigger = false;
      }
    }
    if (isBigger == true) {
      resultArray.push(array[i]);
    }
  }
  console.log(resultArray.join(' '));
}
maxNUmber([1, 4, 3, 2]);
