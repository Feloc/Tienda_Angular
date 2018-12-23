import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';



@Component({
  selector: 'show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css'],
  providers: [ ProductService ]
})
export class ShowProductComponent implements OnInit {

  public products : any [];
  public searchText : string;
  public names: any[];
  public cantidad : Number;

  shapes = [
    {id:'1', name:'Angle'},
    {id:'2', name:'Bar'},
   ];


  constructor( private productService: ProductService) {
   }

  ngOnInit() {
    this.getAllProducts();
  }

  enviaCantidad(form){
    console.log(form)
  }

  changeShape(shape){
    console.log(shape.value);
  }

  clicked(){
    alert('hola')
    console.log(this.cantidad)
  }

  getAllProducts(){

    this.productService.getAllProducts().subscribe(result => {
      //alert('QUe hubo pues')
      console.log(result)
      this.products = result['data'];
      console.log (result['data']);
      //this.product.json()
      this.names = (result['data']);
      //this.names = [{nombre:'Felipe', edad: 37, salario: '$3.000.000'}, {nombre:'Angela', edad: 33}]
      /*console.log(result['_body'])
      const body = result['_body']
      console.log(body['status'])


      const datos = JSON.stringify(result['_body'])
      console.log(datos)

      this.products = [2,4,6,8];
      console.log(this.products[0])
      var titulo = 'Burro';
      console.log (titulo)*/
    });
  }
}
