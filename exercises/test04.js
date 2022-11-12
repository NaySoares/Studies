/*
4) Implemente um método que a partir de um array de arrays, converta em um
objeto com chave e valor.
Entrada do método ([["c",2],["d",4]]), Resultado do método: {c:2, d:4}
*/

function convertArray(arr) {
  var obj = {};
  var arrKey = [];
  var arrValue = [];

  arr.forEach(function(a) {
     if (a[0]) arrKey.push(a[0]);
     if (a[1]) arrValue.push(a[1]);
  })
  
  for (var i = 0; i < arrKey.length; i++) {
    obj[arrKey[i]] = arrValue[i]; 
  }

  return obj
};

console.log(convertArray([["c",2],["d",4]]));