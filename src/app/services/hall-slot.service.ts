import { Injectable } from '@angular/core';
import { ApplibService } from './applib.service';
import { HallSlot } from '../models/HallSlot';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HallSlotService {

  constructor(public AppLib: ApplibService, private route: Router) {
    // Save
    this.AppLib.con.listenFor<HallSlot>('HallSlot_Save').subscribe(x => {
      console.log(x);
      this.SaveHallSlot(x, true);
    });
    // Delete
    this.AppLib.con.listenFor<HallSlot>('HallSlot_Delete').subscribe(x => {
      console.log(x);
      this.DeleteHallSlot(x, true);
    });
  }
  isValid(hallSlot: HallSlot): boolean {
    if (!hallSlot.SlotName || hallSlot.SlotName === '') {
      return false;
    } else if (!hallSlot.OrderNo || hallSlot.OrderNo == null) {
      return false;
    } else {
      return true;
    }
  }

  SaveHallSlot(hallSlot: HallSlot, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      let d = this.AppLib.hallSlotList.find(x => x.Id === hallSlot.Id);
      if (!d) {
        d = new HallSlot();
        this.AppLib.hallSlotList = this.AppLib.hallSlotList.filter(
          x => x.Id !== 0
        );
        this.AppLib.hallSlotList.push(d);
        this.AppLib.hallSlotList.push(new HallSlot());
      }
      d.Id = hallSlot.Id;
      d.SlotName = hallSlot.SlotName;
      d.TimeFrom = hallSlot.TimeFrom;
      d.TimeTo = hallSlot.TimeTo;
      d.OrderNo = hallSlot.OrderNo;
      d.IsActive = hallSlot.IsActive;
      this.AppLib.hallSlotList = this.AppLib.SortRecords(this.AppLib.hallSlotList);
    } else {
      console.log(hallSlot);
      if (!this.isValid(hallSlot)) {
        return;
      }
      this.AppLib.con.invoke('HallSlot_Save', hallSlot).then(x => {
        if (hallSlot.Id === 0) {
          hallSlot.Id = x;
         this.AppLib.hallSlotList.push(hallSlot);
        }
        this.AppLib.hallSlotList = this.AppLib.SortRecords(this.AppLib.hallSlotList);
this.route.navigate(['/Admin/hall-slot']);
      });
    }
  }

  DeleteHallSlot(hallSlot: HallSlot, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      this.AppLib.hallSlotList = this.AppLib.hallSlotList.filter(
        x => x.Id !== hallSlot.Id
      );
      this.AppLib.hallSlotList = this.AppLib.SortRecords(this.AppLib.hallSlotList);
    } else {
      if (confirm(`Are you delete this ${hallSlot.SlotName}?`)) {
        this.AppLib.con.invoke('HallSlot_Delete', hallSlot.Id).then(x => {
          if (x === true) {
            this.AppLib.hallSlotList = this.AppLib.hallSlotList.filter(
              y => y.Id !== hallSlot.Id
            );
            alert('deleted');
          }
        });
      }
      this.AppLib.hallSlotList = this.AppLib.SortRecords(this.AppLib.hallSlotList);
    }
  }
}
