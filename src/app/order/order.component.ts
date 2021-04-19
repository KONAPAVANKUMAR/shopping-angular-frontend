import { Component, OnInit } from '@angular/core';
import { orders } from '../orders';
import { balance } from '../user';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css','../app.bootstrap.css']
})

export class OrderComponent implements OnInit {

  orders = orders;
  balance = balance;

  constructor() { }

  ngOnInit(): void {
  }

}
