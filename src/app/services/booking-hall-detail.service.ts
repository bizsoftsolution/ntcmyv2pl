import { Injectable } from '@angular/core';
import { ApplibService } from './applib.service';
import { Router } from '@angular/router';
import { BookingHallDetail } from '../models/BookingHallDetail';

@Injectable({
  providedIn: 'root'
})
export class BookingHallDetailService {

  constructor(public applib: ApplibService, public router: Router) {
    this.applib.con
      .listenFor<BookingHallDetail>('BookingHallDetail_Save')
      .subscribe(x => {
        console.log(x);
        this.SaveBookingHallDetail(x, true);
      });
    this.applib.con
      .listenFor<BookingHallDetail>('BookingHallDetail_Delete')
      .subscribe(x => {
        console.log(x);
        this.DeleteBookingHallDetail(x, true);
      });
  }
  isValid(bhd: BookingHallDetail): boolean {
    if (bhd.HallTariffDetailId === 0 || bhd.HallTariffDetailId === null) {
      return false;
    } else {
      return true;
    }
  }
  SaveBookingHallDetail(
    bhd: BookingHallDetail,
    isServerCalled: Boolean = false
  ) {
    if (isServerCalled) {
      let d = this.applib.bookingHallDetailList.find(
        x => x.Id === bhd.Id
      );
      if (!d) {
        d = new BookingHallDetail();
        this.applib.bookingHallDetailList = this.applib.bookingHallDetailList.filter(
          x => x.Id !== 0
        );
        this.applib.bookingHallDetailList.push(d);
        this.applib.bookingHallDetailList.push(new BookingHallDetail());
      }
      d.Id = bhd.Id;
     d.HallTariffDetailId = bhd.HallTariffDetailId;
     d.HallSlotId = bhd.HallSlotId;
     d.BookingMasterId = bhd.BookingMasterId;
     d.Amount = bhd.Amount;
     d.BookingDate = bhd.BookingDate;
    } else {
      console.log(bhd);
      if (!this.isValid(bhd)) {
        return;
      }
      this.applib.con.invoke('BookingHallDetail_Save', bhd).then(x => {
        if (bhd.Id === 0) {
          bhd.Id = x;
          this.applib.bookingHallDetailList.push(bhd);
        }
        this.router.navigate(['']);
      });
    }
  }

  DeleteBookingHallDetail(
    bhd: BookingHallDetail,
    IsServerCalled: Boolean = false
  ) {
    if (IsServerCalled) {
      this.applib.bookingHallDetailList = this.applib.bookingHallDetailList.filter(
        x => x.Id !== bhd.Id
      );
    } else {
      if (confirm(`Are you sure to delete this record?`)) {
        this.applib.con
          .invoke('BookingHallDetail_Delete', bhd.Id)
          .then(x => {
            if (x === true) {
              this.applib.bookingHallDetailList = this.applib.bookingHallDetailList.filter(
                y => y.Id !== bhd.Id
              );
              alert('deleted');
            }
          });
      }
    }
  }
}
