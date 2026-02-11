let length = 4;
function callback(){

    console.log(this.length);
}
const object = {
    length: 5,
    method(callback){
        callback();
    },
};

// object.method(callback);
console.log(object.method(callback, 1, 2));

// output will be 4
// because the callback function is not a method of the object
// so the this keyword inside the callback function refers to the global object
