/*
 * @Author: Lee
 * @Date: 2021-08-04 10:48:15
 * @LastEditors: Lee
 * @LastEditTime: 2021-08-04 17:08:06
 */

// 节点对象
class LinkedListNode {
  constructor(data) {
    // 保存元素
    this.data = data;
    // 指向下一个节点
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  // 向链表尾部添加一个新的项
  append(data) {
    // 1. 根据data创建Node对象
    const newNode = new LinkedListNode(data);
    // 2. 追加到最后
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }
  // 向链表的特定位置插入一个新的项
  insert(position, data) {
    // 1. 判断越界问题
    if (position < 0 || position > this.length) return false;
    // 2. 创建新的节点
    const newNode = new LinkedListNode(data);
    // 3. 插入元素
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let index = 0;
      let current = this.head;
      let previous = null;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = newNode;
      newNode.next = current;
    }
    this.length++;
    return true;
  }
  // 获取对应位置的元素
  get(position) {
    // 1. 处理越界问题
    if (position < 0 || position > this.length - 1) return null;
    // 2. 查找该位置的元素
    let index = 0;
    let current = this.head;
    while (index++ < position) {
      current = current.next;
    }
    return current.data;
  }
  // 返回元素在链表中的索引，如果链表中没有该元素则返回-1
  indexOf(data) {
    // 1. 获取第一个元素
    let current = this.head;
    // 2. 开始查找
    let index = 0;
    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }
  // 移除某个位置的元素
  removeAt(position) {
    // 1. 处理越界
    if (position < 0 || position > this.length - 1) return null;
    // 2. 删除元素
    let index = 0;
    let current = this.head;
    let previous = null;
    if (position === 0) {
      this.head = current.next;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.length--;
    return current.data;
  }
  // 修改某个位置的元素
  update(positon, data) {
    // 1. 处理越界
    if (positon < 0 || positon > this.length - 1) return null;
    // 2. 删除position位置的元素
    const result = this.removeAt(positon);
    // 3. 插入position位置data元素
    this.insert(positon, data);
    return result;
  }
  // 移除链表中的一项
  remove(data) {
    // 1. 获取元素位置
    const index = this.indexOf(data);
    // 2. 删除该位置的元素
    if (index !== -1) {
      this.removeAt(index);
    }
  }
  // 判断是否为空链表
  isEmpty() {
    return this.length === 0;
  }
  // size
  size() {
    return this.length;
  }
}

/**
 * 双向链表
 */
class DoubleLinkedListNode extends LinkedListNode {
  constructor(data) {
    super(data);
    this.prev = null;
  }
}
export class DoubleLinkedList extends LinkedList {
  constructor() {
    super();
    this.tail = null;
  }
  // 向链表尾部添加一个新的项
  append(data) {
    // 1. 根据data创建Node对象
    const newNode = new DoubleLinkedListNode(data);
    // 2. 追加元素
    if (!this.head) {
      // 原来没有任何元素
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }
  // 向链表的特定位置插入一个新的项
  insert(position, data) {
    // 1. 判断越界问题
    if (position < 0 || position > this.length) return false;
    // 2. 创建新的节点
    const newNode = new DoubleLinkedListNode(data);
    // 3. 判断多种插入情况
    if (position === 0) {
      // 头部插入
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    } else if (position === this.length) {
      // 尾部插入
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      // 中间插入
      let index = 0;
      let current = this.head;
      let previous = null;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      // 交换节点信息
      previous.next = newNode;
      newNode.prev = previous;
      newNode.next = current;
      current.prev = newNode;
    }
    this.length++;
    return true;
  }
  // 获取对应位置的元素
  get(position) {
    // 1. 处理越界问题
    if (position < 0 || position > this.length - 1) return null;
    // 2. 查找该位置的元素
    let index = 0;
    let current = this.head;
    while (index++ < position) {
      current = current.next;
    }
    return current.data;
  }
  // 返回元素在链表中的索引，如果链表中没有该元素则返回-1
  indexOf(data) {
    // 1. 获取第一个元素
    let current = this.head;
    // 2. 开始查找
    let index = 0;
    while (current) {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }
  // 移除某个位置的元素
  removeAt(position) {
    // 1. 处理越界
    if (position < 0 || position > this.length - 1) return null;
    // 2. 删除元素
    let index = 0;
    let current = this.head;
    let previous = null;
    if (position === 0) {
      this.head = current.next;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.length--;
    return current.data;
  }
  // 修改某个位置的元素
  update(positon, data) {
    // 1. 处理越界
    if (positon < 0 || positon > this.length - 1) return null;
    // 2. 删除position位置的元素
    const result = this.removeAt(positon);
    // 3. 插入position位置data元素
    this.insert(positon, data);
    return result;
  }
  // 移除链表中的一项
  remove(data) {
    // 1. 获取元素位置
    const index = this.indexOf(data);
    // 2. 删除该位置的元素
    if (index !== -1) {
      this.removeAt(index);
    }
  }
  // 判断是否为空链表
  isEmpty() {
    return this.length === 0;
  }
  // size
  size() {
    return this.length;
  }
}
