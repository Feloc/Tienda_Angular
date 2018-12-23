import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router'



@Component({
  selector: 'mas',
  templateUrl: './mas.component.html',
  styleUrls: ['./mas.component.css'],
  providers: [ ProductService ]
})
export class MasComponent implements OnInit {
  //@Input() name: string;
  //@Input() producto: any[];

  nombreProducto: string;
  public products : any [];
  public productoF : any [];
  public pro : any [];


  constructor(private productService: ProductService, private activatedRoute : ActivatedRoute) {
    this.nombreProducto = this.activatedRoute.snapshot.params['name'];
    //console.log(this.nombreProducto)
  }

  ngOnInit() {
    //this.getAllProducts(this.nombreProducto);
    this.pro = this.getProducto(this.nombreProducto);
  }

  /*getAllProducts(product){
    this.productService.getAllProducts().subscribe(result => {
      //alert('QUe hubo pues')
      //console.log(result)
      this.products = result['data'];
      //console.log (this.products);
      this.products.forEach(element => {
        //console.log(element)
        //console.log(product)
        if(element.name == product){
          console.log(element.name)
          console.log(product)
          this.producto.push(element)
          console.log(this.producto);

        }
      })
      return this.producto;
    });
  }*/

  getProducto(producto){
    let productoF : Object[] = [];
    this.productService.getProducto().subscribe(result => {
      this.products = result['data']
      this.products.forEach(element => {
        if(element.name == producto){
          productoF.push(element)
          console.log(productoF)
        }
      })

    })
    return productoF;
  }

  /*getAllProducts(){
    this.productService.getAllProducts().subscribe(result => {
      //alert('QUe hubo pues')
      console.log(result)
      this.products = result['data'];
      console.log (result['data']);
    });
  }*/

}
