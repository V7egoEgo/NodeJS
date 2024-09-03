// async function getDate(url, { ...option }) {
//   const res = await fatch(url, option);
//   const posts = await res.json();
//   return posts;
// }
import fetch from 'node-fetch';
async function getDate(url) {
  const res = await fetch(url);
  const posts = await res.json();
  return posts;
}

export default getDate;
