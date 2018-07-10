import { Injectable } from '@angular/core';
import { ApplibService } from '../services/applib.service';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { PropertyDetail } from '../models/PropertyDetail';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  autoInsert: Boolean = true;
  constructor(public AppLib: ApplibService , private router: Router) {
    this.AppLib.con.listenFor<PropertyDetail>('Save_Property').subscribe(x => {
      console.log(x);
      this.saveProperty(x, true);
    });

    this.AppLib.con
      .listenFor<PropertyDetail>('Delete_Property')
      .subscribe(x => {
        console.log(x);
        this.deleteProperty(x, true);
      });
  }
  isValid(propertyDetail: PropertyDetail): boolean {
    if (!propertyDetail.PropertyName || propertyDetail.PropertyName === '') {
      return false;
    } else if (
      !propertyDetail.OrderNo ||
      propertyDetail.OrderNo === null ||
      propertyDetail.OrderNo === 0
    ) {
      return false;
    } else {
      return true;
    }
  }

  saveProperty(
    propertyDetail: PropertyDetail,
    isServerCalled: Boolean = false
  ) {
    if (isServerCalled) {
      let p = this.AppLib.propertyList.find(x => x.Id === propertyDetail.Id);
      if (!p) {
        p = new PropertyDetail();
        this.AppLib.propertyList = this.AppLib.propertyList.filter(
          x => x.Id !== 0
        );
        this.AppLib.propertyList.push(p);
      }
      p.Id = propertyDetail.Id;
      p.PropertyName = propertyDetail.PropertyName;
      p.OrderNo = propertyDetail.OrderNo;
      p.IsActive = propertyDetail.IsActive;
    } else {
      console.log(propertyDetail);
      if (!this.isValid(propertyDetail)) {
        return;
      }
      this.AppLib.con.invoke('Save_Property', propertyDetail).then(x => {
        if (propertyDetail.Id === 0) {
          propertyDetail.Id = x;
          this.AppLib.propertyList.push(propertyDetail);
        }
this.router.navigate(['/Admin/property']);
      });
    }
  }

  deleteProperty(
    propertyDetail: PropertyDetail,
    isServerCalled: Boolean = false
  ) {
    if (isServerCalled) {
      this.AppLib.propertyList = this.AppLib.propertyList.filter(
        x => x.Id !== propertyDetail.Id
      );
    } else {
      if (confirm(`Are you delete this ${propertyDetail.PropertyName}?`)) {
        this.AppLib.con.invoke('Delete_Property', propertyDetail.Id).then(x => {
          if (x === true) {
            this.AppLib.propertyList = this.AppLib.propertyList.filter(
              y => y.Id !== propertyDetail.Id
            );
            alert('deleted');
          }
        });
      }
    }
  }
}
