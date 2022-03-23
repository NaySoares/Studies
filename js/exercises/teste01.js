/*
Implement a method to create a new array, based on the values given. 

The input of method: (3, a)
The output of method: [’a’, ’a’, ‘a’]
*/

function newArray(lg,content) {
  const arr = [];
  
  for (let i = 0; i < lg; i++) {
    arr.push(content);
  }
  return arr;
};

console.log(newArray(3,"a"))
