import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [NavBarComponent, CarrouselComponent, FooterComponent, SideNavComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    CarouselModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,

  ],
  exports: [NavBarComponent, CarrouselComponent, FooterComponent, SideNavComponent],
})
export class SharedModule { }
