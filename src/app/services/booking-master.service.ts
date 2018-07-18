import { Injectable } from '@angular/core';
import { ApplibService } from './applib.service';
import { Router } from '@angular/router';
import { BookingMaster } from '../models/BookingMaster';

@Injectable({
  providedIn: 'root'
})
export class BookingMasterService {
  constructor(public applib: ApplibService, public router: Router) {
    this.applib.con
      .listenFor<BookingMaster>('BookingMaster_Save')
      .subscribe(x => {
        console.log(x);
        this.SaveBookingMaster(x, true);
      });
    this.applib.con
      .listenFor<BookingMaster>('BookingMaster_Delete')
      .subscribe(x => {
        console.log(x);
        this.DeleteBookingMaster(x, true);
      });
  }
  isValid(bookingMaster: BookingMaster): boolean {
    if (bookingMaster.NtcMember === null) {
      return false;
    } else {
      return true;
    }
  }
  SaveBookingMaster(
    bookingMaster: BookingMaster,
    isServerCalled: Boolean = false
  ) {
    if (isServerCalled) {
      let d = this.applib.bookingMasterList.find(
        x => x.Id === bookingMaster.Id
      );
      if (!d) {
        d = new BookingMaster();
        this.applib.bookingMasterList = this.applib.bookingMasterList.filter(
          x => x.Id !== 0
        );
        this.applib.bookingMasterList.push(d);
        this.applib.bookingMasterList.push(new BookingMaster());
      }
      d.Id = bookingMaster.Id;
      d.NtcMember = bookingMaster.NtcMember;
      d.Amount = bookingMaster.Amount;
      d.Date = bookingMaster.Date;
      this.applib.bookingMasterList = this.applib.SortRecords(this.applib.bookingMasterList);
    } else {
      console.log(bookingMaster);
      if (!this.isValid(bookingMaster)) {
        return;
      }
      this.applib.con.invoke('BookingMaster_Save', bookingMaster).then(x => {
        if (bookingMaster.Id === 0) {
          bookingMaster.Id = x;
          this.applib.bookingMasterList.push(bookingMaster);
        }
        this.applib.bookingMasterList = this.applib.SortRecords(this.applib.bookingMasterList);
        this.router.navigate(['Admin/booking-master']);
      });
    }
  }

  DeleteBookingMaster(
    bookingMaster: BookingMaster,
    IsServerCalled: Boolean = false
  ) {
    if (IsServerCalled) {
      this.applib.bookingMasterList = this.applib.bookingMasterList.filter(
        x => x.Id !== bookingMaster.Id
      );
      this.applib.bookingMasterList = this.applib.SortRecords(this.applib.bookingMasterList);
    } else {
      if (confirm(`Are you sure to delete this record?`)) {
        this.applib.con
          .invoke('BookingMaster_Delete', bookingMaster.Id)
          .then(x => {
            if (x === true) {
              this.applib.bookingMasterList = this.applib.bookingMasterList.filter(
                y => y.Id !== bookingMaster.Id
              );
              alert('deleted');
            }
          });
      }
      this.applib.bookingMasterList = this.applib.SortRecords(this.applib.bookingMasterList);
    }
  }
}
