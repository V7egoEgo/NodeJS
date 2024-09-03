import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

const timeoutFn = (count) => {
  console.log(`timeout event! ${count}`);
};

// Зарегистрируйте обработчик события 'timeout'
myEmitter.on('timeout', timeoutFn);

setTimeout(() => {
  myEmitter.emit('timeout', 1);
}, 1000);

setTimeout(() => {
  myEmitter.emit('timeout', 2);
}, 2000);

myEmitter.emit('timeout', 3);

setTimeout(() => {
  myEmitter.off('timeout', timeoutFn);
}, 3000);

setTimeout(() => {
  myEmitter.emit('timeout', 4);
}, 4000);
