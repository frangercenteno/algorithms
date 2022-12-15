class Stack {
  stack: Array<number>;
  constructor() {
    this.stack = [];
  }

  get length() {
    return this.stack.length;
  }

  push(item: number) {
    this.stack.push(item);
  }

  pop() {
    this.stack.pop();
  }

  peek() {
    return this.stack[this.length - 1];
  }

  isEmty() {
    return this.length === 0;
  }
}