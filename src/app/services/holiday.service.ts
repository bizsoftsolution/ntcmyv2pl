import { Injectable } from '@angular/core';
import { ApplibService } from '../services/applib.service';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Holiday } from '../models/holiday';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  holidayList: Holiday[];
  autoInsert: Boolean = true;
  constructor(public AppLib: ApplibService, public http: Http) {
    this.getHolidayList();
   }
   getHolidayList() {
    this.http.get(this.AppLib.UrlHolidayDetails)
      .pipe(map(x => <Holiday[]>x.json()))
      .subscribe(x => {
        this.holidayList = x;
        this.holidayList.forEach( x => x.HolidayDate = new Date(x.HolidayDate));
        console.log(this.holidayList);
        let h: Holiday = new Holiday();
        this.holidayList.push(h);
      });
  }
  isValid(holiday: Holiday): Boolean {
      if (!holiday.HolidayName || holiday.HolidayName === '' )
      {
          return false;
      }
      else if (!holiday.HolidayDate)
      {

      }
      else
      {
        return true;
      }
  }
  saveHoliday(holiday: Holiday) {
    if(!this.isValid(holiday)) return;
    if (holiday.Id == 0) {
      if (this.autoInsert == false) return;
      this.autoInsert = false;
      this.http.post(this.AppLib.UrlHolidayDetails, holiday)
        .pipe(map(x => x.json()))
        .subscribe(x => {
          holiday.Id = x.Id;
          let h: Holiday = new Holiday();
          this.holidayList.push(h);
          this.autoInsert = true;
          if (holiday.HolidayName != x.HolidayName) this.saveHoliday(holiday);
        });
    }
    else {
      this.http.put(`${this.AppLib.UrlHolidayDetails}/${holiday.Id}`, holiday).subscribe();
    }

  }

  deleteHoliday(holiday: Holiday) {
    if (confirm(`Are you delete this ${holiday.HolidayName}?`)) {
      this.holidayList = this.holidayList.filter(x => x.Id != holiday.Id)
      this.http.delete(`${this.AppLib.UrlHolidayDetails}/${holiday.Id}`).subscribe();
    }
  }

}
