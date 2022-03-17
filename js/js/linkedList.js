function LinkedList() {
  var Node = function(element) {
    this.element = element;
    this.next = null;
  }

  var length = 0;
  var head = null;

  this.append = function(element) {
    //add new element
    var node = new Node(element),
    current

    if(head === null) {
      head = node;
    } else {
      current = head;

      while(current.next) {
        current = current.next
      }

      current.next = node;
    }
    length++;
  }

  this.insert = function(position, element) {
    //add a element in especific position
    if(position >= 0 && position <= length) {
      var node = new Node(element),
      previous,
      index = 0

      if(position === 0) {
        node.next = current;
        head = node;
      } else {
        while(index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      length++
      return true;
    } else {
      return false;
    }
  }

  this.removeAt = function(position) {
    //remove the element of position
    if(position > -1 && position < length) {
      var current = head,
      previous,
      index = 0

      if(position === 0) {
        head = current.next;
      } else {
        while(index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next;
      }
      length--
      return current.element;
      
    } else {
      return null;
    }
  }

  this.remove = function(element) {
    //remove the element gived
    var index = this.indexOf(element);
    return this.removeAt(index);
  }

  this.indexOf = function(element) {
    //returns the element of position index
    var current = head,
    index = 0

    while(current) {
      if(element === current.element) {
        return index
      }
      index++;
      current = current.next;
    }
    return - 1;
  }

  this.isEmpty = function() {
    //verifies if the list is empty
    return length === 0;
  }

  this.size = function() {
    //returns the size of the list
    return length;
  }

  this.getHead = function() {
    //returns first element of list
    return head;
  }

  this.toString = function() {
    //convert the list to string
    var current = head,
    string = ''

    while(current) {
      string +-current.element + ' '
      current = current.next
    }

    return string;
  }

  this.print = function() {
    //print the list
    console.log(this.toString())
  }
}

//implementation
var linkedList = new LinkedList();

linkedList.append('Marcus')
linkedList.append('Linaria')
linkedList.append('Eva')
linkedList.insert(1, 'Tom')
linkedList.print()
console.log(linkedList.isEmpty())
console.log(linkedList.size())
console.log(linkedList.getHead())
