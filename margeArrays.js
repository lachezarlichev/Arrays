function marge(firstArray, secondArray) {
  let newArray = [];
  let even = 0;
  let odd = "";

  for (let i = 0; i < firstArray.length; i++) {
    if (i % 2 === 0) {
      newArray.push(Number(firstArray[i]) + Number(secondArray[i]));
    } else {
      newArray.push(firstArray[i] + "" + secondArray[i]);
    }
  }
  console.log(newArray.join(" - "));
}
marge(
  ["5", "15", "23", "56", "35"],

  ["17", "22", "87", "36", "11"]
);
