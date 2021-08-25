function asyncAwaitIncreaser(number, operand, timer) {
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

(async function () {
  console.log('Async Logic Start');
  console.time('async');

  try {
    console.log('Order #1');
    let result = await asyncAwaitIncreaser(1, 2, 1);
    console.log(result);

    console.log('Order #2');
    result = await asyncAwaitIncreaser(result, 3, 2);
    console.log(result);

    console.log('Order #3');
    result = await asyncAwaitIncreaser(result, 4, 3);
    console.log(result);
  } catch (error) {
    console.error(error);
  }

  console.timeEnd('async');
})();
