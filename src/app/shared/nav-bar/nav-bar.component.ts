import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() sidenav: MatSidenav;


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.sidenav.toggle();
  }

  navigateToPedido(){
    this.router.navigate(['/pedido']);
  }

}
