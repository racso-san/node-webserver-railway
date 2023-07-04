require("dotenv").config(); // Utilizar variables de entorno
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT; // Llamar a variales de entorno

// HANDLEBARS
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
//Servir contenido estatico
// public = Contenido publico que cualquier persona puede ver
//request = informacion que solicitan del web server
//respons = informacion de lo que va a responder al web server
// EXPRESS = Crea web server y API
// PARCIALES = UTILIZAR COMPONENTES QUE SON REUTILIZABLES
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    name: "Oscar Lopez",
    title: "Curso de nodeJS",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    name: "Oscar Lopez",
    title: "Curso de nodeJS",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    name: "Oscar Lopez",
    title: "Curso de nodeJS",
  });
});

/* 
app.get("/generic", (req, res) => {
  res.sendFile(__dirname + "/public/generic.html");
});

app.get("/elements", (req, res) => {
  res.sendFile(__dirname + "/public/elements.html");
}); */

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html"); // SendFile = Enviar archivo
}); // __dirname = Todo el pad donde este corriendo

app.listen(port, () => {
  console.log(`Example listening at http://localhost:${port}`);
});
