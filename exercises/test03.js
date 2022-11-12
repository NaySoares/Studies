/*
Implement a method to clear the unnecessary items of the array (false, undefined, empty string, zero, null)

The input of method: ([1, 2, ‘’, undefined])
The output of method: [1, 2]
*/

function arrayTruthy(arr) {
  var newArr = [];

  arr.forEach(function(arg){
    return (
      arg && newArr.push(arg)
    )
  })

  return newArr;
}

console.log(arrayTruthy([1,2,'', undefined]));