function greet(city) {
    console.log(this.name, city);

}

const user = {
    name: "Aamir Hussain",
    city: "New York"
}

greet.call(user, user.city);





function greet() {
    console.log(this.name, this.city);
}

greet.call(user);
