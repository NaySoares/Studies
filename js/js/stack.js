function Stack() {
  var items = [];

  this.push = function(element) {
    //add new element
    items.push(element);
  }

  this.pop = function() {
    //remove last element
    return items.pop();
  }

  this.peek = function() {
    //returns the element at the top of the stack
    return items[items.length - 1];
  }

  this.isEmpty = function() {
    //verifies that the stack is empty
    return items.length === 0;
  }

  this.clear = function() {
    //clear the stack
    return items = [];
  }
  
  this.size = function() {
    //returns the size of the stack
    return items.length;
  }

  this.print = function() {
    //print the stack
    console.log(items.toString());
  }
}

//implementation
var stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
console.log(stack.size());
stack.print();
stack.clear();

//example of stack
function baseConverter(decNumber, base) {
  var restStack = [],
  rest,
  baseString = '',
  digits = '0123456789ABCDEF'

  while(decNumber > 0) {
    rest = Math.floor(decNumber % base)
    restStack.push(rest)
    decNumber = Math.floor(decNumber / base)
  }

  while(restStack.length > 0) {
    baseString += digits[restStack.pop()]
  } 

  return baseString
}

//converting 148 of decimal to hexadecimal
console.log(baseConverter(148, 16))
