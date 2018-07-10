import { Component, OnInit } from '@angular/core';
import { HolidayDetail } from '../models/holiday';
import { ActivatedRoute } from '@angular/router';
import { ApplibService } from '../services/applib.service';

@Component({
  selector: 'app-holiday-edit',
  templateUrl: './holiday-edit.component.html',
  styleUrls: ['./holiday-edit.component.css']
})
export class HolidayEditComponent implements OnInit {
  holiday: HolidayDetail;
  constructor(
    private activateroute: ActivatedRoute,
    private applib: ApplibService
  ) {}

  ngOnInit() {
    this.activateroute.paramMap.subscribe(x => {
      const id = +x.get('id');
      if (id === 0) {
        this.holiday = new HolidayDetail();
      } else {
        this.holiday = this.applib.holidayList.find(y => y.Id === id);
      }
    });
  }
}
