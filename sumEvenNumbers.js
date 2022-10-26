function sumEvenNum(numbers){
    let sumEven = 0
    let sumOdd = 0
    let totalsum = sumEven - sumOdd
for(let i = 0; i< numbers.length;i++){
    let currentNum = Number(numbers[i])
     if(currentNum % 2 == 0){
sumEven += currentNum
     }else{
sumOdd += currentNum
     }

}console.log(sumEven - sumOdd);
}
sumEvenNum([1,2,3,4,5,6])