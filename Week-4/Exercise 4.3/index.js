const maxIterations = 10;

const Fibonacci = {
  [Symbol.iterator]: function () {
    let first = 0;
    let second = 1;
    let iteration = 0;

    return {
      next: function () {
        let newValue = first + second;
        first = second;
        second = newValue;

        if (iteration < maxIterations) {
          iteration += 1;

          return {
            value: newValue,
            done: false,
          };
        }
        return {
          done: true,
        };
      },
    };
  },
};

console.log([...Fibonacci]);
