function main_dll_func()
{
    var lst = new DoublyLinkedList();
    lst.append(42);
    lst.append(24);
    
    alert (lst.size());
    alert (lst.at(1).data);
    alert (lst.at(0).data);
    
    lst.insertAt(0, 13);
    lst.insertAt(2, 52);
    
    var lst_output = [];
    
    for (var i = 0; i < lst.size(); i++) {
        lst_output.push(lst.at(i).data);
    }
    
    alert (lst_output);
}


  function DoublyLinkedList() {
    // pointer to first item
    this._head = null;
    // pointer to the last item
    this._tail = null;
    // length of list
    this._length = 0;
    
    return this;
  }
  
/*
 * Returns the node at the head of the list.
*/
  DoublyLinkedList.prototype.head = function () {
    return this._head;
  };

/*
 * Returns the node at the tail of the list.
*/
  DoublyLinkedList.prototype.tail = function () {
    return this._tail;
  };

/*
 * Returns the size of the list.
*/
  DoublyLinkedList.prototype.size = function () {
    return this._length;
  };

  // Wraps data in a node object.
  DoublyLinkedList.prototype._createNewNode = function (data) {
    var node = {
      data: data,
      next: null,
      prev: null
    };
    return node;
  };

    /*
     * Appends a node to the end of the list.
     */
  DoublyLinkedList.prototype.append = function (data) {
    var node = this._createNewNode(data);

    if (this._length === 0) {

      // first node, so all pointers to this
      this._head = node;
      this._tail = node;
    } else {

      // put on the tail
      this._tail.next = node;
      node.prev = this._tail;
      this._tail = node;
    }

    // update count
    this._length++;

    // return node;
    return this;
  };

     /*
     * Return node from specified place.
     */
  DoublyLinkedList.prototype.at = function (index) {
    if (0 <= index && index < this._length) {
        var cur_node = this._head;
        for (var i = 0; i < index; i++) {
            cur_node = cur_node.next;
        }
        return cur_node;
    } else {
        throw "Wrong index";
    }
  };
  
     /*
     * param: index, data; 
     * inserts item by index; new item should be placed at the specified index.
     */
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
  };

/*
 * Removes the item at the index.
*/
  DoublyLinkedList.prototype.remove = function (index) {
    throw "Not implemented";
  };