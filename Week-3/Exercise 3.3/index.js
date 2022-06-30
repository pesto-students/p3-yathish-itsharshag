function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

// log() call prints 0 because event though increment function is called 3 times, the message value is set to 'Count is 0' during the createIncrement function call
