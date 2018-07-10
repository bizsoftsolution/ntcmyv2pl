import { Component, OnInit } from '@angular/core';
import { RoomType } from '../models/RoomType';
import { ActivatedRoute } from '@angular/router';
import { ApplibService } from '../services/applib.service';

@Component({
  selector: 'app-room-type-edit',
  templateUrl: './room-type-edit.component.html',
  styleUrls: ['./room-type-edit.component.css']
})
export class RoomTypeEditComponent implements OnInit {
roomtype: RoomType;
  constructor(private activateroute: ActivatedRoute, private applib: ApplibService) { }

  ngOnInit() {
    this.activateroute.paramMap.subscribe(x => {
      const id = +x.get('id');
      if (id === 0) {
        this.roomtype = new RoomType();
      } else {
        this.roomtype = this.applib.roomTypeList.find(y => y.Id === id);
      }
    });
  }

}
