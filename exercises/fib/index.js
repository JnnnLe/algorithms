// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

fib = (n) => {
  let acc = 0;
  for (let i = 0; i <= n; i++) {
    if (n <= 1) return n;
    else if (n > 1) {
      acc = fib(n - 1) + fib(n - 2)
    }
    return acc;
  }
}

module.exports = fib;
