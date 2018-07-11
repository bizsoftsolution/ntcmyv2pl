import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplibService } from '../services/applib.service';
import { RoomTypeDetail } from '../models/RoomTypeDetail';
import { RoomTypeDetailServiceService } from '../services/room-type-detail-service.service';

@Component({
  selector: 'app-room-type-detail-edit',
  templateUrl: './room-type-detail-edit.component.html',
  styleUrls: ['./room-type-detail-edit.component.css']
})
export class RoomTypeDetailEditComponent implements OnInit {
  roomTypeDetail: RoomTypeDetail;
  constructor(
    private activateroute: ActivatedRoute,
    public applib: ApplibService,
    public roomTypeDetailService: RoomTypeDetailServiceService
  ) {}

  ngOnInit() {
    this.activateroute.paramMap.subscribe(x => {
      const id = +x.get('id');
      if (id === 0) {
        this.roomTypeDetail = new RoomTypeDetail();
      } else {
        this.roomTypeDetail = this.applib.roomTypeDetailList.find(
          y => y.Id === id
        );
      }
    });
  }
}
