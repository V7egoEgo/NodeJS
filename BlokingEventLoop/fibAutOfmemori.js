setTimeout(() => console.log(12), 0);
function fib(index) {
  return new Promise((resolve, reject) => {
    if (index === 1 || index === 0) return resolve(index);

    setImmediate(() => {
      Promise.all([fib(index - 1), fib(index - 2)]).then(([fib1, fib2]) =>
        resolve(fib1 + fib2)
      );
    });
  });
}
// heap out of memory fib(40)
fib(11).then((res) => console.log(res));
