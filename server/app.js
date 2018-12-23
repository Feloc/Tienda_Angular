var MongoClient = require('mongodb').MongoClient
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const User = require('./model/user');
const Product = require('./model/product');
const app = express()

const url = 'mongodb://localhost/tiendaDb';

var operaciones = require('./model/productoi')// para agregar a la BD
mongoose.connect(url)


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))

app.post('/api/user/login', (req, res) => {
    mongoose.connect(url,{ useMongoClient: true }, function(err){
        if(err) throw err;
        User.find({
            username : req.body.username, password : req.body.password
        }, function(err, user){
            if(err) throw err;
            if(user.length === 1){
                return res.status(200).json({
                    status: 'success',
                    data: user
                })
            } else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Login Failed'
                })
            }

        })
    });
  })

app.post('/api/product/getAllProducts', (req, res) => {
  mongoose.connect(url, { useMongoClient: true } , function(err){
      if(err) throw err;
      Product.find({},[],{ sort: {} },(err, doc) => {
            if(err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
  });
})

/*operaciones.insertarProducto((error, result) =>{
  if(error)console.log(error)
  console.log(result)
})

operaciones.eliminarProducto((error, result) =>{
  if(error)console.log(error)
  console.log(result)
})*/

/*operaciones.consultarYActualizar((error, result) =>{
  if(error)console.log(error)
  console.log(result)
})*/

/*let product = new Product({
    name: 'Calabaza',
    price: 3000,
    unit: 20
  })

product.save()*/

/*app.post('/api/user/login', (req, res) => {
    mongoose.connect(url, function(err){
        if(err) throw err;
        console.log('connected successfully, username is ',req.body.username,' password is ',req.body.password);
    });
})*/

/*app.get('/api/user/login', (req, res) => {
    res.send('Hello World!')
})*/

app.listen(3000, () => console.log('Tienda server running on port 3000!'))
