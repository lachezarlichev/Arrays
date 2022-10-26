function maxNumber(array) {
  let maxNumber = 0;
  let index = 0;
  let secondindex = 0;
  let lastindex = 0;

  let first = 0;
  let second = 0;
  let third = 0;
  for (let i = 0; i < array.length; i++) {
    let currentNumber = Number(array[i]);

    if (currentNumber > first) {
      first = currentNumber;
      index = Number([i]);
    }
  }
  for (let y = index + 1; y < array.length; y++) {
    let newcurrentNumber = array[y];
    if (newcurrentNumber > second && newcurrentNumber !== first) {
      second = newcurrentNumber;
      secondindex = Number([y]);
    }
  }
  for (let z = secondindex + 1; z < array.length; z++) {
    let lastCurrent = array[z];
    if (lastCurrent > third && lastCurrent !== second ) {
      third = lastCurrent;
      lastindex = Number([z]);
    }
  }
  if(index == array.length -1){
    console.log(first);
  }else{
  console.log(`${first} ${second} ${third}`);
  }
}
maxNumber([41, 41, 34, 20]);
