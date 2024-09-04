// виды потокв в js
/* 
1. readable - для чтения
2. writable -  для записи данных
4. duplex -   как для чтения так для записи
5. Tranform - duplex поток который переобразует данные 

*/
import { Stream } from 'stream';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// стотит отметиь что sync это синхронное выполнение и оно блокирует поток
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// const readFile = fs.createReadStream(`${__dirname}/read.txt`, 'utf-8');

// readFile.on('data', (dataChunk) => {
//   console.log(dataChunk);
// });
// readFile.on('end', () => {
//   console.log('file rdy');
// });
// readFile.on('err', (err) => {
//   console.log(err, 'ТУТ ОШИБКА');
// });

// пренаправление  потока readableStream.pipe(WritableStream) method pipe вызывает целевой поток
// const readFile = fs.createReadStream(`${__dirname}/read.txt`, 'utf-8');
// const writable = fs.createWriteStream(`${__dirname}/read-copy.txt`);

// readFile.pipe(writable);
const writable = fs.createWriteStream(`${__dirname}/read-copy.txt`);

writable.on('close', () => {
  console.log('file copy');
});

process.stdin.pipe(writable);
