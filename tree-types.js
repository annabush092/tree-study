// Nodes are in ascending order from left to right.
//So if a parent has two children, the order from least to greatest would be left child, the node itself, right child.
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

// Nodes are in ascending order from top to bottom.
// The parent is the minimum value
const myMinHeap = {
  parent: {
    left: {
      left: {
        left: null,
        value: 4,
        right: null
      },
      value: 2,
      right: {
        left: null,
        value: 5,
        right: null
      }
    },
    value: 1,
    right: {
      left: {
        left: null,
        value: 6,
        right: null
      },
      value: 3,
      right: {
        left: null,
        value: 7,
        right: null
      }
    }
  }
}

// Nodes are in descending order from top to bottom.
// The parent is the maximum value
const myMinHeap = {
  parent: {
    left: {
      left: {
        left: null,
        value: 7,
        right: null
      },
      value: 9,
      right: {
        left: null,
        value: 6,
        right: null
      }
    },
    value: 10,
    right: {
      left: {
        left: null,
        value: 5,
        right: null
      },
      value: 8,
      right: {
        left: null,
        value: 4,
        right: null
      }
    }
  }
}

// a non-binary tree in which each node is a character, and each path down the tree provides a different word.
// ends of words are indicated with a null node.
// aka a prefix tree.
const myTrie = {
  a: {
    end: null, // 'a'
    n: {
      end: null, // 'an'
      d: {
        end: null // 'and'
      }
    },
    p: {
      p: {
        end: null, // 'app'
        l: {
          e: {
            end: null // 'apple'
          }
        }
      }
    }
  }
}
