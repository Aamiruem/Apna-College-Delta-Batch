function wrapAsync(fn) { //
  return (req, res, next) => { // Return a new function that takes in the request, response, and next middleware function as parameters 
    fn(req, res, next).catch(next); // Call the original function and catch any errors that occur, passing them to the next middleware function for handling
  };
}

module.exports = wrapAsync;
