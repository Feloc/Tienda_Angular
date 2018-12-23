import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  product = {
    name: 'arandano',
    cant: 50
  }

  constructor() { }

  ngOnInit() {
  }

}
