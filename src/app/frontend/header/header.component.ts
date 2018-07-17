import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../../backend/login/login.component';
import { ApplibService } from '../../services/applib.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, public applib: ApplibService, public router: Router) { }

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
  Logout() {
    localStorage.removeItem('LoginId');
    localStorage.removeItem('Password');
    localStorage.removeItem('UserType');
  this.router.navigate(['/login']);
  }

}
