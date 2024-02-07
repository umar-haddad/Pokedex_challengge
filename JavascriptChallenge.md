1. const array1 = [8, 3, 9, 2, 5];
   const array2 = [2, 6, 7, 4, 1];
   const array3 = [2, 6, 7, 5, 1];

function findArray(array, number) {
return array.find((element) => element === number);
}
console.log(findArray(array2, 4));
console.log(findArray(array1, 3));
console.log(findArray(array3, 10));

2. // [8 ,3 ,9 ,2 ,5] -> return [8 ,"fizz" ,"fizz" ,2 ,"buzz"]
   // [3 ,4 ,6 ,7 ,9] -> return ["fizz" ,4 ,"fizz" ,7 ,"fizz"]
   // [4 ,5 ,9 ,15 ,19] -> return [4 ,"buzz" ,"fizz" ,"fizz buzz" , 19]
   // [2 ,4 ,7 ,8 ,1] -> return [2 ,4 ,7 ,8 ,1]

let array4 = [8, 3, 9, 2, 5];
let array5 = [3, 4, 6, 7, 9];
let array6 = [4, 5, 9, 15, 19];
let array7 = [2, 4, 7, 8, 1];

function udin(array) {
return array.map((element) => {
if (element % 5 === 0 && element % 3 === 0) {
return "fizz buzz";
}
if (element % 3 === 0) {
return "fizz";
}
if (element % 5 === 0) {
return "buzz";
}
return element;
});
}

console.log(udin(array6));
