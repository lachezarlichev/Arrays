function array(input) {
  let newArray = [];
  for (let i = 0; i < input.length - 1; i++) {
    let indicator = input.length - 2;
    if (input.length == 1) {
      console.log(`${i} is already condensed to number`);
    }
    if ([i] >= indicator) {
      newArray[i] = input[i] + input[i + 1];
      input = newArray;
      break;
    } else {
      newArray[i] = input[i] + input[i + 1];
    }
  }
  //   if(input.length <2){
  // input.stop
  //   }
  //   newArray = []
  //   for(let i =0;i < input.length;i++){
  //     let indicator = input.length - 2;
  //     if ([i] >= indicator) {
  //         newArray[i] = input[i] + input[i + 1];
  //         input = newArray;
  //         break;
  //       } else {
  //         newArray[i] = input[i] + input[i + 1];
  //       }
  //   }
  //   if(input.length <2){
  //     input.stop
  //       }
  //   newArray = []
  //   for(let i =0;i < input.length;i++){
  //     let indicator = input.length - 2;
  //     if ([i] >= indicator) {
  //         newArray[i] = input[i] + input[i + 1];
  //         input = newArray;
  //         break;
  //       } else {
  //         newArray[i] = input[i] + input[i + 1];
  //       }
  //   }
  //   if(input.length <2){
  //     input.stop
  //       }
  //   newArray = []
  //   for(let i =0;i < input.length;i++){
  //     let indicator = input.length - 2;
  //     if ([i] >= indicator) {
  //         newArray[i] = input[i] + input[i + 1];
  //         input = newArray;
  //         break;
  //       } else {
  //         newArray[i] = input[i] + input[i + 1];
  //       }
  //   }

  console.log(input);
}
array([2, 10, 3]);
