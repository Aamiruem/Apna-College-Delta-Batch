// 7. Optional Chaining (?.) with Conditionals
// Optional chaining
let user = {
  profile: {
    name: "John",
    address: {
      city: "New York"
    }
  }
};

// Without optional chaining
if (user && user.profile && user.profile.address) {
  console.log(user.profile.address.city); // "New York"
}

// With optional chaining
if (user?.profile?.address?.city) {
  console.log(user.profile.address.city); // "New York"
}

// Combined with nullish coalescing
console.log(user?.profile?.phone ?? "No phone number"); // "No phone number"
