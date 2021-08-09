# 一、概述

## 1. 概念

**什么是数据结构？**

民间定义：

- 数据结构是数据对象，以及存在于该对象的实例和组成实例的数据元素之间的各种关系。这些联系可以通过定义相关的函数来给出。 --《数据结构、算法与应用》
- 数据结构是 ADT（抽象数据类型 Abstract Data Type）的物理实现。 --《数据结构与算法分析》
- 数据结构（data structure）是计算机中存储、组织数据的方式。通常情况下，精心选择的数据结构可以带来最优效率的算法。 --中文维基百科（*）

自己的角度来理解：

- 数据结构就是在计算机中，存储和组织数据的方式。
- 我们知道，计算机中数据量非常庞大，如何以高效的方式组织和存储数据呢？
- 这就好比一个庞大的图书馆中存放了大量的数据，我们不仅仅把书放进去，还应在合适的位置找出来。

**什么是算法？**

- 算法就是解决问题的办法/步骤逻辑；
- 数据结构的实现，离不开算法；

## 2. 数据结构分类

常见的数据结构

![](./IMGS/adt.png)

**逻辑结构**

- 集合结构（无关系）
- 线性结构（一对一）-- 链表
- 树形结构（一对多）
- 图形结构（多对多）

**物理结构**

- 顺序结构
- 链式结构

# 二、算法分析

## 1. 时间复杂度

时间复杂度是指执行这个算法所需要的计算工作量，其复杂度反映了程序执行时间**「随输入规模增长而增长的量级」**，在很大程度上能很好地反映出算法的优劣与否。一个算法花费的时间与算法中语句的**「执行次数成正比」**，执行次数越多，花费的时间就越多。一个算法中的执行次数称为语句频度或时间频度，记为T(n)，其中n称为问题的规模，当n不断变化时，它所呈现出来的规律，我们称之为时间复杂度。比如：

![img](https://juejin.im/equation?tex=T(n)=n^2+1)

与

![img](https://juejin.im/equation?tex=T(n)=5n^2+2n+1)

虽然算法的时间频度不一样，但他们的时间复杂度却是一样的，**「时间复杂度只关注最高数量级，且与之系数也没有关系」**。通常一个算法由控制结构（顺序，分支，循环三种）和原操作（固有数据类型的操作）构成，而算法时间取决于两者的综合效率。

## 2. 空间复杂度

空间复杂度是对一个算法在运行过程中临时占用存储空间大小的量度，所谓的临时占用存储空间指的就是代码中**「辅助变量所占用的空间」**，它包括为参数表中**「形参变量」**分配的存储空间和为在函数体中定义的**「局部变量」**分配的存储空间两个部分。我们用 S(n)=O(f(n))来定义，其中n为问题的规模(或大小)。通常来说，只要算法不涉及到动态分配的空间，以及递归、栈所需的空间，空间复杂度通常为0(1)。一个一维数组`a[n]`，空间复杂度O(n)，二维数组为O(n^2)。

## 1. 时间复杂度分析 -- 大O表示法

通过“大O”标识符 <u>粗略</u> 估算时间复杂度。

函数渐近增长推导大O阶的表示法有以下几个规则可以用使用:

- 用常数1取代运行时间中的所有加法常数；
- 在修改后运行次数中，只保留高阶项；
- 如果最高阶项存在，且常数因子不为1，则去除与这个项相乘的常数；



**常见大O阶**

![](./IMGS/big-o.jpg)

下面是对常见时间复杂度的一个总结：

| 描述         | 增长的数量级 | 说明     | 举例           |
| ------------ | ------------ | -------- | -------------- |
| 常数级别     | $1$          | 普通语句 | 将两个数相加   |
| 对数级别     | $log(n)$     | 二分策略 | 二分查找       |
| 线性级别     | $n$          | 循环     | 找出最大元素   |
| 线性对数级别 | $nlog(n)$    | 分治思想 | 归并排序       |
| 平方级别     | $n^2$        | 双层循环 | 检查所有元素对 |
| 立方级别     | $n^3$        | 三层循环 | 检查所有三元组 |
| 指数级别     | $2^n$        | 穷举查找 | 检查所有子集   |

时间复杂度从低到高一次为：

**O(1) < O(logn) < O(n) < O(nlogn)** < O(n^2) < O(n^3)

## 2. 空间复杂度分析

# 三、数据结构

## 1. 数组

数组是一种线性结构，是一堆连续的内存位置，用来保存一些值。

数组查询（通过下标）快，但是插入和删除性能不佳。

<u>为什么说数组查询快，插入和删除消耗性能高？</u>

- 数组是连续的空间；
- 数组扩容/移位消耗性能
- 比如一个数组有100个元素，要在第一个插入一个新的元素，那么需要将已有的100个元素全部移位，腾出第一个位置来插入元素，所以消耗性能就多，删除亦是如此。而查询快是因为数组可以通过下标直接获取元素。

<u>JavaScript数组底层如何实现？</u>

[参考这里 >>](https://www.voidcanvas.com/javascript-array-evolution-performance)

 JavaScript 数组是作为哈希映射或字典实现的，而不是连续的.它可以使用各种数据结构来实现，其中之一是链表

## 2. 栈 

我们知道数组是一种线性结构，并且可以在数组的任意位置插入和删除数据。但是有时候，我们为了实现某些功能，必须对这种任意性加以限制，而栈和队列，就是比较常见的受限的线性结构。栈的特点是：**后进先出（LIFO)**



![](./IMGS/stack.png)

**数组实现：**

```javascript
/**
 * 栈结构方法
 * - push(data)：添加一个新元素到栈顶位置
 * - pop()：移除栈顶的元素，同时返回被移除的元素
 * - peek()：返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）
 * - isEmpty()：如果栈里没有任何元素就返回true，否则返回false
 * - size()：返回栈里的元素个数。这个方法和数组的length很类似。
 */
class Stack {
  constructor() {
    this.items = [];
  }
  push(data) {
    this.items.push(data);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}
```

栈结构实现10进制转二进制：

```js
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
```

## 3. 队列

队列（queue），是一种受限的数据结构（线性表），具有 **先进先出（FIFO First In First Out）**的特点。

受限之处在于队列只允许在表的前端（front）进行删除操作，而在表的后端（rear）进行插入操作。

![](./IMGS/queue.jpg)

打印队列/线程队列/事件队列/任务队列

**数组实现：**

```js
/**
 * 1. enqueue(element)：向队列尾部添加一个（或多个）新的项
 * 2. dequeue()：移除队列的第一（即排在队列最前面的）项，并返回被移除的元素
 * 3. front()：返回队列中第一个元素-最先被添加，也将是最先被移除的元素。队列不做任何变动（不溢出元素，只返回元素信息）
 * 4. isEmpty()：如果队列中不包含任何元素，返回true，否则返回false
 * 5. size()：返回队列包含的元素个数，与数组的length属性雷士
 */
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

module.exports = Queue;
```

应用场景：**击鼓传花**

## 4. 优先级队列

优先级队列的特点：

- 我们知道，普通的队列插入一个元素，数据会被放在后端，并且需要前面所有的元素都处理完成后才会处理前面的数据。
- 但是优先级队列，在插入一个元素的时候会考虑该数据的优先级。
- 和其他数据优先级进行比较，
- 比较完成后，可以得出这个元素在队列中正确的位置。
- 其他处理方式，和基本队列的处理方式一样。

**数组实现：**

```js
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
```

## 5. 链表

链表（线性结构）和数组一样，可用于 **存储一系列的元素**，但是链表和数组的实现机制完全不同。

**回顾 >**

数组：

- 要存储多个元素，数组（或称为列表）可能是 **最常用** 的数据结构。
- 几乎每一种编程语言都有默认实现 **数组结构** 。
- 但是数组也有很多缺点：
  - 数组的创建通常需要申请一段 **连续的内存空间** （一整块的内存），并且大小是固定的（大多数编程语言数组都是固定的），所以当当前数组 **不能满足容量需求** 时，需要 **扩容** 。（一般情况下是申请一个更大的数组，比如2倍，然后将原数组中的元素复制过去）
  - 而且在数组开头或中间位置插入数据的成本很高，需要进行大量元素的位移。
  - 尽管我们已经学过的JavaScript的Array类方法可以帮我们做这些事，但背后的原理依然是这样。

**链表 >**

- 要存储多个元素，另外一个选择就是链表。
- 但不同于数组，链表中的元素在内存中 **不必是连续的空间**。
- 链表的每个元素由一个存储 **元素本身的节点** 和一个 **指向下一个元素的引用** （有些语言称为指针或者链接）组成。

相对于数组，链表有一些优点：

- 内存空间不是必须连续的，可以充分利用计算机的内存，实现灵活的 **内存动态管理**。
- 链表不必在创建时就 **确定大小**，并且大小可以 **无限的延伸** 下去。
- 链表在 **插入和删除** 数据时，**时间复杂度** 可以达到 $O(1)$ ，相对数组效率高很多。

相对于数组，链表有一些缺点：

- 链表访问任何一个位置的元素时，都需要 **从头开始访问** （无法跳过第一个元素访问任何一个元素）。
- 无法通过下标直接访问元素，需要从头一个个访问，直到找到对应的元素。



**那到底什么链表呢？**

其实上面我们已经简单的提过了链表的结构，我们这里更加详细的分析一下，链表类似于火车：有一个火车头，火车头会链接一个节点，节点上有乘客（类似于数据），并且这个节点会链接下一个节点，以此类推。

![](./IMGS/linked_list_train.png)

我们来看一个更加形象的图：





![](./IMGS/linked_list_node.png)

### 5.1. 单向链表

- 单向链表只能 **从头遍历到尾** 或者 **从尾遍历到头** （一般从头到尾）。
- 也就是说链表相连的过程是 **单向** 的。
- 实现的原理是上一个节点中有一个指向下一个的 **引用**。

**实现：**

```javascript
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

```

### 5.2. 双向链表

单向列表有一个比较明显的缺点：

- 我们可以轻松的到达 **下一个节点**，但是回到 **前一个节点** 是很难的，但是，实际开发中，经常会遇到需要回到上一个节点的情况。
- 举个例子：假设一个文本编辑用 **链表** 来存储文本，每一行用一个 **String对象** 存储在 **链表的一个节点** 中，当编辑器用户 **向下移动光标** 时，链表直接操作到 **下一个节点** 即可，但是当用于将光标 **向上移动** 呢？这个时候为了回到 **上一个节点**，我们可能需要 **从first开始**，一次走到想要的节点上。

双向链表，既可以 **从头遍历到尾**，又可以 **从尾遍历到头**，也就是链表相连的过程是 **双向** 的。

实现原理：一个节点既有 **向前连接的引用**，也有一个 **向后连接的引用**。

双向链表可以有效地解决单向链表中提到的问题。

**双向链表有什么缺点呢？**

- 每次在 **插入或删除** 某个节点时，需要处理四个引用，而不是两个，也就是实现起来要困难一些。
- 并且相当于单向链表，必然占用 **内存空间更大** 一些。
- 但是这些缺点和我们使用起来的方便程度相比，是微不足道的。

**双向链表的特点：**

![](./IMGS/linked_list_double.png)

- 可以使用一个head和一个tail分别指向头部和尾部的节点。
- 每个节点都由三部分组成：前一个节点的指针（prev）、保存的元素（item）、后一个节点的指针（next）。
- 双向链表的第一个节点的prev是null。
- 双向链表的最后一个节点的next是null。

**实现：**

```js
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
```

### 5.3. 拓展

**链表实现栈：**

```javascript
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
```

## 6. 哈希表

### 6.1. 概述

哈希表是一种非常重要的数据结构。几乎所有的编程语言都有 **直接或者间接** 的应用这种数据结构。

哈希表通常是基于 **数组** 实现的，但是相对于数组，它也有很多的优势：

- 它可以提供非常快速的 **插入-删除-查找操作**
- 无论多少数据，插入和删除值需要接近常量的时间：即 $O(1)$ 的时间级，实际上，只需要 **几个机器指令** 即可完成
- 哈希表的速度比 **树还要快**，基本可以瞬间查找到想要的元素
- 哈希表相对于树来说编码要容易很多

哈希表相对数组的一些不足：

- 哈希表中的数据是 **没有顺序** 的，所以不能以一种固定的方式（比如从小到大）来遍历其中的元素。
- 通常情况下，哈希表中的key是 **不允许重复** 的，不能放置相同的key，用于保存不同的元素。

### 6.2. 案例引入

**那么，哈希表到底是什么呢？**

哈希表不是特别容易理解，它不像数组和链表，甚至是树一样直接画出你就知道它的结构，甚至是原理了。

**哈希表的结构就是数组**，但是她神奇的地方在于对 **下标值的一种变换**，这种变换我们可以称之为 **哈希函数**，通过哈希函数可以获取到 **HashCode**。

不着急，我们慢慢来人事它到底什么？

接下来，我们通过三个案例，案例需要你挑选某种数据结构，而你会发现最好的选择就是哈希表：

- 案例一：公司使用一种数据结构来保存所有员工；
- 案例二：设计一个数据结构，保存联系人和电话；
- 案例三：使用一种数据结构存储单词信息，比如有50000个单词，找到单词后每个单词有自己的翻译、读音、应用等等。

---

**@案例一**

> **案例介绍：**

假如一家公司有1000个员工，现在我们需要将这些员工的信息使用某种数据结构保存起来，你会采用什么数据结构呢？

>  **方案分析：**

**方案1 --- 数组：**

一种方案是按照顺序将所有的员工依次存入一个长度为1000的数组中，每个员工的信息都保存在数组的某个位置上。但是我们要查看某个具体员工的信息怎么办呢？一个个找吗？不太好找。数组最大的优势是什么？通过下标值去获取信息。所以为了可以通过数组快速定位到某个员工，最好给员工信息中添加一个员工编号（工号），而编号对应的就是员工的下标值。当查找某个员工的信息时，通过员工编号可以快速定位到员工的信息位置。

**方案2 --- 链表：**

链表对应插入和删除数据有一定的优势，但是对于获取员工的信息，每次都必须从头遍历到尾，这种方式显然不是特别适合我们这里。

**最终方案：**

这样看，最终方案似乎就是数组了，但是数组还是有缺点，什么缺点呢？假如我想查看一下 **张三**这位员工的信息，但是我们不知道 **张三**的员工编号，你怎么办呢？当然，你说我可以问他，但是你每查找一个员工都是问一下这个员工的编号么？不合适。线性查找？效率非常的低。能不能有一种办法，让 **张三**的名字和他的员工编号产生直接的关系呢？也就是说通过 **张三** 这个名字，我就能获取到他的索引值，而再通过索引值我就能获取到 **张三** 的信息呢？这样的方案已经存在了，其实就是使用哈希函数，让某个key的信息和索引值对应起来。

---

**@案例二**

> **案例介绍：**

选择一个数据结构，保存联系人和电话。

> **方案分析：**

**方案1 --- 数组**

使用数组来存储联系人和电不是非常合适，因为如果需要查询某个联系人，就需要从数组中一个个取出数据和查询的联系人比较，效率非常的低。

**方案2 --- 链表**

链表和数组一样，效率非常低。

**方案3 --- 有没有一种方案，可以将联系人姓名和数组的下标值对应呢？**

那么我们就可以让联系人的名字作为下标值，来获取这个联系人对应的电话。但是联系人的名字（字符串）可以作为下标值么？放入不可以。所以你需要一种方案将字符串转成下标值，就是哈希函数。

---

**@案例三**

> **案例介绍：**

使用一种数据结构存储单词信息，比如有50000个单词，找到单词后每个单词有自己的翻译、读音、应用等等。

> **方案分析：**

**方案1 --- 数组**

这个案例更加明显能感受到数组的缺陷，我们拿到一个单词 `JavaScript`，我想知道这个单词的翻译/读音/应用，怎么可以从数组中查到这个单词的位置呢？线性查找？50000次比较？如果你使用数组来实现这个功能，效率会非常非常低，而且你一定没有学习过数据结构。

**方案2 --- 链表**

不需要考虑了吧？

**方案3 --- 有没有一种方案，可以将单词转成数组的下标值呢？**

如果单词转成数组的下标值，那么以后我们要查找某个单词的信息，直接按照下标值一步即可访问到想要的元素。

### 6.3. 字母转数字

似乎所有的案例都指向了一个目标：**将字符串转成下标值**。但是，怎样才能将一个字符串转成数组的下标值呢？

**单词/字符串** 转 **下标值**，其实就是 **字母/文字** 转 **数字**。怎么转？

现在我们需要设计一种方案，可以将 **单词** 转成 **适当的下标**：

- 其实计算机中有 **很多的编码方案** 就是用数字代替单词的字符，就是 **字符编码*
- 比如 **ASCLL编码**：a是97，b是98，依次类推，122标识z。
- 我们也可以设计一个 **自己的编码系统**，比如 a是1，b是2，c是3，依次类推，z是26.
- 当然我们可以加上 **空格用0代替**，就是 **27个字符**（不考虑大写问题）
- 但是，有了编码系统后，一个单词如何转成数字呢？

> **方案一：数字相加**

一种转换单词的 **简单方案** 就是把单词的每个字符的编码求和，例如单词 **cats转成数字**：$3 + 1 + 20 + 19 = 43$​，那么43就作为cats单词的下标存在数组中。

**问题： **按照这种方案有一个很明显的问题就是 **很多单词** 最终的下标可能 **都是43**。

- 比如was/tin/give/tend/moan/tick等等。
- 我们知道数组中 **一个下标值** 位置 **只能存储一个数据**。
- 如果存入后来的数据，必然回造成 **数据的覆盖**。
- 一个下标存储这么多单词显然是 **不合理** 的。

> **方案二：幂的连乘**

现在，我们想通过一种算法，让cats转成数字后 **不那么普通**，**数字相加** 的方案就有些 **过于普通** 了。

有一种方案就是使用 **幂的连乘**，什么是幂的连乘呢？

其实我们平时用的 **大于10的数字**，可以用一种 **幂的连乘来表示它** 的唯一性，比如：
$$
7654 = 7 * 10^3 + 6 * 10^2 5 * 10 + 4
$$
我们的单词也可以使用这种方案来标识，比如 ：
$$
cats = 3 * 27^3 + 1 * 27^2 + 20 * 27 + 17 = 60337
$$
这样得到的数字可以 **基本** 保证它的 **唯一性**，不会和别的单词重复。

**问题：**如果一个单词是 `zzzzzzzzzz`（一般英文单词不会超过10个字符），那么得到的数字超过 $7000000000000$，数组可以标识这么大的下标值么？

而且就算能够创建这么大的数组，事实上有很多是无效的单词，创建这么大的数组是没有意义的。

> **两种方案总结：**

- 第一种方案（把数字相加求和）产生的 **数组下标太少**。
- 第二种方案（与27的幂相乘求和）产生的 **数组下标又太多**。

### 6.3. 认识哈希化

现在需要一种 **压缩方法**，把幂的连乘方案系统中得到的 **巨大整数范围** 压缩到 **可接受的数组范围** 中。

对于英文词典，多大的数组才合适呢？

- 如果只有50000个单词，可能会定义一个长度为50000的数组。
- 但是实际情况中，往往需要 **更大的空间** 来存储这些单词，因为我们不能保证单词会映射到每一个位置。
- 比如两倍的大小：100000

如何压缩呢？

- 现在，就找一种方法，把0到超过  $7000000000000$ 的范围，**压缩** 为从 0 到 100000.

- 有一种简单的方法就是使用 **取余操作符**，它的作用是得到一个数被另外一个数整除后的 **余数**。

取余操作的实现：

- 为了看到这个方法如何工作，我们先来看一个 **小点的数字范围** 压缩到一个 **小点的空间** 中。
- 假设把从 0 ~ 199 的数字使用 `largeNumber` 表示；压缩为从0到9的数字，使用 `smallRange` 表示。
- 下标值的结果：`index = largeNumber % smallRange;`
- 当一个数被10整除时，余数一定在 0~9 之间；
- 比如 `13 % 10 = 3; 157 % 10 = 7`
- 当然，这中间还是会有重复，不过重复的数量明现变小了，因为我们的数组是100000，而只有50000个单词。
- 就好比，你在 0~199 中间选取5个数字，放在这个长度为10的数组中，也会重复，但是重复的概率非常小（后面我们会讲到真的发生了重复应该怎么解决）

### 6.4. 哈希表的一些概念

了解了前面关于哈希表的一些内容后，相信你应该懂了哈希表的原理了，我们来看看几个概念：

- **哈希化**：将 **大数字** 转化成 **数组范围内下标** 的过程，我们就称之为 **哈希化**；
- **哈希函数**：通常我们会将 **单词** 转成 **大数字**，**大数字** 在进行 **哈希化** 的代码实现放在一个函数中，这个函数我们就称为 **哈希函数**。
- **哈希表**：最终将数据插入到的这个 **数组**，对整个 **结构的封装**，我们就称之为是一个 **哈希表**。

但是，我们还有问题需要解决：

- 虽然，我们在一个100000的数组中，放50000个单词已经足够。
- 但是，通过哈希化后的下标值依然可能会 **重复**，如何解决这种重复的问题呢？







# 四、排序算法

