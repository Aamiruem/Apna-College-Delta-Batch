class ExpressError extends Error {  // Custom error class that extends the built-in Error class
  constructor(statusCode, message) { // Constructor takes in status code and message for the error
    super(); // Call parent constructor to set up the error message
    this.statusCode = statusCode; // Set the status code for the error 
    this.message = message; // Set the error message
  }
}

module.exports = ExpressError; // Export the ExpressError class for use in other parts of the application
