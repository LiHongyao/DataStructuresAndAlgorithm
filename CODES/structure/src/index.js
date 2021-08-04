/*
 * @Author: Lee
 * @Date: 2021-07-30 16:47:28
 * @LastEditors: Lee
 * @LastEditTime: 2021-08-04 17:09:59
 */

import { Stack } from "./structure/stack/index.js";
import { Queue, PriorityQueue } from "./structure/queue/index.js";
import { LinkedList, DoubleLinkedList } from "./structure/linked_list/index.js";
// 栈
console.log("----------------------- 【栈结构】 -----------------------");
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.items);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());

// eg：栈结构实现10进制转二进制
function dec2bin(num) {
  // 1. 创建Stack
  const stack = new Stack();
  // 2. 循环取余数
  while (num > 0) {
    let remainder = num % 2;
    num = Math.floor(num / 2);
    stack.push(remainder);
  }
  // 3. 拼接字符串
  let binString = "";
  while (!stack.isEmpty()) {
    binString += stack.pop();
  }
  return binString;
}
console.log(dec2bin(10)); // 1010
console.log(dec2bin(100)); // 1100100
console.log(dec2bin(1000)); // 1111101000

console.log("----------------------- 【队列】 -----------------------");

const queue = new Queue();
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");
queue.enqueue("D");
console.log(queue.items);
console.log(queue.dequeue());
console.log(queue.items);
console.log(queue.front());
console.log(queue.size());

// eg：击鼓传花

function passGame(nameList, num) {
  // 1. 创建队列
  const queue = new Queue();
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }
  // 2. 循环让这些人进入到队列中
  while (queue.size() > 1) {
    for (let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue());
    }
    queue.dequeue();
  }
  return queue.front();
}

console.log(`击鼓传花：`, passGame(["A", "B", "C", "D", "E"], 3));

console.log("----------------------- 【优先级队列】 -----------------------");

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("李鸿耀", 1);
priorityQueue.enqueue("苟玉梅", 3);
priorityQueue.enqueue("王进锋", 2);
priorityQueue.enqueue("余惠勤", 5);
priorityQueue.enqueue("宁玮君", 4);
console.log(priorityQueue.items);
console.log(priorityQueue.front());

console.log("----------------------- 【链表】 -----------------------");

const linkedList = new LinkedList();
linkedList.append("成都");
linkedList.append("重庆");
linkedList.append("贵阳");
linkedList.append("昆明");
linkedList.insert(2, "自贡");
console.log(linkedList);
console.log(linkedList.get(0));
console.log(linkedList.get(1));
console.log(linkedList.get(2));

console.log(linkedList.indexOf("自贡"));
console.log(linkedList.indexOf("乐山"));

console.log(linkedList.removeAt(2));
console.log(linkedList.removeAt(3));
console.log(linkedList);

console.log(linkedList.get(1));
linkedList.update(1, "广都");
console.log(linkedList.get(1));

linkedList.remove("成都");
console.log(linkedList);

console.log(linkedList.isEmpty());
console.log(linkedList.size());

console.log("----------------------- 【双向链表】 -----------------------");
const doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.append("周瑜");
doubleLinkedList.append("廉颇");
console.log(doubleLinkedList);
doubleLinkedList.insert(0, "小乔");
console.log(doubleLinkedList);
doubleLinkedList.insert(3, "刘备");
console.log(doubleLinkedList);
doubleLinkedList.insert(2, "曹操");
console.log(doubleLinkedList);