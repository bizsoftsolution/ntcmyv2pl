import { Component, OnInit } from '@angular/core';
import { ApplibService } from '../../services/applib.service';
import { UserAccount } from '../../models/UserAccount';
import { Router} from '@angular/router';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
 compName: string;

  constructor(public applib: ApplibService, public router: Router, public appComp: AppComponent) { }

  ngOnInit() {
  }


  Login() {
    this.applib.con
      .invoke('UserAccount_Login', 'Ntc', this.username, this.password)
      .then(x => {
        console.log(x);
        this.applib.loginUser = x;
        this.applib.loginUser.Password = this.password;
        if (this.applib.loginUser !== undefined) {
            this.applib.SetLoginLocalStorage();
            if (this.applib.loginUser.Type === 'Member') {
              this.router.navigate(['/home']);
            } else {
              this.router.navigate(['/Admin/dashboard']);
            }

         } else {
          alert('Invalid Credential');
          this.applib.RemoveLoginLocalStorage();
        }
      });
}

}
