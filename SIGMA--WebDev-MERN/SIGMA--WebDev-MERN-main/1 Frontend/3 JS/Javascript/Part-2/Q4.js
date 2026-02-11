// Qs4: A string is a golden string if it starts with the character 'A' or 'a'
// and has a total length greater than 5. For a given string, print if it is golden or not.

let str = "Apple"; // Example string
if ((str.startsWith("A") || str.startsWith("a")) && str.length > 5) {
  console.log("golden");
} else {
  console.log("not golden");
}
