import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardapioRoutingModule } from './cardapio-routing.module';
import { CardapioComponent } from './cardapio.component';


@NgModule({
  declarations: [CardapioComponent],
  imports: [
    CommonModule,
    CardapioRoutingModule
  ]
})
export class CardapioModule { }
