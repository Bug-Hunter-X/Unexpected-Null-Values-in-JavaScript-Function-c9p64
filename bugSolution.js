function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    return null; // Handle null and undefined values explicitly
  } else if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; //Handle non-numeric inputs explicitly
  }
  // ... rest of your function
}