# Handling Unexpected Null Values in JavaScript

This repository demonstrates a common JavaScript bug related to unexpected null values and provides a solution.

## The Bug
Many JavaScript functions implicitly assume input values are defined. When a null or undefined value is unexpectedly passed, it can lead to errors or unexpected outputs. The provided `bug.js` example shows this problem.

## The Solution
The solution, `bugSolution.js`, shows how to explicitly handle null or undefined values using checks at the beginning of the function. By doing this, unexpected behaviors can be avoided. 

## How to Reproduce
1. Clone this repository.
2. Run `bug.js` and observe the behavior when passing null values. 
3. Compare the results when running `bugSolution.js`, which properly handles null values. 