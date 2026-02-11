//Node js Notes
//Node js is a runtime environment for executing javascript code outside a browser
//Node js is a javascript runtime built on chrome v8 engine
//Node js is used to build server side applications
//Node js is used to build web applications
//Node js is used to build real time applications
//Node js is used to build microservices
//Node js is used to build desktop applications
//Node js is used to build mobile applications
//Node js is used to build cloud applications
//Node js is used to build IoT applications

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello World\n");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
