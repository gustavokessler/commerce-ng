import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavBarComponent, CarrouselComponent, FooterComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    CarouselModule,

  ],
  exports: [NavBarComponent, CarrouselComponent, FooterComponent],
})
export class SharedModule { }
