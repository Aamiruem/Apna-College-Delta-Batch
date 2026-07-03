function greet(city) {
    console.log(this.name, city);
}

const user = {
    name: "Aamir Hussain",
    city: "New York"
}

const greetUser = greet.bind(user, user.city);
greetUser();
