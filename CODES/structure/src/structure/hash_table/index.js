/*
 * @Author: Lee
 * @Date: 2021-10-26 16:43:12
 * @LastEditors: Lee
 * @LastEditTime: 2021-10-26 18:16:35
 */

export class HashTable {
  constructor() {
    this.storage = []; // 作为数组，存放元素
    this.count = 0; // 用于记录HashTable存放的数量
    this.limit = 11; // 表示数组当前的常数
  }
  /**
   * 哈希函数
   * 1. 将字符串转换成比较大的数字:hashCod
   * 2. 将数字大的hashCode压缩到数组的（大小）范围内
   * @param {*} str
   * @param {*} size
   * @returns 下标
   */
  hashFunc(str, size) {
    // 1. 定义hashCode
    let hashCode = 0;
    // 2. 霍纳算法来计算hashCode的值
    for (let i = 0; i < str.length; i++) {
      hashCode = 31 * hashCode + str.charCodeAt(i);
    }
    // 3. 取余操作压缩到数组的（大小）范围内
    const index = hashCode % size;
    return index;
  }
  /**
   * 放入元素：HashMap -> { key, value }
   * @param {*} key
   * @param {*} value
   */
  put(key, value) {
    // 1. 根据key映射到index
    const index = this.hashFunc(key, this.limit);
    
  }
}
