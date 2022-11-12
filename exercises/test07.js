/*
7) Implemente um método que compare a igualdade de dois arrays e retorne
um valor booleano.
Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true
*/

function arrSame(arrA, arrB){
  if (arrA.length != arrB.length) {
    return false;
  } else {
    var compare = arrA.every(function(element, index) {
      return element === arrB[index]
    })
    return compare;
  }
}

console.log(arrSame([1,2,3,4],[1,2,3,4]))