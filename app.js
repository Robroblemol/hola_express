var express = require("express");// inportamos el paquete
var app = express();// inicialixamos el objeto express

app.get("/",function(req,res) {
  res.send("hola mundo con express!!");// invia la respuesta y cierra la conexion
});

app.listen(8080);// escuchamos peticiones
