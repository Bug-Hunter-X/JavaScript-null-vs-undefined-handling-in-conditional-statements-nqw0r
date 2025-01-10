function foo(x) {
  if (x === null || x === undefined) {
    return 0;
  } else {
    return x.length;
  }
}

console.log(foo(null)); // Output: 0
console.log(foo([1, 2, 3])); // Output: 3
console.log(foo(undefined)); // Output: 0