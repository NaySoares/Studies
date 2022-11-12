/*
5) Implemente um método que retorne um array, sem os itens passados por
parâmetro depois do array de entrada. Entrada do método ([5,4,3,2,5], 5,3),
Resultado do método: [4,2]
*/

function arrOutput(arr, arg1, arg2) {
  var newArray = [];
  arr.forEach(function(arg){
      if(arg !== arg1 && arg !== arg2) {
        newArray.push(arg)
      }
  })
  return newArray
}

console.log(arrOutput([5,4,3,2,5], 5,3));