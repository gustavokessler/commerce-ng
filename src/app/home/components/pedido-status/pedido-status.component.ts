import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-status',
  templateUrl: './pedido-status.component.html',
  styleUrls: ['./pedido-status.component.scss']
})
export class PedidoStatusComponent implements OnInit {

  status: string = 'saiu';

  constructor() { }

  ngOnInit(): void {
  }

}
