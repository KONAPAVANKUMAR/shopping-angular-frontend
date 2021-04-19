import { Component, OnInit } from '@angular/core';
import { cartItems } from '../cart';
import { Products } from '../products'
import { Product } from '../productsmodel';
import { balance } from '../user';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css','../app.bootstrap.css']
})

export class ProductsComponent implements OnInit {

  products = Products;
  


  balance = balance;

  cartItemsCount = 0;

  addToCart(product : Product){

     cartItems.push(product);
     this.cartItemsCount = cartItems.length;
  }


  ngOnInit(): void {
    this.cartItemsCount = cartItems.length;
  }

}
