var isValid = function (s) {
  const matching = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];
  for (let char of s) {
    //opening push to stack
    if (char in matching) {
      stack.push(char);
    } else {
      const opening = stack.pop();
      if (matching[opening] !== char) return false;
    }
  }
  return stack.length === 0 ? true : false;
};
