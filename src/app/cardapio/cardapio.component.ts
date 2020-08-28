import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {

  filter = 'Xis';

  constructor() { }

  ngOnInit(): void {
  }

  test(a): void{
    console.log(a.tab.textLabel);
    this.filter = a.tab.textLabel;
  }

  

}
