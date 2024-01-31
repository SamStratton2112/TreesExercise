/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;
    // initialize the total with the root value 
    let total = this.root.val;
    // add each child to total
    function addVals(treeNode){
      // if a child node has children add those children to total
      for(let child of treeNode.children){
        if(child.children.length > 0){
          addVals(child)
        }
        total += child.val
      }
    }
    addVals(this.root);
    return total;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root) return(0);
    let evenCount = this.root.val % 2 === 0? 1:0;

    function checkEven(treeNode){
      for(let child of treeNode.children){
        if(child.val%2 === 0){
          evenCount += 1
        }
        if(child.children.length>0){
          checkEven(child)
        }
      }
    }
    checkEven(this.root)
    return evenCount
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root) return 0;
    // determine count start with root val
    let greaterCount = this.root.val>lowerBound?1:0;

    function checkGreater(treeNode){
      for(let child of treeNode.children){
        if(child.children.length>0){
          checkGreater(child)
        }
        if(child.val>lowerBound) greaterCount +=1;
      }
    }
    checkGreater(this.root)
    return greaterCount;
  }
}

module.exports = { Tree, TreeNode };
