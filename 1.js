const getUniqArr = (arr, func) => {
  let uniq = [];

  arr.forEach((item, idx, arr) => {
    let current = func(item);
    let next = func(arr[idx + 1]);

    if (current !== next) {
      uniq.push(current);
    }
  });

  return uniq;
};

const groupBy = (array, func) => {
  const sortedArr = array.sort();
  const uniqArr = getUniqArr(sortedArr, func);
  const obj = {};

  uniqArr.forEach((item, idx) => {
    const value = sortedArr.filter((el) => func(el) === item);
    obj[item] = value;
  });

  return obj;
};

console.log(groupBy([3.6, 3.7, 6.4, 8.9], Math.floor)); // { '3': [3.6, 3.7], '6': [6.4], '8': [8.9] }
