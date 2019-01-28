const findTargetNum = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (i + j === num) {
        return [i, j];
      }
    }
  }
  return `No numbers in array [${arr}] add together to equal ${num}!`
}

let array = [1,2,3,4];
findTargetNum(array,9);
