const array = [1, "980", true, 4, 5, 7, 6, 5, "salad", false, true, "tomato", 3, 4, false, 3, 4, 6, 5, 7, "925974259", true, false, 8, 6, 5, 4, "3", "5", "3", 9, 10, 45, 15, 48, "sdfhsfd", "stars", 54, "5", "76"];

// clean() function takes an argument array, sorts into type 'number', 'string', then anything else, collects duplicate values into interior arrays, then returns the array.
const clean = (arr) => {

  // creates interior arrays of duplicate values
  const duplicates = (array) => {
    for (let i = 0; i < array.length; i++) {
      let j = i + 0;
      let counter = 0;
      let tempArr = []
      while (array[i] === array[j + 1]) {
        tempArr[counter] = array[i];
        j++;
        counter++;
      }
      if (tempArr.length >= 1) {
        tempArr[tempArr.length] = array[i];
        array.splice(i, tempArr.length, [tempArr])
      }
    }
    return array;
  }

  // splits original argument array by type
  let anyNumbers = arr.filter(element => {
    return typeof element === 'number';
  })

  let anyStrings = arr.filter(element => {
    return typeof element === 'string';
  })

  let anythingElse = arr.filter(element => {
    return typeof element !== 'number' && typeof element !== 'string';
  })

  // sorts arrays now split by type, in preparation for duplicate function
  anyNumbers = anyNumbers.sort((a, b) => {
    return a - b;
  })
  anyStrings = anyStrings.sort();
  anythingElse = anythingElse.sort();

  // duplicate() function calls
  anyNumbers = duplicates(anyNumbers);
  anyStrings = duplicates(anyStrings);
  anythingElse = duplicates(anythingElse);

  // returns the processed arrays as one array
  return anyNumbers.concat(anyStrings.concat(anythingElse));
}
clean(array);
