function Dictionary() {
  var items = {};

  this.set = function(key, value) {
    //Add a new item
    items(key) = value
  }

  this.delete = function(key) {
    //Delete a item of the dictionary using key
    if(has(key)) {
      delete items[key]
      return true
    }
    return false
  }
  
  this.has = function(key) {
    //Verify if the key exists
    return items.hasOwnProperty(key)
  }

  this.get = function(key) {
    //Returns the value of the key
    return this.has(key) ? items[key] : undefined
  }

  this.clear = function() {
    //Clear the dictionary
    items = {}
  }

  this.size = function() {
    //Returns the size of the dictionary
    return Object.keys(items).length
  }

  this.keys = function() {
    //Returns all keys of the dictionary
    return Object.keys(items)
  }

  this.values = function() {
    //Returns all values of the dictionary
    var values = []
    keys = Object.keys(items)
    
    for(var i = 0; i < keys.length; i++) {
      values.push(items[keys[i]])
    }
    return values
  }

  this.getItems = function() {
    return items
  }
}

var dic = new Dictionary();

dic.set('Maria', 'first wall')
dic.set('Rose', 'second wall')
dic.set('Sina', 'third wall')

console.log(dic.has('Sina'))
console.log(dic.size())
console.log(dic.get('Maria'))
console.log(dic.keys())
dic.clear()