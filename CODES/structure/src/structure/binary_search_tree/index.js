/*
 * @Author: Lee
 * @Date: 2021-11-08 13:48:53
 * @LastEditors: Lee
 * @LastEditTime: 2021-11-15 16:24:46
 */

/**
 * - insert(key)：向树中插入一个新的键。
 * - search(key)：在树中查找一个键,如果节点存在,则返回true ;如果不存在,则返回false。
 * - inOrderTraverse：通过中序遍历方式遍历所有节点。
 * - preOrderTraverse：通过先序遍历方式遍历所有节点。
 * - postOrderTraverse：通过后序遍历方式遍历所有节点。
 * - min：返回树中最小的值/键。
 * - max：返回树中最大的值/键。
 * - remove(key)：从树中移除某 个键。
 */
class BinarySearchTreeNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  _insertNode(node, newNode) {
    if (newNode.key < node.key) {
      // 向左查找
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      // 向右查找
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }
  // 插入：对外暴露的方法
  insert(key) {
    // 1. 根据key创建对应的节点
    const newNode = new BinarySearchTreeNode(key);
    // 2. 判断根节点是否有值
    if (this.root) {
      this._insertNode(this.root, newNode);
    } else {
      this.root = newNode;
    }
  }
}
