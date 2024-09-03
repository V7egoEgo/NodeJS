// setTimeout(()=> console.log(12), 0)

// const cache = new Map()
// function fib( index) {
//     return new Promise((resolve, reject) => {

//         if(index === 1 || index === 0)
//             return resolve(index)

//         setImmediate(()=>{

//             Promise.all([fib(index-1),fib(index-2)])
//               .then(([fib1, fib2]) => {
//                 cache.set(index, fib1 + fib2)
//                 resolve(fib1 + fib2)
//             })
//         })
//     })
// }
// // heap out of memory fib(40)
// fib(11).then((res)=>console.log(res))

let coutn = 0;

const firstTimer = setInterval(function () {
  coutn++;
  const data = new Date();
  console.log(data);
  if ((coutn) => 10) {
    clearInterval(firstTimer);
  }
}, 1000);
