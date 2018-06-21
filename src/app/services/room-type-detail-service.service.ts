import { Injectable } from '@angular/core';
import { ApplibService } from './applib.service';
import { RoomTypeDetail } from '../models/RoomTypeDetail';

@Injectable({
  providedIn: 'root'
})
export class RoomTypeDetailServiceService {

  constructor(public AppLib: ApplibService) {
    // Save
    this.AppLib.con.listenFor<RoomTypeDetail>('Save_RoomTypeDetail').subscribe(x => {
      console.log(x);
      this.saveRoomTypeDetail(x, true);
    });
    // Delete
    this.AppLib.con.listenFor<RoomTypeDetail>('Delete_RoomTypeDetail').subscribe(x => {
      console.log(x);
      this.DeleteRoomTypeDetail(x, true);
    });
  }
  isValid(roomTypeDetail: RoomTypeDetail): boolean {
    if (!roomTypeDetail.RoomTypeId || roomTypeDetail.RoomTypeId == null) {
      return false;
    } else if (!roomTypeDetail.NoOfUnit || roomTypeDetail.NoOfUnit == null) {
      return false;
    } else if (!roomTypeDetail.NoOfBed || roomTypeDetail.NoOfBed == null) {
      return false;
    } else {
      return true;
    }
  }

  public saveRoomTypeDetail(roomTypeDetail: RoomTypeDetail, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      let d = this.AppLib.roomTypeDetailList.find(x => x.Id === roomTypeDetail.Id);
      if (!d) {
        d = new RoomTypeDetail();
        this.AppLib.roomTypeDetailList = this.AppLib.roomTypeDetailList.filter(
          x => x.Id !== 0
        );
        this.AppLib.roomTypeDetailList.push(d);
        this.AppLib.roomTypeDetailList.push(new RoomTypeDetail());
      }
      d.Id = roomTypeDetail.Id;
      d.NoOfUnit = roomTypeDetail.NoOfUnit;
      d.NoOfUnitDescription = roomTypeDetail.NoOfUnitDescription;
      d.NoOfUnit = roomTypeDetail.NoOfUnit;
      d.Mattress = roomTypeDetail.Mattress;
      d.RoomTypeId = roomTypeDetail.RoomTypeId;

    } else {
      console.log(roomTypeDetail);
      if (!this.isValid(roomTypeDetail)) {
        return;
      }
      this.AppLib.con.invoke('Save_RoomTypeDetail', roomTypeDetail).then(x => {
        if (roomTypeDetail.Id !== x) {
          if (x !== 0) {
            this.AppLib.roomTypeDetailList.push(new RoomTypeDetail());
          }
        }
        roomTypeDetail.Id = x;
      });
    }
  }

  DeleteRoomTypeDetail(roomTypeDetail: RoomTypeDetail, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      this.AppLib.roomTypeDetailList = this.AppLib.roomTypeDetailList.filter(
        x => x.Id !== roomTypeDetail.Id
      );
    } else {
      if (confirm(`Are you delete this TariffDetail?`)) {
        this.AppLib.con.invoke('Delete_RoomTypeDetail', roomTypeDetail.Id).then(x => {
          if (x === true) {
            this.AppLib.roomTypeDetailList = this.AppLib.roomTypeDetailList.filter(
              y => y.Id !== roomTypeDetail.Id
            );
            alert('deleted');
          }
        });
      }
    }
  }
}
