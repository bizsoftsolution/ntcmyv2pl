import { Injectable } from '@angular/core';
import { ApplibService } from './applib.service';
import { Router } from '@angular/router';
import { BookingRoomDetail } from '../models/BookingRoomDetail';

@Injectable({
  providedIn: 'root'
})
export class BookingRoomDetailService {

  constructor(public applib: ApplibService, public router: Router) {
    this.applib.con
      .listenFor<BookingRoomDetail>('BookingRoomDetail_Save')
      .subscribe(x => {
        console.log(x);
        this.SaveBookingRoomDetail(x, true);
      });
    this.applib.con
      .listenFor<BookingRoomDetail>('BookingRoomDetail_Delete')
      .subscribe(x => {
        console.log(x);
        this.DeleteBookingRoomDetail(x, true);
      });
  }
  isValid(brd: BookingRoomDetail): boolean {
    if (brd.BookingMasterId === 0 || brd.BookingMasterId === null) {
      return false;
    } else {
      return true;
    }
  }
  SaveBookingRoomDetail(
    brd: BookingRoomDetail,
    isServerCalled: Boolean = false
  ) {
    if (isServerCalled) {
      let d = this.applib.bookingRoomDetailList.find(
        x => x.Id === brd.Id
      );
      if (!d) {
        d = new BookingRoomDetail();
        this.applib.bookingRoomDetailList = this.applib.bookingRoomDetailList.filter(
          x => x.Id !== 0
        );
        this.applib.bookingRoomDetailList.push(d);
        this.applib.bookingRoomDetailList.push(new BookingRoomDetail());
      }
     d.IsMember = brd.IsMember;
     d.RoomDetailId = brd.RoomDetailId;
     d.BookingMasterId = brd.BookingMasterId;
     d.Amount = brd.Amount;
     d.BookingDate = brd.BookingDate;
     d.Id = brd.Id;
    } else {
      console.log(brd);
      if (!this.isValid(brd)) {
        return;
      }
      this.applib.con.invoke('BookingRoomDetail_Save', brd).then(x => {
        if (brd.Id === 0) {
          brd.Id = x;
          this.applib.bookingRoomDetailList.push(brd);
        }
        this.router.navigate(['']);
      });
    }
  }

  DeleteBookingRoomDetail(
    brd: BookingRoomDetail,
    IsServerCalled: Boolean = false
  ) {
    if (IsServerCalled) {
      this.applib.bookingRoomDetailList = this.applib.bookingRoomDetailList.filter(
        x => x.Id !== brd.Id
      );
    } else {
      if (confirm(`Are you sure to delete this record?`)) {
        this.applib.con
          .invoke('BookingRoomDetail_Delete', brd.Id)
          .then(x => {
            if (x === true) {
              this.applib.bookingRoomDetailList = this.applib.bookingRoomDetailList.filter(
                y => y.Id !== brd.Id
              );
              alert('deleted');
            }
          });
      }
    }
  }
}
