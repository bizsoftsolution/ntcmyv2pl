import { Injectable } from '@angular/core';
import { ApplibService } from './applib.service';
import { HallMaster } from '../models/HallMaster';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class HallMasterService {

  constructor(public applib: ApplibService, private router: Router) {
    this.applib.con.listenFor<HallMaster>('HallMaster_Save').subscribe(x => {
      console.log(x);
      this.saveHallMaster(x, true);
    });
    this.applib.con.listenFor<HallMaster>('HallMaster_Delete').subscribe(x => {
      console.log(x);
      this.deleteHallMaster(x, false);
    });
  }
  isValid(hallMaster: HallMaster): boolean {
    if (!hallMaster.Type || hallMaster.Type === null) {
      return false;
    } else {
      return true;
    }
  }
  saveHallMaster(hallMaster: HallMaster, isServerCalled: Boolean = false) {
    if (isServerCalled) {
      let p = this.applib.hallMasterList.find(x => x.Id === hallMaster.Id);
      if (!p) {
        p = new HallMaster();
        this.applib.hallMasterList = this.applib.hallMasterList.filter(
          x => x.Id !== 0
        );
        this.applib.hallMasterList.push(p);
        this.applib.hallMasterList.push(new HallMaster());
      }
      p.Id = hallMaster.Id;
      p.Type = hallMaster.Type;
      p.Amount = hallMaster.Amount;
      p.AmountSuffix = hallMaster.AmountSuffix;
      p.AuditoriumId = hallMaster.AuditoriumId;
      p.AuditoriumName = hallMaster.AuditoriumName;
      p.Property = hallMaster.Property;
      p.PropertyId = hallMaster.PropertyId;
      p.IsActive = hallMaster.IsActive;
      p.OrderNo = hallMaster.OrderNo;
      this.applib.hallMasterList = this.applib.SortRecords(this.applib.hallMasterList);
    } else {
      console.log(hallMaster);
      if (!this.isValid(hallMaster)) {
        return;
      }
      this.applib.con.invoke('HallMaster_Save', hallMaster).then(x => {
        if (hallMaster.Id === 0) {
          hallMaster.Id = x;
          this.applib.hallMasterList.push(hallMaster);
        }
        this.applib.hallMasterList = this.applib.SortRecords(this.applib.hallMasterList);
        this.router.navigate(['/Admin/hallMaster']);
      });
    }
  }

  deleteHallMaster(hallMaster: HallMaster, isServerCalled: Boolean = false) {
    if (isServerCalled) {
      this.applib.hallMasterList = this.applib.hallMasterList.filter(
        x => x.Id !== hallMaster.Id
      );
      this.applib.hallMasterList = this.applib.SortRecords(this.applib.hallMasterList);
    } else {
      if (confirm(`Are you delete this ${hallMaster.Type}?`)) {
        this.applib.con.invoke('HallMaster_Delete', hallMaster.Id).then(x => {
          if (x === true) {
            this.applib.hallMasterList = this.applib.hallMasterList.filter(
              y => y.Id !== hallMaster.Id
            );
            alert('deleted');
          }
        });
      }
      this.applib.hallMasterList = this.applib.SortRecords(this.applib.hallMasterList);
    }
  }
}
