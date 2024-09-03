// let isRunning = true;

// setTimeout(()=> isRunning = false, 10)

// process.nextTick(()=> console.log('nextTick'))
// // этот цикл в главном потоке и оно бесконечно по этому остановки не будет
// while (isRunning) {
//     console.log('все готово');

// }
//  тут цикл бесконечный

function thirdFunction() {
  return 10;
}
function secondFunction() {
  return thirdFunction();
}

function firstFunction() {
  return secondFunction();
}

console.log(firstFunction());
