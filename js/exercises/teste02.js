/*
2) Implemente um método que inverta um array, não utilize métodos nativos do array.
Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]
*/

//método nativo (?)
function reverseArray(arr) {  
  const reverseArr = arr.slice(0).reverse(); //slice para não alterar o original
  return reverseArr;
}

//método manual (?)
  function reverseArray2(arr) {
    const newArr = [];
    for (var i = 0, j = arr.length - 1; i < arr.length; i++, j--) {      
        newArr[i] = arr[j];
    }
    return newArr;
}

console.log(reverseArray([1,2,3,4]));
console.log(reverseArray2([1,2,3,4]));