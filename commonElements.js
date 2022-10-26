function common(input1, input2) {
  let matchElemets = "";
  for (let i = 0; i < input1.length; i++) {
    let CurrentElements = input1[i];
    for (let y = 0; y < input2.length; y++) {
      let newElements = input2[y];
      if (input1[i] === input2[y]) {
        matchElemets = input1[i];
        console.log(matchElemets);
      }
    }
  }
}
common(
  ["Hey", "hello", 2, 4, "Peter", "e"],

  ["Petar", 10, "hey", 4, "hello", "2"]
);
