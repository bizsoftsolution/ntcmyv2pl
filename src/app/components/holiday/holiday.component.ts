import { Component, OnInit } from '@angular/core';
import { HolidayService } from '../../services/holiday.service';
@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit {

  constructor(public holidayService: HolidayService) {  }


  ngOnInit() {
  }

}
