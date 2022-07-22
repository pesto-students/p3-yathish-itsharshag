// A basic promise implementation using JS Classes
class CustomPromise {
  constructor(handler) {
    this.status = "pending";
    this.value = null;

    const resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value = value;
      }
    };
    const reject = (value) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.value = value;
      }
    };

    try {
      handler(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === "fulfilled") {
      onFulfilled(this.value);
    } else if (this.status === "rejected") {
      onRejected(this.value);
    }
  }
}

function getNumber() {
  const randomNumber = parseInt(Math.random() * 100);
  const promise = new CustomPromise((resolve, reject) => {
    if (randomNumber % 5 == 0) {
      return resolve(randomNumber);
    }
    reject(randomNumber);
  });
  promise.then(
    (result) =>
      console.log(`The randomly generated number ${result} was divisible by 5`),
    (result) =>
      console.log(
        `The randomly generated number ${result} was not divisible by 5`
      )
  );
}

getNumber();
