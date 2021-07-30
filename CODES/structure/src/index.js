/*
 * @Author: Lee
 * @Date: 2021-07-30 16:47:28
 * @LastEditors: Lee
 * @LastEditTime: 2021-07-30 17:03:36
 */

const Stack = require("./structure/stack");


// 栈
console.log('----------------------- 【栈结构】 -----------------------')
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