import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { CatalogoComponent } from './catalogo/catalogo.component';

import { TiendaRoutingModule } from './app-routing/app-routing.module';
import { RootComponent } from './root/root.component';
import { LoginComponent } from './login/login.component';
import { ProductService } from './product.service';
import { ShowProductComponent } from './show-product/show-product.component';
import { FilterPipe } from './filter.pipe';
import { MasComponent } from './mas/mas.component';



@NgModule({
  declarations: [
    HomeComponent,
    CartComponent,
    BarraNavegacionComponent,
    CatalogoComponent,
    RootComponent,
    LoginComponent,
    ShowProductComponent,
    FilterPipe,
    MasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TiendaRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [RootComponent]
})
export class AppModule { }
