/*
 * @Description:
 * @Author: Li-HONGYAO
 * @Date: 2020-12-21 15:51:11
 * @LastEditTime: 2021-03-09 12:07:10
 */

/**
 * 求1 ~ n 的和，使用「高斯求和」算法
 * 高斯求和公式：(首项 + 末项) * 项数 / 2
 * 时间复杂度：O(1)
 * @param {*} n
 */
function sum(n) {
  var sum = ((1 + n) * n) / 2;
  console.log("sum = ", sum);
}
sum(10);

/**
 * 求n!
 * 由于递归每次调用函数都会创建内存执行函数，所以相对于递归求阶乘，此法性能更加。
 * 时间复杂度：O(n)
 * @param {*} n
 */
function factorial(n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  console.log(`${n}! = ${res}`);
}
factorial(3);

/**
 * 冒泡排序
 *
 * 原理：
 * 1. 比较相邻的元素，如果前一个元素比后一个元素大，就交换这两个元素的位置；
 * 2. 对每一对向相邻元素做同样的工作，从开始第一对元素到结尾的最后一对元素。最终最后位置的元素就是最大值；
 * 
 * 时间复杂度：O(n^2)
 */

function bubble(arr) {
  const len = arr.length;
  // 外层循环控制比较的轮数
  for (let i = 0; i < len; i++) {
    // 内层循环控制每一轮比较的次数
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const t = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = t;
      }
    }
  }
  console.log(`冒泡排序后的结果：`, arr);
}

bubble([5, 6, 3, 1, 2, 4]);

/**
 * 选择排序
 *
 * 原理：
 * 1. 每一次遍历的过程中，都假定第一个索引处的元素是最小值，和其他索引处值依次进行比较，如果当前索引处的值大于某个索引处的值，则假定其他某个索引处的值为最小值，最后可以找到最小值所在的索引。
 * 2. 交换第一个索引处和最小值所在的索引处的值。
 *
 * 时间复杂度：O(n^2)
 */

function selectSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    //  定义一个变量，记录最小元素所在的索引，默认为参与选择排序的第一个元素所在的位置
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      // 比较最小索引minIndex处的值和j索引处的值
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // 交换最小元素所在索引minIndex处的值和索引i处的值
    if (minIndex !== i) {
      let t = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = t;
    }
  }
  console.log(`选择排序后的结果：`, arr);
}

selectSort([4, 5, 6, 3, 2, 1]);


/**
 * 插入排序
 *
 * 原理： --- 类似于玩扑克牌
 * 1. 把所有的元素分为两组（已排序/未排序）；
 * 2. 找到未排序的组中的第一个元素，向已经排序的组中进行插入；
 * 3. 「倒序遍历」已经排序的元素，依次和待插入的元素进行比较，直到找到一个元素小于待插入的元素，那么就把待插入元素放到这个位置，其他的元素向后移动一位；
 *
 * 时间复杂度：O(n^2)
 * 
 * 4, 5, 6, 3, 2, 1
 * 4 --- 5, 6, 3, 2, 1
 * 4, 5 --- 6, 3, 2, 1
 * 4, 5, 6 --- 3, 2, 1
 * 3, 4, 5, 6 --- 2, 1
 */

function insertSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let temp = arr[i]; 
    let j = i; 
    for (; j > 0; j--) {
      if (temp >= arr[j - 1]) {
        break; // 当前考察的数大于前一个数，证明有序，退出循环
      }
      arr[j] = arr[j - 1]; // 将前一个数复制到后一个数上
    }
    arr[j] = temp; // 找到考察的数应处于的位置
  }
  console.log(`插入排序后的结果：`, arr);
}
insertSort([4, 5, 6, 3, 2, 1]);


/**
 * 希尔排序 -- 插入排序的改进版本
 *
 * 原理：
 * 1. 选定一个增长量h，按照增长量h作为数据分组的一句，对数据进行分组；
 * 2. 对分好组的每一组数据完成插入排序；
 * 3. 减小增长量，最小减为1，重复第二部操作；
 * 
 * 时间复杂度：O(n^2)
 */



