"use strict";
// ////arrray banae hy number wale
// let numbers=[1,2,3,4,5,6,7,8,9];
// ///for loop use kia hy
// for( let one_number of numbers){
//     let ordinalEnding:string;
// ///for loop work nhi kr rha error araha hy
//     if(one_number ===1){
//         ordinalEnding ="st"
//     }
//     else if(one_number ==2){
// ordinalEnding="nd"
//     }
// }
//  else if(one_number ==3){
//     ordinalEnding="rd"
// }
//     else {
//   ordinalEnding="th"
// }
// console.log(`${one_number}${ordinalEnding}`);
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    if (number === 1) {
        console.log(`${number}st`);
    }
    else if (number === 2) {
        console.log(`${number}nd`);
    }
    else if (number === 3) {
        console.log(`${number}rd`);
    }
    else {
        console.log(`${number}th`);
    }
}
