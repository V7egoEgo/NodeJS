function isValidParentheses(str) {
  const stack = [];
  const openingBrackets = ['(', '[', '{'];
  const closingBrackets = [')', ']', '}'];
  const bracketPairs = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let char of str) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Примеры использования
console.log(isValidParentheses('()')); // true
console.log(isValidParentheses('()[]{}')); // true
console.log(isValidParentheses('(]')); // false
console.log(isValidParentheses('([)]')); // false
console.log(isValidParentheses('{[]}')); // true

const wrong = 'слова';

for (const [key, value] of wrong.split('').entries()) {
  console.log(`Индекс: ${key}, Значение: ${value}`);
}
