/* Backend started :
Node Js - JavaScript Runtime Environment
REPL - Read Evaluate Print Loop         */

// global in REPL (similar to window object)
// console.log("Hello NodeJs");
console.log("Global :-", global);
console.log("==================================");

// Process in REPL
console.log("Process :-", process); // this object provides information about, and control over, the current node.js process
console.log("==================================");
console.log("Version :-", process.version); // show version of current node.js process
console.log("==================================");
console.log("Release :-", process.release);
console.log("==================================");
console.log("Current working directory :-", process.cwd());

console.log("Process argv :-", process.argv); // returns an array containing the command line arguments passed ->
//-> when the node.js process was launched (by default returns the 2 values of array - executable & current path)

// pass some values as arguments with node file (like this :- node 1_script.js Jack Sparrow Sam Alt Mash)
let args = process.argv;
for (let i=2; i<args.length; i++) { // printing all values using loop
    console.log("Helo,", args[i]);
}
console.log("=======================================");

// module.exports - requiring files (a special object)
// require() - a built in function to include external modules that exist in separate files
const mathFile = require("./1a_math"); // transferring data from a file
console.log(":---Transferring data from a file---:");
console.log("Addition's solution :", mathFile.sum(3, 5));
console.log("Multiply's solution :", mathFile.mul(3, 5));
console.log("PI value :", mathFile.PI);
console.log("=========================================");

const fruitsInfo = require("./1b_Fruits"); // transferring data from a directory/folder 

console.log(":---Transferring data from a directory---:");
console.log("Fruits array info :", fruitsInfo);


/* NPM (Node Package Manager) :-
                                npm is the standard package manager for Node.js     */

/* Installing packages using npm :- npm install <package name>
   Example :- npm install figlet  -->(we installed in FigletDir)    */

/*  When we install a package in any location, so that package comes with 3 things
(1) node_modules    (2) package-lock.json   (3) package.json              */

/*  (1) node_modules :- This folder contains every installed dependency for your project.
    (2) package-lock.json :- It records the exact version of every installed dependency,
                         including its sub-dependencies and their versions.
    (3) package.json :- This file contains descriptive & functional metadata about a project,
                        such as a name, version, dependencies and so on.        */
/*
Locally vs Globally installation of packages :-
Local installation :- it is a better way to install a package locally.
Global installation :- it is not a good thing but yes we can install from these cmnds :
npm install -g <package name>                   then link from this cmnd :
npm link <package name>                         */
const figlet = require("figlet");
console.log("=========================================");
figlet("Globally installed", function (err, data) {
    if (err) {
        console.log("Something went wrong");
        console.dir(err);
        return;
    }
    console.log(data);
});

/*
require vs import :- Transferring data from file using import
import :-We can selectively load only the pieces we need with import, which can
         save memory but with require, we can't selectively load only the pieces we need.
:- Loding is  synchronous for "require" but can be asynchronous for "import".          */

/* When we using import then we need to create a file "package.json" using "npm init" cmnd
   in the same directory where we are using "import" and define "type": "module" in this file  */

/*
:- We cannot use "require" and "import" in the same file or directory, So i created a new
directory named "1e_importExample" for imprt               */
