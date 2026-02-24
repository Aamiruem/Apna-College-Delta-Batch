let movies = [
    ["Action", "Avatar", "Avengers"],
    ["Sci-Fi", "Interstellar", "Inception"],
    ["Comedy", "Jumanji", "Mask"]
];

for (let category of movies) {
    console.log("Category:", category[0]);

    for (let i = 1; i < category.length; i++) {
        console.log(" -", category[i]);
    }
}
