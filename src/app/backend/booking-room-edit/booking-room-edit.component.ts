import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplibService } from '../../services/applib.service';

@Component({
  selector: 'app-booking-room-edit',
  templateUrl: './booking-room-edit.component.html',
  styleUrls: ['./booking-room-edit.component.css']
})
export class BookingRoomEditComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute,
    private applib: ApplibService) { }

  ngOnInit() {
  }

}
