const object = {
  message: 'Hello, World!',
  logMessage() {
      console.log(this.message);
  }
};

setTimeout(object.logMessage, 1000);
