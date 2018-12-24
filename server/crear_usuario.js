var MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose');


const url = 'mongodb://localhost/tiendaDb';

var operaciones = require('./model/useri')// para agregar a la BD
mongoose.connect(url)



operaciones.insertarProducto((error, result) =>{
  if(error)console.log(error)
  console.log(result)
})
