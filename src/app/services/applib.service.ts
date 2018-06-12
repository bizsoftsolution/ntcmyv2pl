import { Injectable } from '@angular/core';

import { SignalR, SignalRConnection } from 'ng2-signalr';
import { HolidayDetail } from "src/app/models/holiday";

@Injectable({
  providedIn: 'root'
})
export class ApplibService {

  get APIURL():string {
    return "http://localhost/NTC.SLSR";
    //return 'http://sl.ntc.my/api/';
  }

  // get UrlPropertyDetails():string {
  //   return `${this.APIURL}propertydetails`;
  // }

  // get UrlHolidayDetails():string {
  //   return `${this.APIURL}HolidayDetails`;
  // }

  con:SignalRConnection;
  
  HolidayList:HolidayDetail[]=[];

  constructor(private s1:SignalR) { 
    this.con =this.s1.createConnection();
    this.con.status.subscribe(x=>console.log(x));
    this.con.start().then(x=>{console.log(x); 
      this.con.invoke("UserAccount_Login","c","c","c").then(x=>
        {
          console.log(x);
          this.con.invoke("Holiday_List").then(x=>
            {
              console.log(x);
              this.HolidayList=x;
              this.HolidayList.push(new HolidayDetail());
            }
          );
        });
    
    }); 
  };

}
