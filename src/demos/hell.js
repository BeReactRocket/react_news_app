function asyncIncreaser(number, operand, timer, cb) {
  setTimeout(() => {
    const increasedNumber = number + operand;

    if (cb && typeof cb === 'function') {
      cb(increasedNumber);
    }
  }, timer * 1000);
}

console.log('Async Logic Start');
console.time('async');
asyncIncreaser(1, 2, 1, (result) => {
  console.log('Depth #1');
  console.log(result); // prints 3 at least 1 second later.
  asyncIncreaser(result, 3, 2, (result) => {
    console.log('Depth #2');
    console.log(result); // prints 6 at least 3 seconds later.
    asyncIncreaser(result, 4, 3, (result) => {
      console.log('Depth #3');
      console.log(result); // prints 10 at least 6 seconds later.
      console.timeEnd('async');
    });
  });
});
