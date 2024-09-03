const fs = require('fs');
const dns = require('dns');

function timeStamp() {
  return performance.now().toFixed(2);
}
console.log('program start', timeStamp());

setTimeout(() => {
  console.log('text timeout one', timeStamp());
});
setTimeout(() => {
  process.nextTick(() => console.log('next tiсk2', timeStamp()));
  console.log('text timeout two', timeStamp());
}, 10);

fs.writeFile('./test.txt', 'hello node.js', () => {
  console.log('file written', timeStamp());
});
const intervalId = setInterval(() => {
  console.log(`interval`);
  if (intervalCout === 2) clearInterval(intervalId);
}, 10);
Promise.resolve().then(() => console.log('promise 1', timeStamp()));

process.nextTick(() => console.log('next tiсk', timeStamp()));
setImmediate(() => console.log('imediat 1', timeStamp()));

dns.lookup('google.com', (err, adress, family) => {
  console.log('DNS 1 google.com', adress, timeStamp());
});

console.log('program end');
