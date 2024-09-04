function calculate(num1, num2, operation) {
    // Check if the inputs are valid numbers
    if (num1 === null || num1 === undefined || isNaN(num1) || 
        num2 === null || num2 === undefined || isNaN(num2)) {
      return 'Invalid numbers provided';
    }
  
    // Perform the operation based on the input string
    switch (operation) {
      case 'add':
        return num1 + num2;
      case 'subtract':
        return num1 - num2;
      case 'multiply':
        return num1 * num2;
      case 'divide':
        // Prevent division by zero
        if (num2 === 0) {
          return 'Cannot divide by zero';
        }
        return num1 / num2;
      default:
        return 'Invalid operation';
    }
  }
  
  // Testing the function with different inputs
  console.log(calculate(5, 3, 'add'));        // Output: 8
  console.log(calculate(10, 2, 'divide'));    // Output: 5
  console.log(calculate(7, 2, 'subtract'));   // Output: 5
  console.log(calculate(4, 3, 'multiply'));   // Output: 12
  console.log(calculate(10, 0, 'divide'));    // Output: Cannot divide by zero
  console.log(calculate(10, 2, 'modulus'));   // Output: Invalid operation
  console.log(calculate(null, 3, 'add'));     // Output: Invalid numbers provided
  console.log(calculate(5, undefined, 'add')); // Output: Invalid numbers provided
  