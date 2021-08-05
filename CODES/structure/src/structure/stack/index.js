/*
 * @Author: Lee
 * @Date: 2021-07-30 16:45:30
 * @LastEditors: Lee
 * @LastEditTime: 2021-08-05 17:25:30
 */

/**
 * 栈结构方法
 * - push(element)：添加一个新元素到栈顶位置
 * - pop()：移除栈顶的怨怒是，同时返回被移除的元素
 * - peek()：返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）
 * - isEmpty()：如果栈里没有任何元素就返回true，否则返回false
 * - size()：返回栈里的元素个数。这个方法和数组的length很类似。
 */

/**
 * 数组实现
export class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    if (!this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}
*/

/**
 * 链表实现
 */
import { DoubleLinkedList } from "../linked_list/index.js";
export class Stack {
  constructor() {
    // 创建链表
    this.items = new DoubleLinkedList();
  }
  push(data) {
    this.items.append(data);
  }
  pop() {
    return this.items.removeAt(this.items.size() - 1);
  }
  peek() {
    return this.items.get(this.items.size() - 1);
  }
  isEmpty() {
    return this.items.size() === 0;
  }
  size() {
    return this.items.size();
  }
}
