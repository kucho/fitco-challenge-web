import { Component, OnInit } from '@angular/core';
import { CrudService } from '../groupbuy/services/crud.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  groupbuys = [];
  showModal = false;

  constructor(
    public crudService: CrudService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.crudService.getGroupuys().subscribe((gb) => {
      this.groupbuys = gb;
    });
  }

  handleDelete(id: string) {
    this.crudService.deleteGroupbuy(id);
    this._snackBar.open('Deleted!', 'Close', {
      duration: 2500,
      panelClass: ['mat-toolbar', 'mat-primary'],
    });
  }
}
