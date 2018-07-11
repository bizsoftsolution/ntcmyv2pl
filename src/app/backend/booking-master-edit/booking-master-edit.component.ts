import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplibService } from '../../services/applib.service';
import { BookingMasterService } from '../../services/booking-master.service';
import { BookingMaster } from '../../models/BookingMaster';

@Component({
  selector: 'app-booking-master-edit',
  templateUrl: './booking-master-edit.component.html',
  styleUrls: ['./booking-master-edit.component.css']
})
export class BookingMasterEditComponent implements OnInit {

  bookings: BookingMaster;

  constructor(private activateRoute: ActivatedRoute,
    private applib: ApplibService,
    public bookingService: BookingMasterService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(x => {
      const id = +x.get('id');
      if (id === 0) {
        this.bookings = new BookingMaster();
      } else {
        this.bookings = this.applib.bookingMasterList.find(y => y.Id === id);
      }
    });
  }

}
