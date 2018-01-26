//defined originally in tree-types.js
const myBinaryTree = {
  parent: {
    left: {
      left: {
        left: null,
        value: 1,
        right: null
      },
      value: 2,
      right: {
        left: null,
        value: 3,
        right: null
      }
    },
    value: 4,
    right: {
      left: {
        left: null,
        value: 5,
        right: null
      },
      value: 6,
      right: {
        left: null,
        value: 7,
        right: null
      }
    }
  }
}

// Visits the nodes in ascending order, if you are in a binary search tree.
//If not, this just means visiting nodes in order from the left child, the node itself, and then the right child.
function inOrderTraversal(node) {
  if(node !== null) {
    //recursive call to get down through the tree on both left and right sides.
    inOrderTraversal(node['left'])
    console.log(node['value'])
    inOrderTraversal(node['right'])
  }
  return
}
//test
inOrderTraversal(myBinaryTree['parent'])

// Visit the parent before both its children. This makes the root the first node.
function preOrderTraversal(node) {
  if(node !== null) {
    console.log(node['value'])
    preOrderTraversal(node['left'])
    preOrderTraversal(node['right'])
  }
  return
}
//test
preOrderTraversal(myBinaryTree['parent'])

// Visit the parent after both its children. This makes the root the last node.
function postOrderTraversal(node) {
  if(node !== null) {
    postOrderTraversal(node['left'])
    postOrderTraversal(node['right'])
    console.log(node['value'])
  }
  return
}
//test
postOrderTraversal(myBinaryTree['parent'])
