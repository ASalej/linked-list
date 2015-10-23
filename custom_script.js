// Unit tests
function dll_unittest() {
    function DontWorkMsg(func_name) {
      return "Function " + func_name + " probably don't work";
    }
    
    function assert(condition, message) {
      if (!condition) {
          throw message || "Assertion failed";
      }
    }
    
    alert ("Unit tests started");
    
    var lst = new DoublyLinkedList();
    lst.append(42);
    lst.append(24);
    
    assert (lst.at(1).data === 24, DontWorkMsg("at"));
    assert (lst.at(0).data === 42, DontWorkMsg("at"));
    
    lst.insertAt(0, 13);
    lst.insertAt(2, 52);
    
    assert (lst.at(2).data === 52, DontWorkMsg("insertAt"));
    assert (lst.at(0).data === 13, DontWorkMsg("insertAt"));
    
    assert (lst.at(0) === lst.head(), DontWorkMsg("head"));
    assert (lst.at(lst.size() - 1) === lst.tail(), DontWorkMsg("tail"));
    
    // indexOf
    assert (lst.indexOf(13) === 0, DontWorkMsg("indexOf"));
    assert (lst.indexOf(42) === 1, DontWorkMsg("indexOf"));
    assert (lst.indexOf(52) === 2, DontWorkMsg("indexOf"));
    assert (lst.indexOf(24) === 3, DontWorkMsg("indexOf"));
    
    
    // deleteAt
    lst.deleteAt(0);
    lst.deleteAt(1);
    
    assert (lst.at(0).data === 42, DontWorkMsg("deleteAt"));
    assert (lst.at(1).data === 24, DontWorkMsg("deleteAt"));
    
    // each
    var fun = function inc(node) {
      node.data++;
    }
    
    lst.each(fun);
    
    assert (lst.at(0).data === 43, DontWorkMsg("each"));
    assert (lst.at(1).data === 25, DontWorkMsg("each"));
    
    alert ("Unit tests passed ^_^");
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
  
  DoublyLinkedList.prototype.size = function () {
    return this._length;
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
   
  DoublyLinkedList.prototype.each = function (fun) {
    // it must work. if data exist it returns i and after -1
    var node = this._head;
    var i = 0;
    while (i < this._length) {
        fun(node);
        node = node.next;
        i++;
    }
    
    return this;
  }
  
  DoublyLinkedList.prototype.indexOf = function (data) {
    // it must work. if data exist it returns i and after -1
    var node = this._head;
    var i = 0;
    while (i != this.length) {
        if (node.data == data) {
            return i;
        }
        node = node.next;
        i++;
    }
    return -1;
  }