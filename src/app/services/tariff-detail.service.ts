import { Injectable } from '@angular/core';
import { ApplibService } from './applib.service';
import { TariffDetail } from '../models/TariffDetail';

@Injectable({
  providedIn: 'root'
})
export class TariffDetailService {
  constructor(public AppLib: ApplibService) {
    // Save
    this.AppLib.con.listenFor<TariffDetail>('Save_Tarrif_Detail').subscribe(x => {
      console.log(x);
      this.SaveTariffDetail(x, true);
    });
    // Delete
    this.AppLib.con.listenFor<TariffDetail>('Delete_Tariff_Detail').subscribe(x => {
      console.log(x);
      this.DeleteTariffDetail(x, true);
    });
  }
  isValid(tariffDetail: TariffDetail): boolean {
    if (!tariffDetail.PropertyId || tariffDetail.PropertyId === null) {
      return false;
    } else if (!tariffDetail.TariffId || tariffDetail.TariffId == null) {
      return false;
    } else if (!tariffDetail.RoomTypeId || tariffDetail.RoomTypeId == null) {
      return false;
    } else {
      return true;
    }
  }

  SaveTariffDetail(tariffDetail: TariffDetail, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      let d = this.AppLib.tariffDetailList.find(x => x.Id === tariffDetail.Id);
      if (!d) {
        d = new TariffDetail();
        this.AppLib.tariffDetailList = this.AppLib.tariffDetailList.filter(
          x => x.Id !== 0
        );
        this.AppLib.tariffDetailList.push(d);
        this.AppLib.tariffDetailList.push(new TariffDetail());
      }
      d.Id = tariffDetail.Id;
      d.PropertyId = tariffDetail.PropertyId;
      d.TariffId = tariffDetail.TariffId;
      d.RoomTypeId = tariffDetail.RoomTypeId;
      d.RateOfWeekDayMember = tariffDetail.RateOfWeekDayMember;
      d.RateOfWeekDayNonMember = tariffDetail.RateOfWeekDayNonMember;
      d.RateOfWeekEndMember = tariffDetail.RateOfWeekEndMember;
      d.RateOfWeekEndNonMember = tariffDetail.RateOfWeekEndNonMember;
      d.IsActive = tariffDetail.IsActive;

    } else {
      console.log(tariffDetail);
      if (!this.isValid(tariffDetail)) {
        return;
      }
      this.AppLib.con.invoke('Save_Tarrif_Detail', tariffDetail).then(x => {
        if (tariffDetail.Id !== x) {
          if (x !== 0) {
            this.AppLib.tariffDetailList.push(new TariffDetail());
          }
        }
        tariffDetail.Id = x;
      });
    }
  }

  DeleteTariffDetail(tariffDetail: TariffDetail, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      this.AppLib.tariffDetailList = this.AppLib.tariffDetailList.filter(
        x => x.Id !== tariffDetail.Id
      );
    } else {
      if (confirm(`Are you delete this TariffDetail?`)) {
        this.AppLib.con.invoke('Delete_Tariff_Detail', tariffDetail.Id).then(x => {
          if (x === true) {
            this.AppLib.tariffDetailList = this.AppLib.tariffDetailList.filter(
              y => y.Id !== tariffDetail.Id
            );
            alert('deleted');
          }
        });
      }
    }
  }
}


