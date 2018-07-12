import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplibService } from '../../services/applib.service';
import { AuditoriumService } from '../../services/auditorium.service';
import { HallTypeService } from '../../services/hall-type.service';
import { HallSlotService } from '../../services/hall-slot.service';

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
public hallSlotService: HallSlotService) { }

  ngOnInit() {
  }

}
