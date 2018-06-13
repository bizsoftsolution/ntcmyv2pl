import { Injectable } from '@angular/core';
import { ApplibService } from '../services/applib.service';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HolidayDetail } from '../models/holiday';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs';

import { SignalR, SignalRConnection } from 'ng2-signalr';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {
  autoInsert: Boolean = true;
  constructor(public AppLib: ApplibService) {
    // Save
    this.AppLib.con.listenFor<HolidayDetail>('Save_Holiday').subscribe(x => {
      console.log(x);
      this.SaveHoliday(x, true);
    });
    // Delete
    this.AppLib.con.listenFor<HolidayDetail>('Delete_Holiday').subscribe(x => {
      console.log(x);
      this.DeleteHoliday(x, true);
    });
  }
  isValid(holiday: HolidayDetail): boolean {
    if (!holiday.HolidayName || holiday.HolidayName === '') {
      return false;
    } else if (!holiday.HolidayDate || holiday.HolidayDate == null) {
      return false;
    } else {
      return true;
    }
  }

  SaveHoliday(holidayData: HolidayDetail, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      let d = this.AppLib.holidayList.find(x => x.Id === holidayData.Id);
      if (!d) {
        d = new HolidayDetail();
        this.AppLib.holidayList = this.AppLib.holidayList.filter(
          x => x.Id !== 0
        );
        this.AppLib.holidayList.push(d);
        this.AppLib.holidayList.push(new HolidayDetail());
      }
      d.Id = holidayData.Id;
      d.HolidayName = holidayData.HolidayName;
      d.HolidayDate = holidayData.HolidayDate;
    } else {
      console.log(holidayData);
      if (!this.isValid(holidayData)) {
        return;
      }
      this.AppLib.con.invoke('Save_Holiday', holidayData).then(x => {
        if (holidayData.Id !== x) {
          if (x !== 0) {
            this.AppLib.holidayList.push(new HolidayDetail());
          }
        }
        holidayData.Id = x;
      });
    }
  }

  DeleteHoliday(holidayData: HolidayDetail, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      this.AppLib.holidayList = this.AppLib.holidayList.filter(
        x => x.Id !== holidayData.Id
      );
    } else {
      if (confirm(`Are you delete this ${holidayData.HolidayName}?`)) {
        this.AppLib.con.invoke('Delete_Holiday', holidayData.Id).then(x => {
          if (x === true) {
            this.AppLib.holidayList = this.AppLib.holidayList.filter(
              y => y.Id !== holidayData.Id
            );
            alert('deleted');
          }
        });
      }
    }
  }
}
