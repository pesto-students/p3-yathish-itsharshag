async function doTask1(source) {
  console.log(`Task 1 done (from ${source})`);
}
async function doTask2(source) {
  console.log(`Task 2 done (from ${source})`);
}
async function doTask3(source) {
  console.log(`Task 3 done (from ${source})`);
}

async function executeTasksWithAsyncAwait() {
  await doTask1("async/await").catch((_) => console.log("Error with task 1"));
  await doTask2("async/await").catch((_) => console.log("Error with task 2"));
  await doTask3("async/await").catch((_) => console.log("Error with task 3"));
}

function* executeTasksWithGenerator() {
  yield doTask1("generator");
  yield doTask2("generator");
  yield doTask3("generator");
}

executeTasksWithAsyncAwait();

const generator = executeTasksWithGenerator();
generator.next();
generator.next();
generator.next();
