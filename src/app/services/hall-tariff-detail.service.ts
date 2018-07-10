import { Injectable } from '@angular/core';
import { ApplibService } from './applib.service';
import { HallTariffDetail } from '../models/HallTariffDetail';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HallTariffDetailService {

  constructor(public AppLib: ApplibService, private route: Router) {
    // Save
    this.AppLib.con.listenFor<HallTariffDetail>('Save_HallTarrif_Detail').subscribe(x => {
      console.log(x);
      this.saveHallTariffDetail(x, true);
    });
    // Delete
    this.AppLib.con.listenFor<HallTariffDetail>('Delete_HallTariff_Detail').subscribe(x => {
      console.log(x);
      this.DeleteHallTariffDetail(x, true);
    });
  }
  isValid(tariffDetail: HallTariffDetail): boolean {
    if (!tariffDetail.AuditoriumId || tariffDetail.AuditoriumId == null) {
      return false;
    } else if (!tariffDetail.Amount || tariffDetail.Amount == null) {
      return false;
    } else if (!tariffDetail.HallTYpeId || tariffDetail.HallTYpeId == null) {
      return false;
    } else {
      return true;
    }
  }

  public saveHallTariffDetail(tariffDetail: HallTariffDetail, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      let d = this.AppLib.hallTariffDetailList.find(x => x.Id === tariffDetail.Id);
      if (!d) {
        d = new HallTariffDetail();
        this.AppLib.hallTariffDetailList = this.AppLib.hallTariffDetailList.filter(
          x => x.Id !== 0
        );
        this.AppLib.hallTariffDetailList.push(d);
        this.AppLib.hallTariffDetailList.push(new HallTariffDetail());
      }
      d.Id = tariffDetail.Id;
      d.Amount = tariffDetail.Amount;
      d.AmountSuffix = tariffDetail.AmountSuffix;
      d.AuditoriumId = tariffDetail.AuditoriumId;
      d.HallTYpeId = tariffDetail.HallTYpeId;
      d.IsActive = tariffDetail.IsActive;

    } else {
      console.log(tariffDetail);
      if (!this.isValid(tariffDetail)) {
        return;
      }
      this.AppLib.con.invoke('Save_HallTarrif_Detail', tariffDetail).then(x => {
        if (tariffDetail.Id === 0) {
          tariffDetail.Id = x;
          this.AppLib.hallTariffDetailList.push(tariffDetail);
        }
this.route.navigate(['/Admin/hall-tariff-details']);
      });
    }
  }

  DeleteHallTariffDetail(tariffDetail: HallTariffDetail, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      this.AppLib.hallTariffDetailList = this.AppLib.hallTariffDetailList.filter(
        x => x.Id !== tariffDetail.Id
      );
    } else {
      if (confirm(`Are you delete this TariffDetail?`)) {
        this.AppLib.con.invoke('Delete_HallTariff_Detail', tariffDetail.Id).then(x => {
          if (x === true) {
            this.AppLib.hallTariffDetailList = this.AppLib.hallTariffDetailList.filter(
              y => y.Id !== tariffDetail.Id
            );
            alert('deleted');
          }
        });
      }
    }
  }
}
