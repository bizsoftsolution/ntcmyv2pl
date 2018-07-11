import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplibService } from '../services/applib.service';
import { RoomDetailService } from '../services/room-detail.service';
import { RoomDetail } from '../models/RoomDetail';

@Component({
  selector: 'app-room-detail-edit',
  templateUrl: './room-detail-edit.component.html',
  styleUrls: ['./room-detail-edit.component.css']
})
export class RoomDetailEditComponent implements OnInit {
roomDetail: RoomDetail;
  constructor(private activateroute: ActivatedRoute, public applib: ApplibService, public roomDetailService: RoomDetailService) { }

  ngOnInit() {
    this.activateroute.paramMap.subscribe(x => {
      const id = +x.get('id');
      if (id === 0) {
this.roomDetail = new RoomDetail();
      } else {
        this.roomDetail = this.applib.roomDetailList.find(y => y.Id === id);
      }

    });
  }

}
