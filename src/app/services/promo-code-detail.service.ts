import { Injectable } from '@angular/core';
import { ApplibService } from './applib.service';
import { PromoCodeDetail } from '../models/PromoCodeDetail';

@Injectable({
  providedIn: 'root'
})
export class PromoCodeDetailService {

  constructor(public AppLib: ApplibService) {
    // Save
    this.AppLib.con.listenFor<PromoCodeDetail>('PromoCodeDetail_Save').subscribe(x => {
      console.log(x);
      this.SavePromoCodeDetail(x, true);
    });
    // Delete
    this.AppLib.con.listenFor<PromoCodeDetail>('PromoCodeDetail_Delete').subscribe(x => {
      console.log(x);
      this.DeletePromoCodeDetail(x, true);
    });
  }
  isValid(promoCodeDetail: PromoCodeDetail): boolean {
    if (!promoCodeDetail.PromoCode || promoCodeDetail.PromoCode === '') {
      return false;
    } else if (!promoCodeDetail.OrderNo || promoCodeDetail.OrderNo == null) {
      return false;
    } else {
      return true;
    }
  }

  SavePromoCodeDetail(promoCodeDetail: PromoCodeDetail, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      let d = this.AppLib.promoCodeDetailList.find(x => x.Id === promoCodeDetail.Id);
      if (!d) {
        d = new PromoCodeDetail();
        this.AppLib.promoCodeDetailList = this.AppLib.promoCodeDetailList.filter(
          x => x.Id !== 0
        );
        this.AppLib.promoCodeDetailList.push(d);
        this.AppLib.promoCodeDetailList.push(new PromoCodeDetail());
      }
      d.Id = promoCodeDetail.Id;
      d.PromoCode = promoCodeDetail.PromoCode;
      d.DateFrom = promoCodeDetail.DateFrom;
      d.DateTo = promoCodeDetail.DateTo;
      d.OrderNo = promoCodeDetail.OrderNo;
      d.IsActive = promoCodeDetail.IsActive;
    } else {
      console.log(promoCodeDetail);
      if (!this.isValid(promoCodeDetail)) {
        return;
      }
      this.AppLib.con.invoke('PromoCodeDetail_Save', promoCodeDetail).then(x => {
        if (promoCodeDetail.Id !== x) {
          if (x !== 0) {
            this.AppLib.promoCodeDetailList.push(new PromoCodeDetail());
          }
        }
        promoCodeDetail.Id = x;
      });
    }
  }

  DeletePromoCodeDetail(promoCodeDetail: PromoCodeDetail, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      this.AppLib.promoCodeDetailList = this.AppLib.promoCodeDetailList.filter(
        x => x.Id !== promoCodeDetail.Id
      );
    } else {
      if (confirm(`Are you delete this ${promoCodeDetail.PromoCode}?`)) {
        this.AppLib.con.invoke('PromoCodeDetail_Delete', promoCodeDetail.Id).then(x => {
          if (x === true) {
            this.AppLib.promoCodeDetailList = this.AppLib.promoCodeDetailList.filter(
              y => y.Id !== promoCodeDetail.Id
            );
            alert('deleted');
          }
        });
      }
    }
  }
}
