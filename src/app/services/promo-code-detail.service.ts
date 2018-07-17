import { Injectable } from '@angular/core';
import { ApplibService } from './applib.service';
import { PromoCodeDetail } from '../models/PromoCodeDetail';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PromoCodeDetailService {

  constructor(public AppLib: ApplibService, private router: Router) {
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
    }  else if (!promoCodeDetail.PromoCode || promoCodeDetail.PromoCode === '') {
      return false;
    }  else if (!promoCodeDetail.MinimumAmount || promoCodeDetail.MinimumAmount === null || promoCodeDetail.MinimumAmount === 0) {
      return false;
    }  else if (!promoCodeDetail.DateFrom || promoCodeDetail.DateFrom === null) {
      return false;
    }  else if (!promoCodeDetail.DateTo || promoCodeDetail.DateTo === null) {
      return false;
    }   else if (!promoCodeDetail.DiscountRate || promoCodeDetail.DiscountRate === null || promoCodeDetail.DiscountRate === 0) {
      return false;
    }    else {
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
      d.MinimumAmount = promoCodeDetail.MinimumAmount;
      d.DiscountRate = promoCodeDetail.DiscountRate;
      d.IsActive = promoCodeDetail.IsActive;
      this.AppLib.promoCodeDetailList = this.AppLib.SortRecords(this.AppLib.promoCodeDetailList);
    } else {
      console.log(promoCodeDetail);
      if (!this.isValid(promoCodeDetail)) {
        return;
      }
      this.AppLib.con.invoke('PromoCodeDetail_Save', promoCodeDetail).then(x => {
        if (promoCodeDetail.Id === 0) {
          promoCodeDetail.Id = x;
          this.AppLib.promoCodeDetailList.push(promoCodeDetail);
        }
        this.AppLib.promoCodeDetailList = this.AppLib.SortRecords(this.AppLib.promoCodeDetailList);
this.router.navigate(['/Admin/promo-code-details']);
      });
    }
  }

  DeletePromoCodeDetail(promoCodeDetail: PromoCodeDetail, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      this.AppLib.promoCodeDetailList = this.AppLib.promoCodeDetailList.filter(
        x => x.Id !== promoCodeDetail.Id
      );
      this.AppLib.promoCodeDetailList = this.AppLib.SortRecords(this.AppLib.promoCodeDetailList);
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
      this.AppLib.promoCodeDetailList = this.AppLib.SortRecords(this.AppLib.promoCodeDetailList);
    }
  }
}
