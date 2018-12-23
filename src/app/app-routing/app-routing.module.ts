import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CartComponent } from '../cart/cart.component';
import { LoginComponent } from '../login/login.component';
import { RootComponent } from '../root/root.component';
import { MasComponent } from '../mas/mas.component';



const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'cart', component: CartComponent},
  { path: 'mas/:name', component: MasComponent},



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class TiendaRoutingModule { }
