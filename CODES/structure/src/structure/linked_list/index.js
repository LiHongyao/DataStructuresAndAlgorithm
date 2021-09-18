/*
 * @Author: Lee
 * @Date: 2021-08-04 10:48:15
 * @LastEditors: Lee
 * @LastEditTime: 2021-09-18 14:06:43
 */

/**
 * 节点对象
 */
class LinkedListNode {
  constructor(data) {
    // 保存元素
    this.data = data;
    // 指向下一个节点
    this.next = null;
  }
}

/**
 * 单向链表
 * - append(data)：向链表尾部添加一个新的项
 * - insert(position, data)：向链表的特定位置插入一个新的项
 * - get(position)：获取对应位置的元素
 * - indexOf(data)：返回元素在链表中的索引，如果链表中没有该元素则返回-1
 * - removeAt(position)：移除某个位置的元素
 * - update(positon, data)：修改某个位置的元素
 * - remove(data)：移除链表中的一项
 * - isEmpty()：判断是否为空链表
 * - size()
 */
export class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(data) {
    // 1. 根据data创建Node对象
    const newNode = new LinkedListNode(data);
    // 2. 追加到最后，考虑两种情况：
    // - 如果当前链表为空链表，直接让head指向新建节点即可；
    // - 否则，依次遍历节点，找到最后一个节点，将其next指向新建节点；
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
  insert(position, data) {
    // 1. 判断越界问题
    if (position < 0 || position > this.length) return false;
    // 2. 创建新的节点
    const newNode = new LinkedListNode(data);
    // 3. 插入元素，考虑两种情况
    // - 如果插入在第1个位置，则将新节点的next指向head，并将head指向新节点。
    // - 否则，遍历找到对应位置的节点（current）和其上一个节点（previous）
    // - 然后将previous.next指向新节点，并将新节点的nex指向current节点即可。
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
  removeAt(position) {
    // 1. 处理越界
    if (position < 0 || position > this.length - 1) return null;
    // 2. 删除元素，考虑两种情况：
    // - 如果移除第1个元素，则直接将head指向head.next即可。
    // - 否则，遍历找到要移除的元素（current）及其上一个元素（previous）
    // - 然后将previous.next指向current.next即可。
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
  update(positon, data) {
    // 1. 处理越界
    if (positon < 0 || positon > this.length - 1) return null;
    // 2. 删除position位置的元素
    const result = this.removeAt(positon);
    // 3. 插入position位置data元素
    this.insert(positon, data);
    return result;
  }
  remove(data) {
    // 1. 获取元素位置
    const index = this.indexOf(data);
    // 2. 删除该位置的元素
    if (index !== -1) {
      this.removeAt(index);
    }
  }
  isEmpty() {
    return this.length === 0;
  }
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
  append(data) {
    // 1. 根据data创建Node对象
    const newNode = new DoubleLinkedListNode(data);
    // 2. 追加元素，考虑两种情况：
    // - 如果当前链表中一个元素都没有，则让head和tail都指向新节点
    // - 否则让最后一个元素的next指向新节点；新节点的prev指向tail；tail指向新节点；
    if (!this.head) {
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
      while (index++ < position) {
        current = current.next;
      }
      // 交换节点信息
      current.prev.next = newNode;
      newNode.prev = current.prev;
      newNode.next = current;
      current.prev = newNode;
    }
    this.length++;
    return true;
  }
  removeAt(position) {
    // 1. 处理越界
    if (position < 0 || position > this.length - 1) return null;
    // 2. 根据不同的情况来删除元素
    let index = 0;
    let current = this.head;
    if (position === 0) {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
    } else if (position === this.length - 1) {
      current = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      while (index++ < position) {
        current = current.next;
      }
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
    this.length--;
    return current.data;
  }
}
