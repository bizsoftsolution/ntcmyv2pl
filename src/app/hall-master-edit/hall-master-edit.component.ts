import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplibService } from '../services/applib.service';
import { HallMasterService } from '../services/hall-master.service';
import { HallMaster } from '../models/HallMaster';
import { Auditorium } from '../models/Auditorium';

@Component({
  selector: 'app-hall-master-edit',
  templateUrl: './hall-master-edit.component.html',
  styleUrls: ['./hall-master-edit.component.css']
})
export class HallMasterEditComponent implements OnInit {
  hallMaster: HallMaster;
  Auditorium: Auditorium;
  constructor(
    private acivateRoute: ActivatedRoute,
    public applib: ApplibService,
    public hallMasterService: HallMasterService
  ) {}

  ngOnInit() {
  this.acivateRoute.paramMap.subscribe(x => {
    const id = +x.get('id');
    if (id === 0) {
this.hallMaster = new HallMaster();
this.hallMaster.OrderNo = this.applib.NextOrderNo(this.applib.hallMasterList);
    } else {
      this.hallMaster = this.applib.hallMasterList.find(y => y.Id === id);
      this.Auditorium = this.applib.auditoriumList.find(y => y.Id === this.hallMaster.AuditoriumId);
    }
  });
  }
  Auditorium_Selection() {
    this.hallMaster.AuditoriumId = this.Auditorium.Id;
    this.hallMaster.AuditoriumName = this.Auditorium.Name;
  }
}
