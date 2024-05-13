const parser = require("body-parser");
const express = require('express');
const app = express();
const port = 3000;
const clasesRoutes = require("./src/routes/clases");
const notasRuta = require("./src/routes/notas"); 
const profesorRuta = require("./src/routes/profesor"); 
const estudianteRuta = require("./src/routes/estudiante"); 
const autenticathionARuta = require("./src/routes/autenticathionA"); 
const autenticathionERuta = require("./src/routes/autenticathionE"); 
const autenticathionPRuta = require("./src/routes/autenticathionP"); 
const mongoose = require("mongoose");
require('dotenv').config();

// Middleware para analizar el cuerpo de las solicitudes
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

// Rutas
app.use("/api", clasesRoutes);
app.use("/api", notasRuta); 
app.use("/api", profesorRuta); 
app.use("/api", estudianteRuta); 
app.use("/api", autenticathionARuta); 
app.use("/api", autenticathionERuta); 
app.use("/api", autenticathionPRuta);