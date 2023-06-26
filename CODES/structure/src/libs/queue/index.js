/*
 * @Author: Lee
 * @Date: 2021-08-03 11:25:47
 * @LastEditors: Lee
 * @LastEditTime: 2023-06-21 14:00:27
 */

// 普通队列
export class Queue {
  constructor() {
    this.items = [];
  }

  // 入队
  enqueue(element) {
    this.items.push(element);
  }

  // 出队
  dequeue() {
    return this.items.shift();
  }

  // 返回队头元素
  front() {
    if (this.isEmpty()) return null;
    return this.items[0];
  }

  // 判断队列是否为空
  isEmpty() {
    return this.items.length === 0;
  }

  // 返回队列的大小
  size() {
    return this.items.length;
  }

  // 清空队列
  clear() {
    this.items = [];
  }
}

// 优先级队列
export class PriorityQueue extends Queue {
  enqueue(element, priority) {
    // 1. 创建QueueElement对象
    const queueElement = { element, priority };
    // 2. 根据优先级插入到合适的位置
    let inserted = false;
    for (let i = 0; i < this.items.length; i++) {
      if (priority < this.items[i].priority) {
        this.items.splice(i, 0, queueElement);
        inserted = true;
        break;
      }
    }
    // 3. 如果优先级最高，则插入到队尾
    if (!inserted) {
      this.items.push(queueElement);
    }
  }
}
