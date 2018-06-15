import { Injectable } from '@angular/core';

import { SignalR, SignalRConnection } from 'ng2-signalr';
import { HolidayDetail } from 'src/app/models/holiday';
import { PropertyDetail } from '../models/PropertyDetail';

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
  propertyList: PropertyDetail[] = [
    {Id:123, PropertyName:'test', isActive:true},
    {Id:124, PropertyName:'test1', isActive:true},
    {Id:125, PropertyName:'test2', isActive:true}
  ];

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
      });
      // this.con.invoke('List_Property').then(p => {
      //   console.log(p);
      //   this.propertyList = p;
      //   this.propertyList.push(new PropertyDetail());
      // });
    });
  }
}
