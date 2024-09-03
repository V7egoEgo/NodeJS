let isRunning = true;

setTimeout(() => (isRunning = false), 100);

process.nextTick(() => console.log('nextTick'));

function setImmediatePromise() {
  return new Promise((resolve, reject) => {
    setImmediate(() => resolve);
  });
}
async function whileLoop() {
  while (isRunning) {
    console.log('все готово');
    await setImmediatePromise();
  }
}
// этот цикл в главном потоке и оно бесконечно по этому остановки не будет

whileLoop().then(console.log('end'));
