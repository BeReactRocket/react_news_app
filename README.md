# React News App

News Single Page Application with async logics.

### Prior Knowledge with JavaScipt

- Basic
  ```js
  function printMe(text) {
    console.log(text);
  }

  setTimeout(() => printMe('hello'), 1000);
  ```

- Callback
  ```js
  function asyncIncreaser(number, operand, timer, cb) {
    setTimeout(() => {
      const increasedNumber = number + operand;
      if (cb && typeof cb === 'function') {
        cb(increasedNumber);
      }
    }, timer * 1000);
  }

  asyncIncreaser(10, 99, 3, console.log);
  ```

- Callback Hell
  ```js
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
  ```

- Promise
  ```js
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
  ```

- Async/Await(ES2017~, ES8~)
  ```js
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
  ```