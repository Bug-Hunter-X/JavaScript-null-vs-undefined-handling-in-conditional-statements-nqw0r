# JavaScript Null vs. Undefined Handling Bug

This repository demonstrates a common yet subtle bug in JavaScript related to how null and undefined values are handled in conditional statements.

The `foo` function aims to return 0 if the input `x` is either null or undefined, and the length of `x` otherwise.  The original implementation incorrectly handles the `undefined` case.

## Bug
The bug lies in how the `if (x == null)` condition is evaluated.  In JavaScript, `null == undefined` evaluates to `true`, but this is not strictly the same as checking for both values separately.

## Solution
The solution involves explicitly checking for both `null` and `undefined` using the strict equality operator (`===`) or using a more robust check to handle the values correctly.  See the `bugSolution.js` file for a corrected version.

## How to run
1. Clone the repository.
2. Open `bug.js` and `bugSolution.js` in a JavaScript environment (like a browser's console or Node.js).
3. Execute the code to observe the differences in output. 