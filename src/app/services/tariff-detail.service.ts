import { Injectable } from '@angular/core';
import { ApplibService } from './applib.service';
import { RoomTariffDetail } from '../models/RoomTariffDetail';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TariffDetailService {
  constructor(public AppLib: ApplibService, private router: Router) {
    // Save
    this.AppLib.con.listenFor<RoomTariffDetail>('Save_Tarrif_Detail').subscribe(x => {
      console.log(x);
      this.saveTariffDetail(x, true);
    });
    // Delete
    this.AppLib.con.listenFor<RoomTariffDetail>('Delete_Tariff_Detail').subscribe(x => {
      console.log(x);
      this.DeleteTariffDetail(x, true);
    });
  }
  isValid(tariffDetail: RoomTariffDetail): boolean {
    if (!tariffDetail.RateOfWeekDayMember || tariffDetail.RateOfWeekDayMember == null) {
      return false;
    } else if (!tariffDetail.RateOfWeekDayNonMember || tariffDetail.RateOfWeekDayNonMember == null) {
      return false;
    } else if (!tariffDetail.RateOfWeekEndMember || tariffDetail.RateOfWeekEndMember == null) {
      return false;
    } else if (!tariffDetail.RateOfWeekEndNonMember || tariffDetail.RateOfWeekEndNonMember == null) {
      return false;
    } else {
      return true;
    }
  }

  public saveTariffDetail(tariffDetail: RoomTariffDetail, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      let d = this.AppLib.tariffDetailList.find(x => x.Id === tariffDetail.Id);
      if (!d) {
        d = new RoomTariffDetail();
        this.AppLib.tariffDetailList = this.AppLib.tariffDetailList.filter(
          x => x.Id !== 0
        );
        this.AppLib.tariffDetailList.push(d);
        this.AppLib.tariffDetailList.push(new RoomTariffDetail());
      }
      d.Id = tariffDetail.Id;
      d.PropertyId = tariffDetail.PropertyId;

      d.RoomTypeId = tariffDetail.RoomTypeId;
      d.RateOfWeekDayMember = tariffDetail.RateOfWeekDayMember;
      d.RateOfWeekDayNonMember = tariffDetail.RateOfWeekDayNonMember;
      d.RateOfWeekEndMember = tariffDetail.RateOfWeekEndMember;
      d.RateOfWeekEndNonMember = tariffDetail.RateOfWeekEndNonMember;
      d.IsActive = tariffDetail.IsActive;
      d.RoomType = tariffDetail.RoomType;
      d.Property = tariffDetail.Property;
    } else {
      console.log(tariffDetail);
      if (!this.isValid(tariffDetail)) {
        return;
      }
      this.AppLib.con.invoke('Save_Tarrif_Detail', tariffDetail).then(x => {
        if (tariffDetail.Id === 0) {
          tariffDetail.Id = x;
          this.AppLib.tariffDetailList.push(tariffDetail);
        }
this.router.navigate(['/Admin/tariff-details']);
      });
    }
  }

  DeleteTariffDetail(tariffDetail: RoomTariffDetail, IsServerCalled: Boolean = false) {
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


