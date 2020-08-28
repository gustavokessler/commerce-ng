import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardapioRoutingModule } from './cardapio-routing.module';
import { CardapioComponent } from './cardapio.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { ViewItemComponent } from './view-item/view-item.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CardapioComponent, ViewItemComponent],
  imports: [
    CommonModule,
    CardapioRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    MatDialogModule,
    MatIconModule,  ]
})
export class CardapioModule { }
