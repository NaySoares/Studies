/*
6) Implemente um método que retorne um array, sem valores duplicados.
Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]
*/

function arrSingle(arr) {
  var newArr = arr.filter((a, i) => arr.indexOf(a) === i);
  return newArr;
}

console.log(arrSingle([1,2,3,3,2,4,5,4,7,3]))
