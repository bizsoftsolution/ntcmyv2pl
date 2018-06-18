import { Component, OnInit } from '@angular/core';
import { RoomTypeService } from '../../services/room-type.service';

@Component({
  selector: 'app-room-type',
  templateUrl: './room-type.component.html',
  styleUrls: ['./room-type.component.css']
})
export class RoomTypeComponent implements OnInit {

  constructor(public roomTypeService: RoomTypeService) { }

  ngOnInit() {
  }

}
