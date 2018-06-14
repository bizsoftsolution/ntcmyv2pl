import { Component, OnInit } from '@angular/core';
import { HolidayService } from '../../services/holiday.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
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
