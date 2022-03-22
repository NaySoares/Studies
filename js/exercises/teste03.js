/*
3) Implemente um método que limpe os itens desnecessários de
um array (false, undefined, strings vazias, zero, null).
Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]
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