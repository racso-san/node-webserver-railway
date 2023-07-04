const http = require("http");

//request = informacion que solicitan del web server
//respons = informacion de lo que va a responder al web server
// EXPRESS = Crea web server y API
http
  .createServer((req, res) => {
    res.write("Hola mundo");
    res.end();
  })
  .listen(8080);

console.log("Puerto 8080");
