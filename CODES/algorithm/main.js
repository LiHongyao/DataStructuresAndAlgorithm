/*
 * @Author: Lee
 * @Date: 2023-07-03 11:14:32
 * @LastEditors: Lee
 * @LastEditTime: 2023-07-04 19:22:40
 * @Description:
 */

// 1. 验证冒泡排序
console.log('冒泡排序：', Algorithm.bubbleSort([1, 3, 2, 8, 6, 5, 7, 4]));

// 2. 验证选择排序
console.log('选择排序：', Algorithm.selectionSort([1, 3, 2, 8, 6, 5, 7, 4]));

// 3. 验证插入排序
console.log('插入排序：', Algorithm.insertionSort([1, 3, 2, 8, 6, 5, 7, 4]));

// 4. 验证希尔排序
console.log('希尔排序：', Algorithm.shellSort([1, 3, 2, 8, 6, 5, 7, 4]));

// 4. 验证快速排序
const arr = [1, 3, 2, 8, 6, 5, 7, 4];
Algorithm.quickSort(arr);
console.log('快速排序：', arr);
