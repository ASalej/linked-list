// Unit tests
function dll_unittest() {
    function DontWorkMsg(func_name) {
      return "Function " + func_name + " probably don't work";
    }
    
    alert ("Unit tests started");
    
    var lst = new DoublyLinkedList();
    lst.append(42);
    lst.append(24);
    
    assert (lst.size() === 2, DontWorkMsg("size"));
    assert (lst.at(1).data === 24, DontWorkMsg("at"));
    assert (lst.at(0).data === 42, DontWorkMsg("at"));
    
    lst.insertAt(0, 13);
    lst.insertAt(2, 52);
    
    var lst_output = [];
    
    for (var i = 0; i < lst.size(); i++) {
        lst_output.push(lst.at(i).data);
    }
    
    assert (lst_output === [13, 42, 52, 24], DontWorkMsg("insertAt"));
    assert (false);
}
// end of Unit tests

  function DoublyLinkedList() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }
  
  DoublyLinkedList.prototype._createNewNode = function (data) {
    var node = {
      data: data,
      next: null,
      prev: null
    };
    return node;
  };
  
  DoublyLinkedList.prototype.head = function () {
    return this._head;
  };

  DoublyLinkedList.prototype.tail = function () {
    return this._tail;
  };

  DoublyLinkedList.prototype.append = function (data) {
    var node = this._createNewNode(data);
    if (this._length === 0) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      node.prev = this._tail;
      this._tail = node;
    }
    this._length++;
    return node;
  };

  DoublyLinkedList.prototype.at = function (index) {
    if (index >= 0 && index < this._length) {
      var node = this._head;
      while (index--) {
        node = node.next;
      }
      return node;
    }
  };
  
  DoublyLinkedList.prototype.insertAt = function (index, data) {
    var node = this._createNewNode(data);
    var after_node = this.at(index);
    if (this._head === after_node) {
      this._head = node;
      after_node.prev = node;
      node.next = after_node;
    } else {
      node.prev = after_node.prev;
      node.next = after_node;
      
      after_node.prev.next = node;
      after_node.prev = node;
    }

    this._length++;

    return this;
  }
  
  DoublyLinkedList.prototype.deleteAt = function (index) {
       if (index > -1 && index < this._length) {
            var current = this._head;
            var previous, i = 0;
            if (index === 0) {
                this._head = current.next;
            } else {
                while(i++ < index) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this._length--;
            return current.data;            
        } else {
            return null;
        }
   }
   
  DoublyLinkedList.prototype.reverse = function () {
      var length = this.length;
      for (var i = 0; i < length/2; i++){
          var tmp
      }

  }
  
  DoublyLinkedList.prototype.indexOf = function (data) {
      var listData = this.at(node).data;
      var i = 
      while(.at(i).data == data)
      if (== data){
          return 
      } else {
          return -1;
      }
  }