var express = require("express");// inportamos el paquete
var app = express();// inicialixamos el objeto express

app.set("view engine","jade");

app.get("/",function(req,res) {
  res.render("index",{hola:"Hola RDR"});
  //res.send("hola mundo con express!!");// invia la respuesta y cierra la conexion
});

app.listen(8080);// escuchamos peticiones
