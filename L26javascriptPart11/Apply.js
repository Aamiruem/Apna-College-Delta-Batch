function greet(city) {
    console.log(this.name, city);
}

const user = {
    name: "Aamir Hussain",
    city: "New York"
}

greet.apply(user, [user.city]);
