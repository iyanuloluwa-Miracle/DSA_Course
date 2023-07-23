function fibonacci(n) {
    if (n <= 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  // Test the function
  const nthTerm = 7;
  const result = fibonacci(nthTerm);
  console.log(`The ${nthTerm}th term in the Fibonacci sequence is: ${result}`);
  