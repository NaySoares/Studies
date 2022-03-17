function Queue() {
  var items = [];

  this.enqueue = function(element) {
    //add new item
    items.push(element);
  }

  this.dequeue = function() {
    //remove a item
    return items.shift();
  }

  this.front = function() {
    //returns the first item
    return items[0];
  }

  this.isEmpty = function() {
    //verifies if the queue is empty
    return items.length === 0;
  }

  this.size = function() {
    //returns the size of the queue
    return items.length;
  }

  this.print = function() {
    //print the queue
    console.log(items.toString())
  }
}

//implementation
var queue = new Queue();

queue.enqueue('John');
queue.enqueue('Mary');
queue.enqueue('Rose');
queue.print();
console.log(queue.front());
queue.dequeue();
console.log(queue.front());
queue.print();


//example of circular queue
function hotPotato(nameList, number) {
  var queue = new Queue();

  for(var i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  var eliminated = ''

  while(nameList.size() > 1) {
    for(var i = 0; i < number; i++) {
      queue.enqueue(queue.dequeue())
    }
    eliminated = queue.dequeue();
    console.log(eliminated + ' was eliminated from the game');
  }
  return queue.dequeue()
}

var names = ['John', 'Mary', 'Rose', 'Bob', 'Sid', 'Taylor']
var winner = hotPotato(names, 9)

console.log('The winner is' + winner)