/*
 * @Author: Lee
 * @Date: 2021-07-30 16:45:30
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-21 14:00:22
 */

export class Stack {
  constructor() {
    this.items = [];
  }
  // 将元素压入栈顶
  push(element) {
    this.items.push(element);
  }
  // 弹出栈顶元素并返回
  pop() {
    return this.items.pop();
  }
  // 返回栈顶元素但不弹出
  peek() {
    if (this.items.isEmpty) return null;
    return this.items[this.items.length - 1];
  }
  // 判断栈是否为空
  isEmpty() {
    return this.items.length === 0;
  }
  // 返回栈的大小
  size() {
    return this.items.length;
  }
  // 清空栈
  clear() {
    this.items = [];
  }
}

/**
 * 2. 链表实现
 */
// import { DoubleLinkedList } from '../linked_list/index.js';
// export class Stack {
//   constructor() {
//     // 创建链表
//     this.items = new DoubleLinkedList();
//   }
//   push(data) {
//     this.items.append(data);
//   }
//   pop() {
//     return this.items.removeAt(this.items.size() - 1);
//   }
//   peek() {
//     return this.items.get(this.items.size() - 1);
//   }
//   isEmpty() {
//     return this.items.size() === 0;
//   }
//   size() {
//     return this.items.size();
//   }
// }
