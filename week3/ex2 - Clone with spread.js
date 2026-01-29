// THE CONTEXT
// The originalArray contains some elements.
// The function updateArray takes an array, an index, and a new value as parameters, and  update the value at the specified index in the array.

// THE PROBLEM
// - We want the original array to remain unchanged !

// YOUR JOB
//- In the function updateArray, you need to use the spread operator (...) to clone the original array before making modifications.

// TO CHECK
// Check that your code still produce the same result

let originalArray = [1, 2, 3, 4, 5];

function updateArray(array, index, newValue) {
  let newArray = [...array]; 
  newArray[index] = newValue;
  return newArray;
}

let updatedArray = updateArray(originalArray, 2, 10);

console.log("Original array:", originalArray);  // Original array:  (5) [1, 2, 3, 4, 5]
console.log("Updated array:", updatedArray);    // Updated array:  (5) [1, 2, 10, 4, 5]
