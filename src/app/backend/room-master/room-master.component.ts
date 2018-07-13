import { Component, OnInit } from '@angular/core';
import { ApplibService } from '../../services/applib.service';

@Component({
  selector: 'app-room-master',
  templateUrl: './room-master.component.html',
  styleUrls: ['./room-master.component.css']
})
export class RoomMasterComponent implements OnInit {

  constructor(public applib: ApplibService) { }

  ngOnInit() {
  }

}
