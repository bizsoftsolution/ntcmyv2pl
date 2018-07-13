import { Component, OnInit } from '@angular/core';
import { ApplibService } from '../../services/applib.service';
import { RoomMaster } from '../../models/RoomMaster';
import { ActivatedRoute } from '@angular/router';
import { RoomMasterService } from '../../services/room-master.service';

@Component({
  selector: 'app-room-master-edit',
  templateUrl: './room-master-edit.component.html',
  styleUrls: ['./room-master-edit.component.css']
})
export class RoomMasterEditComponent implements OnInit {

  roomMaster: RoomMaster;

  constructor(public applib: ApplibService,
    private activateRoute: ActivatedRoute,
    public roomMasterService: RoomMasterService
  ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(x => {
      const id = +x.get('id');
      if (id === 0) {
       this.roomMaster = new RoomMaster();
       this.roomMaster.OrderNo = this.applib.NextOrderNo(this.applib.roomMasterList);
      } else {
        this.roomMaster = this.applib.roomMasterList.find(y => y.Id === id);
      }
    });
  }

}
