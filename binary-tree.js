/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(!this.root) return 0;

    function minDepth(node) {
      // if its the only node then set depth to 1
      if (node.left === null && node.right === null) return 1;
      //get right side and add 1 to depth 
      if (node.left === null) return minDepth(node.right) + 1;
      //get left side and add 1 to depth 
      if (node.right === null) return minDepth(node.left) + 1;
      // if both left and right exist then compare depths
      return (
        Math.min(minDepth(node.left), minDepth(node.right)) + 1
      );
    }

    return minDepth(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(!this.root) return 0;

    function maxDepth(node) {
      // if its the only node then set depth to 1
      if (node.left === null && node.right === null) return 1;
      //get right side and add 1 to depth 
      if (node.left === null) return maxDepth(node.right) + 1;
      //get left side and add 1 to depth 
      if (node.right === null) return maxDepth(node.left) + 1;
      // if both left and right exist then compare depths
      return (
        Math.max(maxDepth(node.left), maxDepth(node.right)) + 1
      );
    }

    return maxDepth(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let sumMax = 0;

    function getMaxSum(node) {
      if (node === null) return 0;
      // determine left and right sums and compare them 
      const leftSum = getMaxSum(node.left);
      const rightSum = getMaxSum(node.right);
      sumMax = Math.max(sumMax, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    getMaxSum(this.root);
    return sumMax;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    // get stack 
    let toVisitStack = [this.root];
    let closest = null;

    while (toVisitStack.length) {
      // take value from front until empty array remains
      let current = toVisitStack.shift();
      let higherThanLowerBound = current.val > lowerBound;
      let reassignClosest = current.val < closest || closest === null;

      // Update the closest value if the current value is higher than the lowerBound
      if (higherThanLowerBound && reassignClosest) {
        closest = current.val;
      }

      if (current.left) toVisitStack.push(current.left);
      if (current.right) toVisitStack.push(current.right);
    }

    return closest;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
