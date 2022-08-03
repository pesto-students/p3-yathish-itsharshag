// Question: https://leetcode.com/problems/implement-queue-using-stacks/
// Time complexity (push): O(1)
// Time complexity (pop): O(n)
// Space complexity: O(n)

var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

MyQueue.prototype.pop = function () {
  let length = 0;
  while (true) {
    let pop = this.stack1.pop();
    if (pop === undefined) {
      break;
    }
    this.stack2.push(pop);
  }

  let valueToReturn = null;
  let isFirstIteration = true;

  while (true) {
    let pop = this.stack2.pop();
    if (pop === undefined) {
      break;
    }
    if (isFirstIteration) {
      valueToReturn = pop;
      isFirstIteration = false;
      continue;
    }
    this.stack1.push(pop);
  }

  return valueToReturn;
};

MyQueue.prototype.peek = function () {
  let lastValue = null;

  while (true) {
    let pop = this.stack1.pop();
    if (pop === undefined) {
      break;
    }
    lastValue = pop;
    this.stack2.push(pop);
  }

  while (true) {
    let pop = this.stack2.pop();
    if (pop === undefined) {
      break;
    }
    this.stack1.push(pop);
  }
  return lastValue;
};

MyQueue.prototype.empty = function () {
  return this.stack1.length == 0;
};
