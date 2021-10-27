/*
 * @Author: Lee
 * @Date: 2021-10-26 16:43:12
 * @LastEditors: Lee
 * @LastEditTime: 2021-10-27 16:53:17
 */

const MAX_LOAD_FACTOR = 0.75;
const MIN_LOAD_FACTOR = 0.25;

export class HashTable {
  constructor() {
    this.storage = []; // 作为数组，存放元素
    this.count = 0; // 用于记录HashTable存放的数量
    this.limit = 7; // 表示数组当前的常数
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
   * 质数判断
   * @param {*} n
   * @returns
   */
  isPrime(n) {
    if (n <= 3) {
      return n > 1;
    }
    const t = Math.ceil(Math.sqrt(n));
    for (let i = 2; i <= t; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  /**
   * 获取质数
   * @param {*} n
   */
  getPrime(n) {
    while (!this.isPrime(n)) {
      n++;
    }
    return n;
  }
  /**
   * 放入/修改元素：HashMap -> { key, value }
   * @param {*} key
   * @param {*} value
   */
  put(key, value) {
    // 1. 根据key获取对应的index
    const index = this.hashFunc(key, this.limit);
    // 2. 根据index获取对应的bucket
    let bucket = this.storage[index];
    // 3. 判断bucket是否存在，如果不存在则创建bucket（为了低耦合，这里直接用数组）
    if (!bucket) {
      bucket = [];
      this.storage[index] = bucket;
    }
    // 4.线性查找bucket中每一个key是否等于传入的key（判断是插入还是修改）
    let override = false;
    for (let i = 0; i < bucket.length; i++) {
      const [k] = bucket[i];
      // 修改
      if (k === key) {
        bucket[i][1] = value;
        override = true;
        break;
      }
    }
    // 5. 如果没有覆盖，那么就是新增
    if (!override) {
      bucket.push([key, value]);
      this.count++;
      if (this.count > this.limit * MAX_LOAD_FACTOR) {
        let newLimit = this.limit * 2;
        newLimit = this.getPrime(newLimit);
        this.resize(newLimit);
      }
    }
  }
  /**
   * 获取元素
   * @param {*} key
   */
  get(key) {
    // 1. 根据key获取index
    const index = this.hashFunc(key, this.limit);
    // 2. 根据下标值获取bucket
    const bucket = this.storage[index];
    if (!bucket) {
      return null;
    }
    // 3. 线性查找
    for (let i = 0; i < bucket.length; i++) {
      const [k, v] = bucket[i];
      if (k === key) {
        return v;
      }
    }
    return null;
  }
  /**
   * 获取元素
   * @param {*}} key
   */
  remove(key) {
    // 1. 根据key获取index
    const index = this.hashFunc(key, this.limit);
    // 2. 根据下标值获取bucket
    const bucket = this.storage[index];
    if (!bucket) {
      return null;
    }
    // 3. 线性查找，删除元素并将其返回
    for (let i = 0; i < bucket.length; i++) {
      const [k, v] = bucket[i];
      if (k === key) {
        bucket.splice(i, 1);
        this.count--;
        // 降容
        if (this.limit > 8 && this.count < this.limit * MIN_LOAD_FACTOR) {
          let newLimit = Math.floor(this.limit / 2);
          newLimit = this.getPrime(newLimit);
          this.resize(newLimit);
        }
        return v;
      }
    }
    return null;
  }
  /**
   * 是否为空
   * @returns
   */
  isEmpty() {
    return this, this.count === 0;
  }
  /**
   * 长度
   * @returns
   */
  size() {
    return this.count;
  }
  /**
   * 扩容/降容
   * @param {*} newLimit
   */
  resize(newLimit) {
    // 1. 保存旧的数组中的内容
    let oldStorage = this.storage;
    // 2. 重置属性
    this.limit = newLimit;
    this.storage = [];
    this.count = 0;
    // 3. 取出oldStorage所有的元素，重新放入到storage
    oldStorage.forEach((bucket) => {
      if (!bucket) {
        return;
      }
      for (let i = 0; i < bucket.length; i++) {
        const [k, v] = bucket[i];
        this.put(k, v);
      }
    });
  }
}
