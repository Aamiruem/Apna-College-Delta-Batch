// Perfect, let’s dry run this code step by step in easy words:


for (var i = 0; i < 3; i++) {
   setTimeout(() => {
      console.log(i);
   }, 0);
}
// 🔹 Word‑by‑word meaning
// for (var i = 0; i < 3; i++) → loop runs with i = 0, 1, 2.

// setTimeout(..., 0) → schedules the function to run later (after the loop finishes).

// var → is function‑scoped, not block‑scoped. That means all callbacks share the same i variable.

// 🔹 Dry Run (step by step)
// Loop start → i = 0

// setTimeout scheduled → will print i later.

// Loop next → i = 1

// Another setTimeout scheduled.

// Loop next → i = 2

// Another setTimeout scheduled.

// Loop ends → now i = 3 (because loop stops when condition fails).

// Event loop runs timers → all three setTimeout callbacks execute.

// Each callback prints the current value of i, which is 3.

// 🔹 Final Output
// Code
// 3
// 3
// 3
// 👉 Easy takeaway:

// Because var doesn’t create a new copy of i for each loop, all callbacks see the same variable.

// By the time they run, i has become 3.

// ✅ If you replace var with let, each loop iteration keeps its own i, and you’d get:

// Code
// 0
// 1
// 2
// Would you like me to also show you a diagram of the event loop + queue for this exact code, so you can visualize why all three print after the loop ends?
