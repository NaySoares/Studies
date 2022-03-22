function DoublyLinkedList() {
  var Node = function (element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }

  var length = 0;
  var head = null;
  this.prev = null;

  this.append = function (element) {
    //add new element
    var node = new Node(element),
      current

    if (head === null) {
      head = node;
      tail = node;
    } else {
      current = head

      while (current.next) {
        current = current.next
      }

      current.next = node;
      tail = node;
    }
    length++;
  }

  this.insert = function (position, element) {
    //add a element in especific position
    if (position >= 0 && position <= length) {
      var node = new Node(element),
        current = head,
        previous,
        index = 0

      if (position === 0) {
        if (!head) {
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node;
          head = node;
        }
      } else if (position === length) {
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
        current.prev = node;
        node = previous;
      }
      length++
      return true;
    } else {
      return false
    }
  }

  this.removeAt = function (position) {
    //remove the element of position
    if (position > -1 && position < length) {
      var current = head,
        previous,
        index = 0

      if (position === 0) {
        head = current.next;

        if (length === 1) {
          tail = null;
        } else {
          head.prev = null
        }
      } else if (position === length - 1) {
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        current.next.prev = previous
      }
      length--
      return current.element
    } else {
      return null
    }
  }

  this.remove = function (element) {
    //remove the element gived
    var index = this.indexOf(element);
    return this.removeAt(index);
  }

  this.indexOf = function (element) {
    //returns the element of position index
    var current = head,
      index = 0

    while (current) {
      if (element === current.element) {
        return index
      }
      index++;
      current = current.next;
    }
    return - 1;
  }

  this.isEmpty = function () {
    //verifies if the list is empty
    return length === 0;
  }

  this.size = function () {
    //returns the size of the list
    return length;
  }

  this.getHead = function () {
    //returns first element of list
    return head;
  }

  this.toString = function () {
    //convert the list to string
    var current = head,
      string = ''

    while (current) {
      string + -current.element + ' '
      current = current.next
    }

    return string;
  }

  this.print = function () {
    //print the list
    console.log(this.toString())
  }
}

//implementation
var dll = new DoublyLinkedList();

dll.append('Kiara');
dll.append('Jett');
dll.append('Rize');
dll.insert(0, 'Myke');
dll.insert(4, 'Tyler');
dll.insert(2, 'Jennifer');
dll.print();
dll.removeAt(0);
dll.print();