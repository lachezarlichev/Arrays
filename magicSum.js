function magicSum(array , number) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    let currentNumber = array[i];
    for (let k = i + 1; k < array.length; k++) {
      let newCurrent = array[k];
      if (currentNumber + newCurrent == number) {
        result = `${currentNumber} ${newCurrent}`;
        console.log(result);
      }
      
    }
  }

}
magicSum(
  [1, 7, 6, 2, 19, 23],

  8
);
