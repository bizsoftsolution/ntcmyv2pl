import { Injectable } from '@angular/core';
import { ApplibService } from './applib.service';
import { RoomMaster } from '../models/RoomMaster';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoomMasterService {
  constructor(public applib: ApplibService, private router: Router) {
    this.applib.con.listenFor<RoomMaster>('RoomMaster_Save').subscribe(x => {
      console.log(x);
      this.saveRoomMaster(x, true);
    });
    this.applib.con.listenFor<RoomMaster>('RoomMaster_Delete').subscribe(x => {
      console.log(x);
      this.deleteRoomMaster(x, true);
    });
  }
  isValid(roomMaster: RoomMaster): boolean {
    if (!roomMaster.Type || roomMaster.Type === null) {
      return false;
    } else {
      return true;
    }
  }
  saveRoomMaster(roomMaster: RoomMaster, isServerCalled: Boolean = false) {
    if (isServerCalled) {
      let p = this.applib.roomMasterList.find(x => x.Id === roomMaster.Id);
      if (!p) {
        p = new RoomMaster();
        this.applib.roomMasterList = this.applib.roomMasterList.filter(
          x => x.Id !== 0
        );
        this.applib.roomMasterList.push(p);
        this.applib.roomMasterList.push(new RoomMaster());
      }
      p.Id = roomMaster.Id;
      p.Type = roomMaster.Type;
      p.Mattress = roomMaster.Mattress;
      p.NoOfBed = roomMaster.NoOfBed;
      p.NoOfBedDescription = roomMaster.NoOfBedDescription;
      p.NoOfUnit = roomMaster.NoOfUnit;
      p.NoOfUnitDescription = roomMaster.NoOfUnitDescription;
      p.RateofWeekDayMember = roomMaster.RateofWeekDayMember;
      p.RateOfWeekDayNonMember = roomMaster.RateOfWeekDayNonMember;
      p.RateofWeekEndMember = roomMaster.RateofWeekEndMember;
      p.RateOfWeekEndNonMember = roomMaster.RateOfWeekEndNonMember;
      p.Property = roomMaster.Property;
      p.PropertyId = roomMaster.PropertyId;
      p.IsActive = roomMaster.IsActive;
      this.applib.roomMasterList = this.applib.SortRecords(this.applib.roomMasterList);
    } else {
      console.log(roomMaster);
      if (!this.isValid(roomMaster)) {
        return;
      }
      this.applib.con.invoke('RoomMaster_Save', roomMaster).then(x => {
        if (roomMaster.Id === 0) {
          roomMaster.Id = x;
          this.applib.roomMasterList.push(roomMaster);
        }
        this.applib.roomMasterList = this.applib.SortRecords(this.applib.roomMasterList);
        this.router.navigate(['/Admin/roomMaster']);
      });
    }
  }

  deleteRoomMaster(roomMaster: RoomMaster, isServerCalled: Boolean = false) {
    if (isServerCalled) {
      this.applib.roomMasterList = this.applib.roomMasterList.filter(
        x => x.Id !== roomMaster.Id
      );
      this.applib.roomMasterList = this.applib.SortRecords(this.applib.roomMasterList);
    } else {
      if (confirm(`Are you delete this ${roomMaster.Type}?`)) {
        this.applib.con.invoke('RoomMaster_Delete', roomMaster.Id).then(x => {
          if (x === true) {
            this.applib.roomMasterList = this.applib.roomMasterList.filter(
              y => y.Id !== roomMaster.Id
            );
            alert('deleted');
          }
        });
      }
      this.applib.roomMasterList = this.applib.SortRecords(this.applib.roomMasterList);
    }
  }
}
