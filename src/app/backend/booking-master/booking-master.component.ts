import { Component, OnInit } from '@angular/core';
import { BookingMasterService } from '../../services/booking-master.service';

@Component({
  selector: 'app-booking-master',
  templateUrl: './booking-master.component.html',
  styleUrls: ['./booking-master.component.css']
})
export class BookingMasterComponent implements OnInit {

  constructor(public bookingService: BookingMasterService) { }

  ngOnInit() {
  }

}
