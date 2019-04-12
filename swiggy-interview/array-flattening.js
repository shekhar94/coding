function flattenArray(array) {
  if (!Array.isArray(array)) {
    return [array];
  }
  let flatArr = [];
  for (let i = 0; i < array.length; i++) {
    let tmpFlatArr = flattenArray(array[i]);
    flatArr = [...flatArr, ...tmpFlatArr];
  }
  return flatArr;
}

console.log(flattenArray([[[1,1]], [2, 3], [[4, 5]], [[[6, 7, 8]]]]));

