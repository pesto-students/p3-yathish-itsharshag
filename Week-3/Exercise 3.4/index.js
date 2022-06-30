function createStack() {
  let items = [];
  return (function () {
    return {
      push: function (item) {
        items.push(item);
      },
      pop: function () {
        items.pop();
      },
      print: function () {
        console.log(items);
      },
    };
  })();
}

let stack = createStack();

console.log(stack.items); // Prints undefined
stack.push(4); // Pushes a value
stack.print(); // Prints [4]
