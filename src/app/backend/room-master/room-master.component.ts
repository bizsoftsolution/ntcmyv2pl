import { Component, OnInit } from '@angular/core';
import { ApplibService } from '../../services/applib.service';
import { RoomMasterService } from '../../services/room-master.service';

@Component({
  selector: 'app-room-master',
  templateUrl: './room-master.component.html',
  styleUrls: ['./room-master.component.css']
})
export class RoomMasterComponent implements OnInit {

  constructor(public applib: ApplibService, public roomMasterService: RoomMasterService) { }

  ngOnInit() {
  }

}
