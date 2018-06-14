import { Injectable } from '@angular/core';

import { SignalR, SignalRConnection } from 'ng2-signalr';
import { HolidayDetail } from 'src/app/models/holiday';
import { PropertyDetail } from '../models/property';
import { CompanyDetail } from '../models/CompanyDetail';

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
  loginUser: any;

  holidayList: HolidayDetail[];
propertyList: PropertyDetail[];
companyList: CompanyDetail[];

  constructor(private s1: SignalR) {
    this.con = this.s1.createConnection();
    this.con.status.subscribe(x => console.log(x));
    this.con.start().then(x => {
      console.log('Done', x);
      this.con.invoke('UserAccount_Login', 'c', 'c', 'c').then(y => {
        console.log('user Login', y);
        this.loginUser = y;
      });
      this.con.invoke('Holiday_List').then(y => {
        console.log(y);
        this.holidayList = y;
        this.holidayList.push(new HolidayDetail());
      }
      );
      this.con.invoke('Property_List').then(p => {
      console.log(p);
      this.propertyList = p;
      this.propertyList.push(new PropertyDetail());
      } );
      this.con.invoke('CompanyDetail_List').then( c => {
      console.log(c);
      this.companyList = c;

    });

    });
  }
}
