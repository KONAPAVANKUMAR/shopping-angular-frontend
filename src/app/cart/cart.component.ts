import { Component, OnInit } from '@angular/core';
import { cartItems } from '../cart';
import { OrderComponent } from '../order/order.component';
import { orders } from '../orders';
import { Order } from '../orders'
import { Product } from '../productsmodel';
import { balance } from '../user';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css','../app.bootstrap.css']
})
export class CartComponent implements OnInit {

  constructor() { }
  balance = balance;
  cartItems = cartItems;
  cartItemsCount = cartItems.length;

  deleteItem(product : Product){
    cartItems.splice(cartItems.indexOf(product),1);
    this.cartItemsCount = cartItems.length;
  }

  placeOrder(){
    var products: Product[] = [];
    
    for (let index = 0; index < cartItems.length; index++) {
      const element = cartItems[index];
      products.push(element);
      

    }
    var order = new Order(products);
    orders.push(order);

  }

  ngOnInit(): void {
    this.cartItemsCount = cartItems.length;
  }

}
