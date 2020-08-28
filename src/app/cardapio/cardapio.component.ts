import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ViewItemComponent } from './view-item/view-item.component';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {

  filterList = ['Xis', 'Prensado', 'Omelete', 'Marmitas', 'Marmitas', 'Marmitas'];

  filter = this.filterList[0];

  constructor(private MatDialog: MatDialog) { }

  ngOnInit(): void {
  }

  filterChange(item): void {
    this.filter = item;
  }

  openDialog(): void{
    const dialogRef = this.MatDialog.open(ViewItemComponent, {
      data: {name: 'oi'},
      // panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

}
