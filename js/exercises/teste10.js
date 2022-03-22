/*
10) Implemente um método que encontre os valores comuns entre dois arrays.
Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]
*/

function arrCommon(arrA, arrB){
  var newArray = [];
  
  arrA.forEach(function(a){
    for (var i=0; i < arrB.length; i++)
      if(a === arrB[i]) newArray.push(a)
  })

  return newArray;
}

console.log(arrCommon([6, 8], [8, 9]));