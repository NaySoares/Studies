/*
Implement a method to invert the array, don’t use “Arr.reverse”

The input of method: ([1, 2, 3, 4])
The output of method: [4, 3, 2, 1]
*/

//!method 1 (don't allowed)

function reverseArray(arr) {  
  const reverseArr = arr.slice(0).reverse(); //*slice for preserve original array
  return reverseArr;
}

//method 2
  function reverseArray2(arr) {
    const newArr = [];
    for (var i = 0, j = arr.length - 1; i < arr.length; i++, j--) {      
        newArr[i] = arr[j];
    }
    return newArr;
}

console.log(reverseArray([1,2,3,4]));
console.log(reverseArray2([1,2,3,4]));