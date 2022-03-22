/*
8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]
*/

function arrUnique(arr) {
  var newArray = [];

  arr.forEach(function(element) {
    if(typeof element === "object") {
      for(var i = 0; i < element.length; i++) {
        newArray.push(element[i]);
      }
    } else {
      newArray.push(element);
    }
  })

  return newArray
}

console.log(arrUnique([1, 2, [3], [4, 5]]));