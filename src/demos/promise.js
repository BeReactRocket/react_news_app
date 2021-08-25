function promiseIncreaser(number, operand, timer) {
  return new Promise((res, rej) => {
    if (typeof number !== 'number' || typeof operand !== 'number') {
      return rej(new Error('Give a number'));
    }
    setTimeout(() => {
      const increasedNumber = number + operand;
      res(increasedNumber);
    }, timer * 1000);
  });
}

console.log('Async Logic Start');
console.time('async');
promiseIncreaser(1, 2, 1)
  .then((result) => {
    console.log('Order #1');
    console.log(result);
    return promiseIncreaser(result, 3, 2);
  })
  .then((result) => {
    console.log('Order #2');
    console.log(result);
    return promiseIncreaser(result, 4, 3);
  })
  .then((result) => {
    console.log('Order #3');
    console.log(result);
    console.timeEnd('async');
  })
  .catch(console.error);
