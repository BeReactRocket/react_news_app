function asyncIncreaser(number, operand, timer, cb) {
  setTimeout(() => {
    const increasedNumber = number + operand;
    if (cb && typeof cb === 'function') {
      cb(increasedNumber);
    }
  }, timer * 1000);
}

asyncIncreaser(10, 99, 3, console.log);
