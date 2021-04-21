import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-insufficientfunds',
  templateUrl: './insufficientfunds.component.html',
  styleUrls: ['./insufficientfunds.component.css','../app.bootstrap.css']
})
export class InsufficientfundsComponent implements OnInit {

  constructor() { }
  balance = User.balance;
  ngOnInit(): void {
  }

}
