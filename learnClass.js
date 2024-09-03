// в ноде существуют доп модули которые позволяют работать с файлами.
// path // OS // FS // http . эти модули помогают работать с сетью файлами и процессором.
// libUV обеспечивают неблокирующие операции написанна на C++ и это часть модулей Node.js
// есть стороние сервиси такие как expres для упрощений работы и mocha для тестов
// вообще в node js есть огромное количество модулей npm


// потоки и процессы 
// когда мы начинаем операцию в node js то стоит учитывать, что нода может блокировать
// процессы
const fs = require('fs');
// const data = fs.readFileSync('./text.txt', 'utf-8')

// console.log('finish reading')
// console.log('resault')


// библиотека LIBUV позволяте ассинхронно обращатся к данным
// существует event loop это цикл операций 
// работает это так есть функция запрос к серверу и есть колбек функция которая срабоатет
// когда придет ответ и сработает callback
// колбек функции занимают основной поток
// Lib uv 4 потока по умолчанию максимальное количество потоков 1024 это максимальный пулл
// LIBUV использует операционную систему
// thread poll 
// а в данном случае есть блокирующая функция. это полезно в случаях когда работа с информайией
// не возможна до момента пока не будет исполнена опр операция


// в node js eсть next tick который указывает на выполнение ззадачи
fs.readFile('./text.txt', 'utf-8', (err, data) =>{
    if(!err) {
        console.log(123)
    }
    console.log(data)
})

console.log(2131512512)

class Comment {
    constructor(text)
    {
        this.text = text;
        this.votesQty = 0;
    }
    upvote() {
        this.votesQty += 1;
    }
}

const firstComment = new Comment('first comment')

firstComment.upvote()

console.log(firstComment)


class ExtendedArray extends Array {
    info() {
        return `array has ${this.length} elements`
    }
}

const myArrow = new ExtendedArray(2,3,7)

myArrow.info()

console.log(myArrow.info())

