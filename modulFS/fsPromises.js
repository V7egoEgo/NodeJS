import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// стотит отметиь что sync это синхронное выполнение и оно блокирует поток
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const text = 'какой то текст';
// тут запись
fs.writeFile(`${__dirname}/read.txt`, text, (err) => {
  if (err) {
    console.log('в ходе записи в файл произошла ошибка', err);
  } else {
    const text2 = ' новый текст ';
    console.log('в файл успешно записанны данные');
    fs.appendFile(`${__dirname}/read.txt`, text2, (err) => {
      if (err) {
        console.log('ошибка добавление строки', err);
      } else {
        fs.rename(`${__dirname}/read.txt`, `${__dirname}/rename.txt`, (err) => {
          if (err) console.log('произошла ошибка');
          else console.log('успешное переименование');
        });
        console.log('успешное добавление строки');
      }
    });
  }
});
