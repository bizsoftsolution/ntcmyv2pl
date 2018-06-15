import { Injectable } from '@angular/core';
import {ApplibService} from '../services/applib.service';
import {UserAccount} from 'src/app/models/UserAccount';

@Injectable({
  providedIn: 'root'
})
export class UserAccountService {

  constructor(public AppLib: ApplibService) {
    // Save
    this.AppLib.con.listenFor<UserAccount>('UserAccount_Save').subscribe(x => {
      console.log(x);
      this.SaveUserAccount(x, true);
    });
    // Delete
    this.AppLib.con.listenFor<UserAccount>('UserAccount_Delete').subscribe(x => {
      console.log(x);
      this.DeleteUserAccount(x, true);
    });
  }
  isValid(user: UserAccount): boolean {
    if (!user.UserName || user.UserName === '') {
      return false;
    }  else {
      return true;
    }
  }

  SaveUserAccount(user: UserAccount, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      let d = this.AppLib.userAccList.find(x => x.Id === user.Id);
      if (!d) {
        d = new UserAccount();
        this.AppLib.userAccList = this.AppLib.userAccList.filter(
          x => x.Id !== 0
        );
        this.AppLib.userAccList.push(d);
        this.AppLib.userAccList.push(new UserAccount());
      }
      d.Id = user.Id;
      d.UserName = user.UserName;
      d.LoginId = user.LoginId;
      d.Password = user.Password;
     d.UserTypeId = user.UserTypeId;
    } else {
      console.log(user);
      if (!this.isValid(user)) {
        return;
      }
      this.AppLib.con.invoke('UserAccount_Save', user).then(x => {
        if (user.Id !== x) {
          if (x !== 0) {
            this.AppLib.userAccList.push(new UserAccount());
          }
        }
        user.Id = x;
      });
    }
  }

  DeleteUserAccount(user: UserAccount, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      this.AppLib.userAccList = this.AppLib.userAccList.filter(
        x => x.Id !== user.Id
      );
    } else {
      if (confirm(`Are you delete this ${user.UserName}?`)) {
        this.AppLib.con.invoke('UserAccount_Delete', user.Id).then(x => {
          if (x === true) {
            this.AppLib.userAccList = this.AppLib.userAccList.filter(
              y => y.Id !== user.Id
            );
            alert('deleted');
          }
        });
      }
    }
  }
}

