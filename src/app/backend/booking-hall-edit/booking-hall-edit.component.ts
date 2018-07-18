import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplibService } from '../../services/applib.service';
import { AuditoriumService } from '../../services/auditorium.service';
import { HallTypeService } from '../../services/hall-type.service';
import { HallSlotService } from '../../services/hall-slot.service';
import { BookingMaster } from '../../models/BookingMaster';
import { BookingHallDetail } from '../../models/BookingHallDetail';

@Component({
  selector: 'app-booking-hall-edit',
  templateUrl: './booking-hall-edit.component.html',
  styleUrls: ['./booking-hall-edit.component.css']
})
export class BookingHallEditComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute,
    public Applib: ApplibService,
  public auditoriumService: AuditoriumService,
public hallTypeService: HallTypeService,
public hallSlotService: HallSlotService,
public bookingMaster: BookingMaster) { }

hallBooking: BookingHallDetail;
  ngOnInit() {
  }
Hall() {
  this.bookingMaster.HallBooking.push(this.hallBooking);
  console.log(this.bookingMaster.HallBooking);
}
}
