import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../../backend/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  loginpopup() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      alert('Closed');
    });
  }

}
