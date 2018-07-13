import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplibService } from '../services/applib.service';
import { Auditorium } from '../models/Auditorium';
import { AuditoriumService } from '../services/auditorium.service';

@Component({
  selector: 'app-auditorium-edit',
  templateUrl: './auditorium-edit.component.html',
  styleUrls: ['./auditorium-edit.component.css']
})
export class AuditoriumEditComponent implements OnInit {
auditorium: Auditorium;
  constructor(private activateRoute: ActivatedRoute, private applib: ApplibService, public auditoriumService: AuditoriumService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(x => {
      const id = +x.get('id');
      if (id === 0) {
        this.auditorium = new Auditorium();
        this.auditorium.OrderNo = this.applib.NextOrderNo(this.applib.auditoriumList);
      } else {
        this.auditorium = this.applib.auditoriumList.find(y => y.Id === id);
      }
    });
  }

}
