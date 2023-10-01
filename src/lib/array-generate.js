function generateNumberArrays(highestNumber) {
  if (highestNumber < 0) {
    return []; // Return an empty array for invalid input
  }

  const result = [];

  for (let i = 0; i < highestNumber; i++) {
    result.push(i);
  }

  return result;
}


export function generateArray(n) {
   let arr1 = generateNumberArrays(n/2);
   let arr2 = generateNumberArrays(n/2);
  return arr1.concat(arr2);
}

