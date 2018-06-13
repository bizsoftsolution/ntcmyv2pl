import { Injectable } from '@angular/core';
import { ApplibService } from '../services/applib.service';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HolidayDetail } from '../models/holiday';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

import { SignalR, SignalRConnection } from 'ng2-signalr';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  holidayList : HolidayDetail[];
  // holidayData:Holiday=new Holiday();
  autoInsert: boolean = true;
 
  conn:SignalRConnection;

  constructor(public AppLib: ApplibService,public sigR:SignalR) {
    this.getHolidayList();
   
   }
   

getHolidayList()
{
  
  this.holidayList=this.AppLib.HolidayList;
}

  //  getHolidayList() {
  //   this.http.get(this.AppLib.UrlHolidayDetails)
  //     .pipe(map(x => <Holiday[]>x.json()))
  //     .subscribe(x => {
  //       this.holidayList = x;
  //       this.holidayList.forEach(x=> x.HolidayDate=new Date(x.HolidayDate));
  //       console.log(this.holidayList);
  //       let h: Holiday = new Holiday();
  //       this.holidayList.push(h);
  //     });
  // }
  isValid(holiday: HolidayDetail):boolean{
      if(!holiday.HolidayName || holiday.HolidayName==""){
          return false
      }else if(!holiday.HolidayDate){

      }
      else
      {
        return true;
      }
  }

  saveHoliday(holidayData:HolidayDetail)
  {
    console.log(holidayData);
    if(!this.isValid(holidayData)) return;
    var c;
    this.AppLib.con.invoke("Save_Holiday", holidayData).then(x=>
      {
        c=x;
        holidayData.Id = x;
      });
    this.AppLib.HolidayList.push(new HolidayDetail());
  }

deleteHoliday(holidayData:HolidayDetail)
{
  if (confirm(`Are you delete this ${holidayData.HolidayName}?`))
   {
    this.AppLib.con.invoke("Delete_Holiday", holidayData.Id).then(x=>
      {
        if(x==true) alert("deleted");
      }
      );
      this.holidayList = this.holidayList.filter(x => x.Id != holidayData.Id)
       this.AppLib.HolidayList.push(new HolidayDetail());
   }
}
Clear()
{ 
  this.conn.invoke("Holiday_List").then(x=>
  {
    console.log(x);
    this.AppLib.HolidayList=x;
  });
}
  // saveHoliday(holiday: Holiday) {
  //   if(!this.isValid(holiday)) return;
  //   if (holiday.Id == 0) {
  //     if (this.autoInsert == false) return;
  //     this.autoInsert = false;
  //     this.http.post(this.AppLib.UrlHolidayDetails, holiday)
  //       .pipe(map(x => x.json()))
  //       .subscribe(x => {
  //         holiday.Id = x.Id;
  //         let h: Holiday = new Holiday();
  //         this.holidayList.push(h);
  //         this.autoInsert = true;
  //         if (holiday.HolidayName != x.HolidayName) this.saveHoliday(holiday);
  //       });
  //   }
  //   else {
  //     this.http.put(`${this.AppLib.UrlHolidayDetails}/${holiday.Id}`, holiday).subscribe();
  //   }

  // }

  // deleteHoliday(holiday: Holiday) {
  //   if (confirm(`Are you delete this ${holiday.HolidayName}?`)) {
  //     this.holidayList = this.holidayList.filter(x => x.Id != holiday.Id)
  //     this.http.delete(`${this.AppLib.UrlHolidayDetails}/${holiday.Id}`).subscribe();
  //   }
  // }

}
