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

  constructor(public AppLib: ApplibService, public router: Router, public appComp: AppComponent) { }

  ngOnInit() {
  }

Login() {
  // this.AppLib.con.invoke('UserAccount_Login', 'Ntc', this.username, this.password).then(x => {
  //   console.log(x);
  // });
  console.log(this.AppLib.con.status);
}

}
