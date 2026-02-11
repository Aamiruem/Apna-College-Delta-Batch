// let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder women", "flash"]];

// for (let i = 0; i < heroes.length; i++) {
//     for (let j = 0; j < heroes[i].length; j++) {
//         console.log(heroes[i][j]);
//     }
// }






let heroes = [
    ["ironman", "spiderman", "thor"], 
["superman", "wonder women", "flash"]

];

for (let i = 0; i < heroes.length; i++) {
    console.log(i, heroes[i], heroes[i].length);

    for (let j = 0; j < heroes[i].length; j++) {
        console.log(`j = ${j}, ${heroes[i][j]}` );
    }
}







let student = [["kamran", 97], ["john", 98], ["karan", 89]];

for (let i = 0; i < student.length; i++) {
    // console.log(`info of student #${i}`);
    console.log(`info of student #${i+1}`);

    for (let j = 0; j < student[i].length; j++) {
        // console.log(`j = ${j}, ${student[i][j]}` );
        console.log(student[i][j]);
    }
}
