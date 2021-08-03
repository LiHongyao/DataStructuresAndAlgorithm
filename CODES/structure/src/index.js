/*
 * @Author: Lee
 * @Date: 2021-07-30 16:47:28
 * @LastEditors: Lee
 * @LastEditTime: 2021-08-03 17:08:00
 */

const Stack = require("./structure/stack");
const {Queue, PriorityQueue} = require("./structure/queue");

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
  for(let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }
  // 2. 循环让这些人进入到队列中
  while(queue.size() > 1) {
    for(let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue());
    }
    queue.dequeue();
  }
  return queue.front();
}

console.log(`击鼓传花：`, passGame(['A', 'B', 'C', 'D', 'E'], 3));


console.log("----------------------- 【优先级队列】 -----------------------");

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue("李鸿耀", 1);
priorityQueue.enqueue("苟玉梅", 3);
priorityQueue.enqueue("王进锋", 2);
priorityQueue.enqueue("余惠勤", 5);
priorityQueue.enqueue("宁玮君", 4);
console.log(priorityQueue.items);
console.log(priorityQueue.front());