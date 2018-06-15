import { Injectable } from '@angular/core';

import { SignalR, SignalRConnection } from 'ng2-signalr';
import { HolidayDetail } from 'src/app/models/holiday';
import { CompanyDetail } from '../models/CompanyDetail';
import { PropertyDetail } from '../models/PropertyDetail';
import { UserType } from '../models/UserType';
import { UserAccount } from '../models/UserAccount';
import { LoginUser } from '../models/LoginUserDetail';


@Injectable({
  providedIn: 'root'
})
export class ApplibService {
  get APIURL(): string {
    return 'http://sl.ntc.my/api/';
  }

  get UrlPropertyDetails(): string {
    return `${this.APIURL}propertydetails`;
  }

  get UrlHolidayDetails(): string {
    return `${this.APIURL}HolidayDetails`;
  }

  con: SignalRConnection;
  loginUser: UserAccount;



  holidayList: HolidayDetail[];
  propertyList: PropertyDetail[];
  companyList: CompanyDetail[];
  userTypeList: UserType[] = [];
  userAccList: UserAccount[];

  constructor(private s1: SignalR) {
    this.con = this.s1.createConnection();
    this.con.status.subscribe(x => console.log(x));
    this.con.start().then(x => {
      console.log('Done', x);
      this.con.invoke('CompanyDetail_List').then(c => {
        console.log(c);
        this.companyList = c;
      });
  });
}

  Login(username: string, password: string, compName: string): Boolean {
    this.con.invoke('UserAccount_Login', compName, username, password).then(y => {
      console.log('user Login', y);
      this.loginUser = y ;
    });
      this.con.invoke('Holiday_List').then(y => {
        console.log(y);
        this.holidayList = y;
        this.holidayList.push(new HolidayDetail());
      });
      this.con.invoke('List_Property').then(p => {
        console.log(p);
        this.propertyList = p;
        this.propertyList.push(new PropertyDetail());
      });
      this.con.invoke('List_Property').then(p => {
      console.log(p);
      this.propertyList = p;
      this.propertyList.push(new PropertyDetail());
      } );

       this.con.invoke('UserAccount_List').then(ua => {
        console.log(ua);
        this.userAccList = ua;
      });
      this.con.invoke('UserType_List').then(ut => {
        console.log(ut);
        this.userTypeList = ut;
        // const i: UserType = new UserType();
        // i.CompanyId = this.loginUser.UserType.CompanyId;
        this.userTypeList.push(new UserType);
      }); if (this.loginUser !== undefined) {
        return false;
      } else {
        return true;
      }
      }

}
