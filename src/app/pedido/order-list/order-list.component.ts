import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  qntnumber: number = 1;
  price: number = 12;
  
  constructor() { }

  ngOnInit(): void {
  }

}
