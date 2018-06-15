import { Injectable } from '@angular/core';
import {ApplibService} from '../services/applib.service';
import { UserType } from '../models/UserType';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {

  constructor(public AppLib: ApplibService) {
    // Save
    this.AppLib.con.listenFor<UserType>('userType_Save').subscribe(x => {
      console.log(x);
      this.SaveUserType(x, true);
    });
    // Delete
    this.AppLib.con.listenFor<UserType>('userType_Delete').subscribe(x => {
      console.log(x);
      this.DeleteUserType(x, true);
    });
  }
  isValid(user: UserType): boolean {
    if (!user.TypeOfUser || user.TypeOfUser === '') {
      return false;
    }  else {
      return true;
    }
  }

  SaveUserType(user: UserType, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      let d = this.AppLib.userTypeList.find(x => x.Id === user.Id);
      if (!d) {
        d = new UserType();
        this.AppLib.userTypeList = this.AppLib.userTypeList.filter(
          x => (x.Id !== 0 || x.Id !== undefined)
        );
        d.Id = user.Id;
        d.TypeOfUser = user.TypeOfUser;
        d.CompanyId = user.CompanyId;
        d.Description = user.TypeOfUser;
        this.AppLib.userTypeList.push(d);
        this.AppLib.userTypeList.push(new UserType());
      }
    } else {
      console.log('save', user);
      if (!this.isValid(user)) {
        return;
      }
     const userData: UserType = new UserType();
       userData.CompanyId = this.AppLib.loginUser.UserType.CompanyId;
      userData.Description = user.Description;
      userData.TypeOfUser = user.TypeOfUser;

        this.AppLib.con.invoke('userType_Save', userData).then(x => {
        if (userData.Id !== x) {
          if (x !== 0) {
             this.AppLib.userTypeList.push(new UserType());
          }
        }
        user.Id = x;
      });
    }
  }

  DeleteUserType(user: UserType, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      this.AppLib.userTypeList = this.AppLib.userTypeList.filter(
        x => x.Id !== user.Id
      );
    } else {
      if (confirm(`Are you delete this ${user.TypeOfUser}?`)) {
        this.AppLib.con.invoke('userType_Delete', user.Id).then(x => {
          if (x === true) {
            this.AppLib.userTypeList = this.AppLib.userTypeList.filter(
              y => y.Id !== user.Id
            );
            alert('deleted');
          }
        });
      }
    }
  }
}
