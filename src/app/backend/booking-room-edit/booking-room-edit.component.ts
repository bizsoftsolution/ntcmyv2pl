import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplibService } from '../../services/applib.service';
import { BookingMaster } from '../../models/BookingMaster';
import { BookingRoomDetail } from '../../models/BookingRoomDetail';

@Component({
  selector: 'app-booking-room-edit',
  templateUrl: './booking-room-edit.component.html',
  styleUrls: ['./booking-room-edit.component.css']
})
export class BookingRoomEditComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute,
    public applib: ApplibService, public bookingMaster: BookingMaster) { }

roomBooking: BookingRoomDetail;
  ngOnInit() {
  }
Room() {
this.bookingMaster.RoomBooking.push(this.roomBooking);
}
}
