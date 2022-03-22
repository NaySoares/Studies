/*
1) Implemente um método que crie um novo array baseado nos valores passados.
Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']
*/

function newArray(lg,content) {
  const arr = [];
  
  for (let i = 0; i < lg; i++) {
    arr.push(content);
  }
  return arr;
};

console.log(newArray(3,"a"))
