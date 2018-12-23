var Product = require('./product.js')

module.exports.insertarProducto = function(callback){
let product = new Product({
    name: 'Zanahoria',
    price: 2500,
    units: 200,
    photo: './assets/zanahoria.jpg'
  })

product.save((error) => {
  if (error)callback(error)
  callback(null, "Producto guardado")
})
}


module.exports.eliminarProducto = function(callback){
  Product.remove({name:''}, (error) =>{
    if(error) callback(error)
    callback(null, "Se elimino correctamente el Producto")
  })
}

module.exports.consultarYActualizar = function(callback){
  Product.updateOne({name: "Aguacate"}, {$set: {units: 90}})
  console.log("Se actualizo")
}
