import { Injectable } from '@angular/core';
import { ApplibService } from './applib.service';
import { RoomDetail } from '../models/RoomDetail';

@Injectable({
  providedIn: 'root'
})
export class RoomDetailService {

  constructor(public AppLib: ApplibService) {
    // Save
    this.AppLib.con.listenFor<RoomDetail>('RoomDetail_Save').subscribe(x => {
      console.log(x);
      this.SaveRoomDetail(x, true);
    });
    // Delete
    this.AppLib.con.listenFor<RoomDetail>('Delete_RoomDetail').subscribe(x => {
      console.log(x);
      this.DeleteRoomDetail(x, true);
    });
  }
  isValid(room: RoomDetail): boolean {
    if (!room.Name || room.Name === '') {
      return false;
    }  else {
      return true;
    }
  }

  SaveRoomDetail(roomData: RoomDetail, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      let d = this.AppLib.roomDetailList.find(x => x.Id === roomData.Id);
      if (!d) {
        d = new RoomDetail();
        this.AppLib.roomDetailList = this.AppLib.roomDetailList.filter(
          x => x.Id !== 0
        );
        this.AppLib.roomDetailList.push(d);
        this.AppLib.roomDetailList.push(new RoomDetail());
      }
      d.Id = roomData.Id;
      d.Name = roomData.Name;
      d.IsActive = roomData.IsActive;
      d.TariffDetailId = roomData.TariffDetailId;

    } else {
      console.log(roomData);
      if (!this.isValid(roomData)) {
        return;
      }
      this.AppLib.con.invoke('RoomDetail_Save', roomData).then(x => {
        if (roomData.Id !== x) {
          if (x !== 0) {
            this.AppLib.roomDetailList.push(new RoomDetail());
          }
        }
        roomData.Id = x;
      });
    }
  }

  DeleteRoomDetail(roomData: RoomDetail, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      this.AppLib.roomDetailList = this.AppLib.roomDetailList.filter(
        x => x.Id !== roomData.Id
      );
    } else {
      if (confirm(`Are you delete this ${roomData.Name}?`)) {
        this.AppLib.con.invoke('Delete_RoomDetail', roomData.Id).then(x => {
          if (x === true) {
            this.AppLib.roomDetailList = this.AppLib.roomDetailList.filter(
              y => y.Id !== roomData.Id
            );
            alert('deleted');
          }
        });
      }
    }
  }
}
