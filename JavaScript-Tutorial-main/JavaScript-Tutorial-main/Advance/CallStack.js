// function one(){
//     two();
//     console.log('one');
// }
// function two(){
//     console.log('two');
// }
// one();

console.log('Start');
setTimeout(() => {
    console.log('Timeout');
}, 0);
console.log('End');