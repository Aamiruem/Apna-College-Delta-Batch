// const sym1 = Symbol("id");
// const sym2 = Symbol("id");

// console.log(sym1 === sym2);

// const user = {
//   name: "Mohit",
// };
// const uid = Symbol("id");
// user[uid] = 12345;
// console.log(user);
// console.log(Object.keys(user)); 

//WeekSet
// const user1 = {
//   name: "Mohit",
// };
// const user2 = {
//   name: "John",
// };
// const weekset = new WeakSet();
// weekset.add(user1);
// weekset.add(user2);
// console.log(weekset.has(user1));

// WeekMap
const user = {
  name: "Mohit",
};
const WeekMap = new WeakMap(); 
WeekMap.set(user, "Rohit");
console.log(WeekMap.get(user));