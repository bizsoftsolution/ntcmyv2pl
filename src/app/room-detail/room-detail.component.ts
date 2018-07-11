import { Component, OnInit } from '@angular/core';
import { ApplibService } from '../services/applib.service';
import { RoomDetailService } from '../services/room-detail.service';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {

  constructor(public applib: ApplibService, public roomDetailService: RoomDetailService) { }

  ngOnInit() {
  }

}
