const favMovie = 'avatar';

let guess = prompt("Guess my favorite movie");

while((guess != favMovie) && (guess != "quit")){
    guess = prompt("Wrong guess. Please try again or type 'quit' to exit.");
}

if(guess == favMovie){
    alert("Congrats!!");
} else {
    alert("Goodbye");
}
