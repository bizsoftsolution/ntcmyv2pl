import { Component, OnInit } from '@angular/core';
import { ApplibService } from '../services/applib.service';
import { HallMasterService } from '../services/hall-master.service';

@Component({
  selector: 'app-hall-master',
  templateUrl: './hall-master.component.html',
  styleUrls: ['./hall-master.component.css']
})
export class HallMasterComponent implements OnInit {

  constructor(public applib: ApplibService, public hallMasterService: HallMasterService) { }

  ngOnInit() {
  }

}
