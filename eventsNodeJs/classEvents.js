import EventEmitter from 'events';

class Post extends EventEmitter {
  constructor(author, text) {
    super();
    this.author = author;
    this.text = text;
    this.likeQty = 0;
  }
  changeLike(user) {
    this.likeQty += 1;
    this.emit(`likePost`);
    console.log(`${user} like ur post`);
  }
}

const myPost = new Post('Name', 'this text');
myPost.on('likePost', () => {
  console.log('add like');
});
console.log(myPost.text);
console.log(myPost.author);
console.log(myPost.likeQty);
myPost.changeLike('alex');
myPost.changeLike('Anna');
myPost.changeLike('Nik');
console.log(myPost.likeQty);
