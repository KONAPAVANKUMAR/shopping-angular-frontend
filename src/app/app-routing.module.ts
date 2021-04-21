import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component'
import { CartComponent } from './cart/cart.component'
import { OrderComponent } from './order/order.component';
import { InsufficientfundsComponent } from './insufficientfunds/insufficientfunds.component';


const routes: Routes = [

  { path: '', component: ProductsComponent },
  { path: 'cart-component', component: CartComponent },
  { path: 'order-component', component: OrderComponent },
  { path: 'insufficientfunds' , component : InsufficientfundsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
