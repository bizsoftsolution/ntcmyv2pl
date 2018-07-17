import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplibService } from '../../services/applib.service';
import { BookingMasterService } from '../../services/booking-master.service';
import { BookingMaster } from '../../models/BookingMaster';
import { MatDialog } from '@angular/material';
import { BookingRoomEditComponent } from '../booking-room-edit/booking-room-edit.component';
import { BookingHallEditComponent } from '../booking-hall-edit/booking-hall-edit.component';

@Component({
  selector: 'app-booking-master-edit',
  templateUrl: './booking-master-edit.component.html',
  styleUrls: ['./booking-master-edit.component.css']
})
export class BookingMasterEditComponent implements OnInit {

  booking: BookingMaster;

  constructor(private activateRoute: ActivatedRoute,
    public applib: ApplibService,
    public bookingService: BookingMasterService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(x => {
      const id = +x.get('id');
      if (id === 0) {
        this.booking = new BookingMaster();
      } else {
        this.booking = this.applib.bookingMasterList.find(y => y.Id === id);
      }
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(BookingRoomEditComponent, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      alert('Closed');
    });
  }

  hallPopup() {
    const dialogRef = this.dialog.open(BookingHallEditComponent, {
      width: '550px'
    });

    dialogRef.afterClosed().subscribe(result => {
      alert('Closed');
    });
  }

}

