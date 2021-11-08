/*
 * @Author: Lee
 * @Date: 2021-07-30 16:47:28
 * @LastEditors: Lee
 * @LastEditTime: 2021-11-08 15:01:49
 */

import { Stack } from './structure/stack/index.js';
import { Queue, PriorityQueue } from './structure/queue/index.js';
import { LinkedList, DoubleLinkedList } from './structure/linked_list/index.js';
import { HashTable } from './structure/hash_table/index.js';
import { BinarySearchTree } from './structure/binary_search_tree/index.js';

// 栈
console.log('-----------------------------------------------');
console.log('------------ 01. 【栈】');
console.log('-----------------------------------------------');
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
  let binString = '';
  while (!stack.isEmpty()) {
    binString += stack.pop();
  }
  return binString;
}
console.log(dec2bin(10)); // 1010
console.log(dec2bin(100)); // 1100100
console.log(dec2bin(1000)); // 1111101000

console.log('-----------------------------------------------');
console.log('------------ 02. 【队列】');
console.log('-----------------------------------------------');

const queue = new Queue();
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');
queue.enqueue('D');
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

console.log(`击鼓传花：`, passGame(['A', 'B', 'C', 'D', 'E'], 3));

console.log('-----------------------------------------------');
console.log('------------ 03. 【优先级队列】');
console.log('-----------------------------------------------');

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('李鸿耀', 1);
priorityQueue.enqueue('苟玉梅', 3);
priorityQueue.enqueue('王进锋', 2);
priorityQueue.enqueue('余惠勤', 5);
priorityQueue.enqueue('宁玮君', 4);
console.log(priorityQueue.items);
console.log(priorityQueue.front());

console.log('-----------------------------------------------');
console.log('------------ 04. 【链表】');
console.log('-----------------------------------------------');

const linkedList = new LinkedList();
linkedList.append('成都');
linkedList.append('重庆');
linkedList.append('贵阳');
linkedList.append('昆明');
console.log(linkedList);
linkedList.insert(2, '自贡');
console.log(linkedList);
console.log(linkedList.get(0));
console.log(linkedList.get(1));
console.log(linkedList.get(2));

console.log(linkedList.indexOf('自贡'));
console.log(linkedList.indexOf('乐山'));

console.log(linkedList.removeAt(2));
console.log(linkedList.removeAt(3));
console.log(linkedList);

console.log(linkedList.get(1));
linkedList.update(1, '广都');
console.log(linkedList.get(1));

linkedList.remove('成都');
console.log(linkedList);

console.log(linkedList.isEmpty());
console.log(linkedList.size());

console.log('-----------------------------------------------');
console.log('------------ 05. 【双向链表】');
console.log('-----------------------------------------------');
const doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.append('周瑜');
doubleLinkedList.append('廉颇');
console.log(doubleLinkedList);
doubleLinkedList.insert(0, '小乔');
console.log(doubleLinkedList);
doubleLinkedList.insert(3, '刘备');
console.log(doubleLinkedList);
doubleLinkedList.insert(2, '曹操');
console.log(doubleLinkedList);
console.log('第0个元素：', doubleLinkedList.get(0));
console.log('第3个元素：', doubleLinkedList.get(3));
console.log('第4个元素：', doubleLinkedList.get(4));
console.log('刘备的下标是：', doubleLinkedList.indexOf('刘备'));
console.log(doubleLinkedList.removeAt(0));
console.log(doubleLinkedList);
console.log(doubleLinkedList.removeAt(3));
console.log(doubleLinkedList);
console.log(doubleLinkedList.removeAt(1));
console.log(doubleLinkedList);
doubleLinkedList.remove('廉颇');
console.log(doubleLinkedList);

console.log(doubleLinkedList.size());
console.log(doubleLinkedList.isEmpty());

console.log('-----------------------------------------------');
console.log('------------ 06. 【哈希函数】');
console.log('-----------------------------------------------');

const hashTale = new HashTable();

// 存储
/*
hashTale.put('name', 'lee');
hashTale.put('job', '前端工程师');
hashTale.put('address', '成都市高新区');
hashTale.put('job', '全栈工程师');
console.log(hashTale.storage);

// 获取
console.log(hashTale.get('job'));
console.log(hashTale.get('age'));

// 删除
console.log(hashTale.remove('job'));
console.log(hashTale.storage);

// 其他方法
console.log(hashTale.isEmpty());
console.log(hashTale.size());*/

hashTale.put('aaa', 111);
hashTale.put('bbb', 111);
hashTale.put('ccc', 111);
hashTale.put('ddd', 111);
hashTale.put('eee', 111);
hashTale.put('fff', 111);
console.log(hashTale);

hashTale.put('ggg', 222);
console.log(hashTale);

hashTale.isPrime(35)


console.log('-----------------------------------------------');
console.log('------------ 07. 二叉搜索树');
console.log('-----------------------------------------------');


const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(2);
bst.insert(7);
bst.insert(12);
console.log(bst);