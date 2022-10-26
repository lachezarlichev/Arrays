function arrayRotation(array, number) {
  let rotation = number % array.length;
  for (let i = 0; i < rotation; i++) {
    let numberToMove = array.shift();
    array.push(numberToMove);
  }
  console.log(array.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2);
