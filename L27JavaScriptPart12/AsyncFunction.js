async function greet(){
    // throw "some random error";
    throw "week connection"
    return "hello world!";
}
// let hello = async() => {}; //return a promise


greet()
    .then((result) => {
        console.log("promise was resolved");
        console.log("result was : " , result);
        
    })
    .catch((err) => {
        console.log("promise was rejected with err", err);
    });

let demo = async()=> {
    return "apna college";
    return 5;
}
demo()
    