import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Product } from './models/product.model';
import 'rxjs/Rx';//permite vonvertir los datos pa


@Injectable()
export class ProductService {

  producto : any[];
  constructor(private http: Http) { }

  getAllProducts(){
    return this.http.post('/api/product/getAllProducts', {
      /*name : product.name,
      price : product.price,
      units : product.units*/

    })
    .map((response: Response)=> response.json())
  }

  getProducto(){
    return this.http.post('/api/product/getAllProducts', {
    })


    .map((response: Response)=> response.json())

  }

}



  /*getDatos(){
    return this.http.get('')
      .map((response: Response)=> response.json())
  }*/
