

setTimeout(()=> console.log(), 0)
function fib( index) {
    if(index === 1 || index === 0)
        return index
    else
        return fib(index-1)+ fib(index-2)
}

console.log(fib(10))