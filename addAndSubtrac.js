function addAndSubtract(numbers) {
  let newArray = [];
  let sumOldArray = 0;
  let sumNewArray = 0;

  for (let i = 0; i < numbers.length; i++) {
    let currentNumber = numbers[i];
    if (currentNumber % 2 === 0) {
      sumOldArray += currentNumber;
      currentNumber = currentNumber + i;
      newArray.push(currentNumber);
      sumNewArray += currentNumber;
    } else if (currentNumber % 2 !== 0) {
      sumOldArray += currentNumber;
      currentNumber = currentNumber - i;
      newArray.push(currentNumber);
      sumNewArray += currentNumber;
    }
  }
  console.log(newArray);
  console.log(sumOldArray);
  console.log(sumNewArray);
}
addAndSubtract([5, 15, 23, 56, 35]);
