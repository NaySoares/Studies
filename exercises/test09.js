/*
9) Implemente um método que divida um array por uma quantidade passada por parâmetro.
Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]
*/

function arrDivisor(arr, divisor) {
var newArray = [];

for (var i = 0; i < arr.length; i = i + divisor) {
  newArray.push(arr.slice(i, i + divisor));
}

return newArray;
}

console.log(arrDivisor([1, 2, 3, 4, 5], 2));