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

function inOrderTraversal(node) {
  if(node !== null) {
    inOrderTraversal(node['left'])
    console.log(node['value'])
    inOrderTraversal(node['right'])
  }
  return
}

inOrderTraversal(myBinaryTree['parent'])
