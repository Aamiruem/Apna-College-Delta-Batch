// const promise = Promise.resolve('Hello, ');

// promise
//   .then(initialMessage => initialMessage + 'World!')
//   .then(finalMessage => console.log(finalMessage));





  const promise = Promise.resolve('Hello, ');

(async () => {
  const initialMessage = await promise;
  const finalMessage = initialMessage + 'Aamir!';
  console.log(finalMessage);
})();
