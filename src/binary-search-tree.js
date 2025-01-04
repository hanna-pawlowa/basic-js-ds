const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor(){
    this.rootNode = null
  }
  root() {
    return this.rootNode
  }

  add(data) {
    let newNode = new Node(data)

    if (this.rootNode === null) {
      this.rootNode = newNode

      return this
    }

    let current = this.rootNode

    while(current) {
      if (data === current.data) {
        return undefined
      }

      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode

          return this
        }

        current = current.left
      } else {
        if (current.right === null) {
          current.right = newNode

          return this
        }

        current = current.right
      }
    }
  }

  has(data) {
    if (!this.rootNode) {
      return false
    }

    let current = this.rootNode
    let found = false

    while(current && !found) {
      if (data < current.data) {
        current = current.left
      } else if (data > current.data) {
        current = current.right
      } else {
        found = true
      }
    }

    return found;
  }

  find(data) {
   if (!this.rootNode) {
     return false
   }

    let current = this.rootNode
    let found = false

    while(current && !found) {
     if (data < current.data) {
       current = current.left
     } else if (data > current.data) {
       current = current.right
     } else {
       found = current
     }
    }

   if (!found) {
     return null
   }

   return found
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.rootNode) {
      return false
    }

    let current = this.rootNode

    while(current.left !== null) {
      current = current.left
    }

    return current.data
  }

  max() {
    if (!this.rootNode) {
      return false
    }

    let current = this.rootNode

    while(current.right !== null) {
      current = current.right
    }

    return current.data
  }
}

module.exports = {
  BinarySearchTree
};
