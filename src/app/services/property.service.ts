import { Injectable } from '@angular/core';
import { ApplibService } from '../services/applib.service';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  propertyList: Property[];
  autoInsert: Boolean = true;
  constructor(public AppLib: ApplibService, public http: Http) {
    this.getPropertyList();
  }

  getPropertyList() {
    this.http.get(this.AppLib.UrlPropertyDetails)
      .pipe(map(x => x.json()))
      .subscribe(x => {
        this.propertyList = x;
        let p: Property = new Property(0, '');
        this.propertyList.push(p);
      });
  }

  saveProperty(property: Property) {
    if (property.Id == 0) {
      if (this.autoInsert == false) return;
      this.autoInsert = false;
      this.http.post(this.AppLib.UrlPropertyDetails, property)
        .pipe(map(x => x.json()))
        .subscribe(x => {
          property.Id = x.Id;
          let p: Property = new Property(0, '');
          this.propertyList.push(p);
          this.autoInsert = true;
          if (property.PropertyName != x.PropertyName) this.saveProperty(property);
        });
    }
    else {
      this.http.put(`${this.AppLib.UrlPropertyDetails}/${property.Id}`, property).subscribe();
    }

  }

  deleteProperty(property: Property) {
    if (confirm(`Are you delete this ${property.PropertyName}?`)) {
      this.propertyList = this.propertyList.filter(x => x.Id != property.Id)
      this.http.delete(`${this.AppLib.UrlPropertyDetails}/${property.Id}`).subscribe();
    }
  }

}
