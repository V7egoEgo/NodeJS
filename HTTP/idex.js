import http from 'http';
import fs from 'fs';
import qs from 'qs';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//  база ошибки с 4 это шоибка клиента

//  база ошибки с 5 это ошибка сервера
const comments = [
  { id: 100, text: 'first text', author: 'Vladimir' },
  { id: 101, text: '2 text', author: 'Mir' },
  { id: 102, text: '3 text', author: 'Vlad' },
];

// разбиваю код на модули
function getHTML(req, res) {
  // Устанавливаем заголовок ответа
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.statusCode = 200;

  res.end('<p>Hello, World!\n</p>');
}
function getComment(req, res) {
  res.statusCode = 200;
  // Устанавливаем заголовок ответа
  res.writeHead(200, { 'Content-Type': 'application/json' });

  res.end(JSON.stringify(comments));
}

function noteFound(req, res) {
  // Устанавливаем заголовок ответа
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.statusCode = 404;
  res.end('<h1>404 error</h1>');
}
function postComment(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const comment = qs.parse(body);

        // Обработка данных формы
        // Например, вы можете отправить ответ клиенту
        comments.push(comment);
        console.log(comments);
        res.srtatusCide = 200;
        res.end('comment data was reciive');
      } catch (err) {
        res.statusCode = 400;
        res.end('Invalid JSON or as form');
      }
    });
  } else if (req.headers['content-type'] === 'application/json') {
    let comment = '';
    req.on('data', (chunk) => (comment += chunk));
    req.on('end', () => {
      try {
        comments.push(JSON.parse(comment));
        res.srtatusCide = 200;
        res.end('comment data was reciive');
      } catch (err) {
        res.statusCode = 400;
        res.end('Invalid JSON or as form');
      }
    });
  } else {
    res.srtatusCide = 404;
    res.end('Ошибка в запросе');
  }
}
function getForm(req, res) {
  fs.readFile(`${__dirname}/index.html`, 'utf-8', (err, date) => {
    if (err) {
      console.log(err);
      res.statusCode = 500;
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('server error while loading html');
    } else {
      res.statusCode = 200;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(date);
    }
  });
}
// Создаем сервер
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Отправляем ответ
    return getHTML(req, res);
  } else if (req.method === 'GET' && req.url === '/home') {
    return getForm(req, res);
  } else if (req.method === 'GET' && req.url === '/api') {
    return getComment(req, res);
  } else if (req.method === 'POST' && req.url === '/api') {
    return postComment(req, res);
  } else {
    return noteFound(req, res);
  }
});

// Указываем порт, на котором сервер будет слушать
const PORT = 3000;

// Запускаем сервер
server.listen(PORT, () => {
  console.log(`Мой первый сервер http://localhost:${PORT}`);
});

// const target = 11;
// const arr1 = [1, 2, 5, 6];
// const arr2 = [10, 2, 5, 1];
// const arr3 = [3, 4, 6, 2];

// function calc(arr, target) {
//   const indices = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         indices.push([i, j]);
//       }
//     }
//   }

//   return indices;
// }

// console.log(calc(arr1, target)); // [[0, 3]]
// console.log(calc(arr2, target)); // [[0, 2]]
// console.log(calc(arr3, target)); // [[0, 2]]
