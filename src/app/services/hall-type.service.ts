import { Injectable } from '@angular/core';
import { ApplibService } from './applib.service';
import { HallType } from '../models/HallType';

@Injectable({
  providedIn: 'root'
})
export class HallTypeService {
  constructor(public AppLib: ApplibService) {
    // Save
    this.AppLib.con.listenFor<HallType>('HallType_Save').subscribe(x => {
      console.log(x);
      this.SaveHallType(x, true);
    });
    // Delete
    this.AppLib.con.listenFor<HallType>('HallType_Delete').subscribe(x => {
      console.log(x);
      this.DeleteHallType(x, true);
    });
  }
  isValid(halltype: HallType): boolean {
    if (!halltype.Type || halltype.Type === '') {
      return false;
    } else if (!halltype.OrderNo || halltype.OrderNo == null) {
      return false;
    } else {
      return true;
    }
  }

  SaveHallType(halltype: HallType, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      let d = this.AppLib.hallTypeList.find(x => x.Id === halltype.Id);
      if (!d) {
        d = new HallType();
        this.AppLib.hallTypeList = this.AppLib.hallTypeList.filter(
          x => x.Id !== 0
        );
        this.AppLib.hallTypeList.push(d);
        this.AppLib.hallTypeList.push(new HallType());
      }
      d.Id = halltype.Id;
      d.Type = halltype.Type;
      d.OrderNo = halltype.OrderNo;
      d.IsActive = halltype.IsActive;
    } else {
      console.log(halltype);
      if (!this.isValid(halltype)) {
        return;
      }
      this.AppLib.con.invoke('HallType_Save', halltype).then(x => {
        if (halltype.Id !== x) {
          if (x !== 0) {
            this.AppLib.hallTypeList.push(new HallType());
          }
        }
        halltype.Id = x;
      });
    }
  }

  DeleteHallType(halltype: HallType, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      this.AppLib.hallTypeList = this.AppLib.hallTypeList.filter(
        x => x.Id !== halltype.Id
      );
    } else {
      if (confirm(`Are you delete this ${halltype.Type}?`)) {
        this.AppLib.con.invoke('HallType_Delete', halltype.Id).then(x => {
          if (x === true) {
            this.AppLib.hallTypeList = this.AppLib.hallTypeList.filter(
              y => y.Id !== halltype.Id
            );
            alert('deleted');
          }
        });
      }
    }
  }
}
