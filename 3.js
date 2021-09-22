let checkParentheses = (str) => {
  let arr = [];

  let open = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  let closed = {
    "}": true,
    "]": true,
    ")": true,
  };

  for (let i = 0; i < str.length; i++) {
    let symbol = str[i];

    if (open[symbol]) {
      arr.push(symbol);
    } else if (closed[symbol]) {
      if (open[arr.pop()] !== symbol) return false;
    }
  }
  return arr.length === 0;
};

console.log(checkParentheses("--()--")); //true
console.log(checkParentheses("-a]--[")); // false
console.log(checkParentheses("dsa{vsfs{ad")); // false
console.log(checkParentheses("j78(g5b]uyg")); // false
console.log(checkParentheses(",m{i987y}hj")); // true
console.log(checkParentheses("dsa[3ed---:]::")); // true
