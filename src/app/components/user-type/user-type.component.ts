import { Component, OnInit } from '@angular/core';
import { UserTypeService } from '../../services/user-type.service';
import { UserType } from '../../models/UserType';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.css']
})
export class UserTypeComponent implements OnInit {

  userData: UserType = new UserType;

  constructor(public userType: UserTypeService) { }

  ngOnInit() {
  }

  Save() {
    this.userType.SaveUserType(this.userData);
  }

  Delete() {
this.userType.DeleteUserType(this.userData);
  }

  Find(Id: number) {
    this.userData = this.userType.AppLib.userTypeList.find(x => x.Id === Id);
  }

}
