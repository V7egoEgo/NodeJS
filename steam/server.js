import http from 'http';
import fs, { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import chokidar from 'chokidar';
import { WebSocketServer } from 'ws';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Путь к соседней папке folder2
const MainDIR = join(__dirname, '..');

// Путь к файлу some-file.js в соседней папке folder2
const filePath = join(MainDIR, 'file/index.html');

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    const readStream = createReadStream(filePath);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    readStream.pipe(res);
  }
  if (req.url === '/no-stream' && req.method === 'GET') {
    fs.readFile(filePath, (err, date) => {
      if (err) {
        console.error('Ошибка чтения файла:', err);
        res.statusCode = 500;
        res.end('Ошибка чтения файла на сервере');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(date);
      }
    });
  }
});

// Запускаем сервер
server.listen(PORT, () => {
  console.log(`сервер запущен http://localhost:${PORT}`);
});

// Создаем WebSocket сервер
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  console.log('Клиент подключен');

  ws.on('message', (message) => {
    console.log('Получено сообщение:', message);
  });

  ws.on('close', () => {
    console.log('Клиент отключен');
  });
});

// Проверка существования файла
fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) {
    console.error(`Файл ${filePath} не найден`);
    process.exit(1);
  } else {
    console.log(`Файл ${filePath} найден`);
  }
});

// Отслеживание изменений в файле index.html
// chokidar.watch(filePath).on('change', (path) => {
//   console.log(`Файл ${path} изменен, уведомляем клиентов...`);
//   wss.clients.forEach((client) => {
//     if (client.readyState === client.OPEN) {
//       console.log('Отправляем сообщение клиенту...');
//       client.send('reload');
//     }
//   });
// });

// // Логирование ошибок
// process.on('uncaughtException', (err) => {
//   console.error('Неперехваченная ошибка:', err);
//   process.exit(1);
// });

// process.on('unhandledRejection', (reason, promise) => {
//   console.error('Необработанное отклонение:', reason);
//   process.exit(1);
// });
