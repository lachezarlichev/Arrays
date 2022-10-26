function reverse(count, number) {
  let reversenumber = [];
  for (let i = 0; i < count; i++) {
    reversenumber[i] = number[count - 1 - i];
  }
  let result = "";
  for (let i = 0; i < reversenumber.length; i++) {
    result = result + reversenumber[i];
  
  if(i < reversenumber.length - 1){
    result = result + ' '
  }
}
  console.log(result);
}
reverse(3, [10, 20, 30, 40, 50]);
