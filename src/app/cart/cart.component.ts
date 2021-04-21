import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cartItems } from '../cart';
import { orders } from '../orders';
import { Order } from '../orders'
import { Product } from '../productsmodel';
import { User } from '../user';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css','../app.bootstrap.css']
})
@Injectable()
export class CartComponent implements OnInit {

  constructor(private router:Router) { }
  balance = User.balance;
  cartItems = cartItems;
  cartItemsCount = cartItems.length;

  deleteItem(product : Product){
    cartItems.splice(cartItems.indexOf(product),1);
    this.cartItemsCount = cartItems.length;
  }

  placeOrder(){
    var products: Product[] = [];
    let total_price = 0;
    cartItems.forEach(cartItem => {
      total_price = total_price + cartItem.price;
    });

    if(total_price > User.balance){
      this.router.navigate(['insufficientfunds']);
      return;
    }
    
    for (let index = 0; index < cartItems.length; index++) {
      const element = cartItems[index];
      products.push(element);
      User.balance = User.balance - element.price;

    }
    var order = new Order(products);
    orders.push(order);
    cartItems.splice(0);


  }

  ngOnInit(): void {
    this.cartItemsCount = cartItems.length;
  }

}
