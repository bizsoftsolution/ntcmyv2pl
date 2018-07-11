import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplibService } from '../services/applib.service';
import { HallSlot } from '../models/HallSlot';
import { HallSlotService } from '../services/hall-slot.service';

@Component({
  selector: 'app-hall-slot-edit',
  templateUrl: './hall-slot-edit.component.html',
  styleUrls: ['./hall-slot-edit.component.css']
})
export class HallSlotEditComponent implements OnInit {
hallslot: HallSlot;
  constructor(private activateRoute: ActivatedRoute, private applib: ApplibService, public hslot: HallSlotService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(x => {
      const id = +x.get('id');
      if (id === 0) {
        this.hallslot = new HallSlot();
      } else {
        this.hallslot = this.applib.hallSlotList.find(y => y.Id === id);
      }
    });

  }

}
