import config from './const.js';
import { printHello } from './hello.js';
import getDate from './getDate.js';
getDate('https://jsonplaceholder.typicode.com/posts/1')
  .then((post) => {
    console.log(post);
  })
  .catch((err) => {
    console.log(err);
  });
