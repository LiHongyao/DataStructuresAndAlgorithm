/*
 * @Author: Lee
 * @Date: 2021-08-03 11:25:47
 * @LastEditors: Lee
 * @LastEditTime: 2021-08-03 15:31:17
 */

/**
 * 1. enqueue(element)：向队列尾部添加一个（或多个）新的项
 * 2. dequeue()：移除队列的第一（即排在队列最前面的）项，并返回被移除的元素
 * 3. front()：返回队列中第一个元素-最先被添加，也将是最先被移除的元素。队列不做任何变动（不溢出元素，只返回元素信息）
 * 4. isEmpty()：如果队列中不包含任何元素，返回true，否则返回false
 * 5. size()：返回队列包含的元素个数，与数组的length属性雷士
 */
// 普通队列
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  front() {
    if (this.isEmpty()) return null;
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}
// 优先级队列
class PriorityQueue extends Queue {
  enqueue(element, priority) {
    // 1. 创建QueueElement对象
    const queueElement = { element, priority };
    // 2. 考虑如何插入新的元素
    if (this.isEmpty()) {
      this.items.push(queueElement);
    } else {
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].priority > queueElement.priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if (!added) {
        this.items.push(queueElement);
      }
    }
  }
}
module.exports = {
  Queue,
  PriorityQueue,
};
