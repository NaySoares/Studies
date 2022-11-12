function Set() {
  var items = {}

  this.add = function(value) {
    //Add a new item
    if(!this.has(value)){
      items[value] = value;
      return true
    }
    return false
  }

  this.delete = function(value) {
    //remove a item
    if(this.has(value)) {
      delete items[value]
      return true
    }
    return false
  }

  this.has = function(value) {
    //verify if the value exists
    return items.hasOwnProperty(value)
  }

  this.clear = function() {
    //delete all values in Items
    items = {}
  }

  this.size = function() {
    //returns the size of the items
    return Object.keys(items).length
  }

  this.values = function() {
    //returns all values in Items
    var values = [];
    keys = Object.keys(items)
    for(var i = 0; i < keys.length; i++) {
      values.push(items[keys[i]])
    }
    return values
  }

  this.union = function(otherSet) {
    //union items with other Set
    var unionSet = new Set(),
    values = this.values()

    for(var i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }

    values = unionSet.values()

    for(var i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }

    return unionSet
  }

  this.intersection = function(otherSet) {
    //intersection between items with otherSet
    var intersectionSet = new Set(),
    values = this.values()

    for(var i = 0; i < values.length; i++) {
      if(otherSet.has(values[i])) {
        intersectionSet.add(values[i])
      }
    }
    return intersectionSet
  }

  this.difference = function(otherSet) {
    //difference between items with otherSet
    var diffSet = new Set(),
    values = this.values()

    for(var i = 0; i < values.length; i++) {
      if(!otherSet.has(values[i])) {
        diffSet.add(values[i])
      }
    }
    return diffSet
  }

  this.subSet = function(otherSet) {
    //verify if items is a subset of otherSet
    if(this.size() > otherSet.size()) {
      return false
    } else {
      var values = this.values()

      for(var i = 0; i < values.length; i++) {
        if(!otherSet.has(values[i])) {
          return false
        }
      }
      return true
    }

  }
}

//implementation
var set = new Set();

set.add(1);
set.add(2);
set.add(3);
console.log(set.values());
set.clear();
console.log(set.values());
set.add(1);
set.add(2);
set.add(3);

var newSet = new Set();

newSet.add(3);
newSet.add(4);
newSet.add(5);

var superSet = set.unionSet(newSet);
console.log(superSet.values())