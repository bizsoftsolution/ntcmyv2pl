import { Injectable } from '@angular/core';
import {ApplibService} from './applib.service';
import { Auditorium } from '../models/Auditorium';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuditoriumService {

  constructor(public AppLib: ApplibService, private router: Router) {
    // Save
    this.AppLib.con.listenFor<Auditorium>('Auditorium_Save').subscribe(x => {
      console.log(x);
      this.SaveAuditorium(x, true);
    });
    // Delete
    this.AppLib.con.listenFor<Auditorium>('Auditorium_Delete').subscribe(x => {
      console.log(x);
      this.DeleteAuditorium(x, true);
    });
  }
  isValid(auditorium: Auditorium): boolean {
    if (!auditorium.Name || auditorium.Name === '') {
      return false;
    } else if (!auditorium.OrderNo || auditorium.OrderNo == null) {
      return false;
    } else {
      return true;
    }
  }

  SaveAuditorium(auditoriumData: Auditorium, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      let d = this.AppLib.auditoriumList.find(x => x.Id === auditoriumData.Id);
      if (!d) {
        d = new Auditorium();
        this.AppLib.auditoriumList = this.AppLib.auditoriumList.filter(
          x => x.Id !== 0
        );
        this.AppLib.auditoriumList.push(d);
        this.AppLib.auditoriumList.push(new Auditorium());
      }
      d.Id = auditoriumData.Id;
      d.Name = auditoriumData.Name;
      d.OrderNo = auditoriumData.OrderNo;
      d.IsActive = auditoriumData.IsActive;
    } else {
      console.log(auditoriumData);
      if (!this.isValid(auditoriumData)) {
        return;
      }
      this.AppLib.con.invoke('Auditorium_Save', auditoriumData).then(x => {
        if (auditoriumData.Id === 0) {
        auditoriumData.Id = x;
        this.AppLib.auditoriumList.push(auditoriumData);
        }
        this.router.navigate(['/Admin/auditorium']);
      });
    }
  }

  DeleteAuditorium(auditoriumData: Auditorium, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      this.AppLib.auditoriumList = this.AppLib.auditoriumList.filter(
        x => x.Id !== auditoriumData.Id
      );
    } else {
      if (confirm(`Are you delete this ${auditoriumData.Name}?`)) {
        this.AppLib.con.invoke('Auditorium_Delete', auditoriumData.Id).then(x => {
          if (x === true) {
            this.AppLib.auditoriumList = this.AppLib.auditoriumList.filter(
              y => y.Id !== auditoriumData.Id
            );
            alert('deleted');
          }
        });
      }
    }
  }
}
