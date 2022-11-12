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

function Hashtable() {
  var table = [];

  var ValuePair = function (key, value) {
    this.key = key;
    this.value = value;
    this.toString = function() {
      return '[' + this.key + ' - ' + this.value + ']'
    }
  }

  this.put = function(key, value) {
    //insert element
    var position = loseloseHashCode(key)
    
    if(table[position] === undefined) {
      table[position] = new LinkedList()
    }
    table[position].append(new ValuePair(key, value))
  }

  this.remove = function(key) {
    //remove a element
    var position = loseloseHashCode(key)

    if(table[position] === !undefined) {
      var current = table[position].getHead()

      while(current.next) {
        if(current.element.key === key) {
          table[position].remove(current.element)
          if(table[position].isEmpty()) {
            table[position] = undefined
          }
          return true
        }
        current = current.next
      }
      if(current.element.key === key) {
        table[position].remove(current.element)
        if(table[position].isEmpty) {
          table[position] = undefined
        }
        return true
      }
    }
    return false
  }

  this.get = function(key) {
    //returns a value if the key exists
    var position = loseloseHashCode(key)

    if(table[position] !== undefined) {
      var current = table[position].getHead()

      while(current.next) {
        if(current.element.key === key) {
          return current.element.value
        }
        current = current.next
      }
      if(current.element.key === key) {
        return current.element.value
      }
    }
    return undefined
  }

  var loseloseHashCode = function(key) {
    //returns the hash
    var hash = 0
    for(var i = 0; i < key.length; i++) {
      hash += charCodeAt(i)
    }
    return hash % 37
  }

  this.print = function() {
    for(var i = 0; i <table.length; i++) {
      if(table[i] !== undefined) {
        console.log(i + ' : ' + table[i])
      }
    }
  }

}

var hash = new Hashtable();

hash.put('Squirtle', 'water');
hash.put('Charmander', 'fire');
hash.put('Bulbasaur', 'grass');

console.log(hash.get('Charmander'));
hash.remove('Charmander');
console.log(hash.get('Charmander'));

hash.put('Pidgey', 'normal');
hash.put('Charmander', 'fire');
hash.put('Vulpix', 'fire');
hash.put('Zubat', 'poison');
hash.put('Parasect', 'bug');
hash.put('Psyduck', 'water');
hash.put('Poliwag', 'water');
hash.put('Magnemite', 'eletric');

hash.print()