import { FilterComponent } from './../filter/filter.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'ne-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(){
   //this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(FilterComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}


