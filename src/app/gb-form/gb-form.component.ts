import { Component, OnInit } from '@angular/core';
import { CrudService } from '../groupbuy/services/crud.service';
import { Groupbuy } from '../models/groupbuy';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gb-form',
  templateUrl: './gb-form.component.html',
  styleUrls: ['./gb-form.component.scss'],
})
export class GbFormComponent implements OnInit {
  groupbuy = {} as Groupbuy;
  minDate: Date;

  constructor(
    public crudService: CrudService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.minDate = new Date();
  }

  ngOnInit(): void {}

  addProduct() {
    if (this.groupbuy.price < 0) {
      this.showSnack('The price must be a positive number', false);
      return;
    }

    if (
      !this.groupbuy.name ||
      !this.groupbuy.description ||
      !this.groupbuy.album
    ) {
      this.showSnack('Please fill out the form', false);
      return;
    }

    console.log(this.groupbuy);

    this.groupbuy.createdAt = new Date();
    this.crudService.addGroupbuy(this.groupbuy);
    this.showSnack("Great! You'll be redirected soon", true);
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2000);
  }

  showSnack(message: string, sucess: boolean) {
    this._snackBar.open(message, 'Close', {
      duration: 2500,
      panelClass: ['mat-toolbar', sucess ? 'mat-primary' : 'mat-warn'],
    });
  }
}
