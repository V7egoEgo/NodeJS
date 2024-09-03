import { square, cube } from './square.js';
import _ from 'lodash';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// const calcSum = ()=> {
// 	let sum = 0
// 	for(let i= 0 ; i<= 15; i++) {
// 		const currentFilePath = fs.readFileSync(__dirname + `/testFile${i}.txt`, 'utf-8')
// 		console.log(currentFilePath)
// 		sum += parseInt(currentFilePath, 10)
// 	}
// 	console.log(sum)
// }
// calcSum()
// function fileHandler() {

// 	for (let i = 0; i <= 15; i++) {
// 		const currentFilePath = __dirname + `/testFile${i}.txt`;
// 		fs.open(currentFilePath, 'w', (err, fd) => {
// 				if (err) throw err;
// 				console.log(`File ${currentFilePath} created`);

// 				fs.appendFile(currentFilePath, `${i}`, (err) => {
// 						if (err) throw err;
// 						console.log(`Data appended to ${currentFilePath}`);

// 						// Close the file descriptor
// 						fs.close(fd, (err) => {
// 								if (err) throw err;
// 								console.log(`File ${currentFilePath} closed`);
// 						});
// 				});
// 		});
// }

// }
// fileHandler()

const deletFunction = () => {
  const filePath = __dirname + '/testFile.txt';
  for (let i = 0; i <= 15; i++) {
    const currentFilePath = __dirname + `/testFile${i}.txt`;
    fs.unlink(currentFilePath, (err) => {
      if (err) {
        if (err.code === 'ENOENT') {
          console.log(`File ${currentFilePath} does not exist`);
        } else {
          throw err;
        }
      } else {
        console.log(`File ${currentFilePath} deleted`);
      }
    });
  }
};

deletFunction();

const file = fs.readFileSync(__dirname + '/text2.txt', 'utf-8');
const file2 = fs.readFileSync(__dirname + '/info.txt', 'utf-8');
console.log(file + file2);
try {
  const text = fs.readFileSync(__dirname + '/text.txt', 'utf-8');
  console.log(text);
} catch (err) {
  console.log('при чтении файла возникла ошибка');
}
// let text = fs.readFileSync(filePath, 'utf8');
// console.log(text);

// fs.writeFileSync('readme.txt', 'text');
let myArray = [1, 2, 3, 2, 3, 5, 'mdsa', 'das', null];

console.log(_.compact(myArray));
console.log(_.uniq(myArray));
let res = square(2) + cube(3);
console.log(res);
