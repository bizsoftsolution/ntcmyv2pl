import { Injectable } from '@angular/core';
import { ApplibService } from './applib.service';
import { Country } from '../models/Country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(public AppLib: ApplibService) {
    // Save
    this.AppLib.con.listenFor<Country>('Save_Country').subscribe(x => {
      console.log(x);
      this.SaveCountry(x, true);
    });
    // Delete
    this.AppLib.con.listenFor<Country>('Delete_Country').subscribe(x => {
      console.log(x);
      this.DeleteCountry(x, true);
    });
  }
  isValid(country: Country): boolean {
    if (!country.CountryName || country.CountryName === '') {
      return false;
    }  else {
      return true;
    }
  }

  SaveCountry(country: Country, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      let d = this.AppLib.countryList.find(x => x.Id === country.Id);
      if (!d) {
        d = new Country();
        this.AppLib.countryList = this.AppLib.countryList.filter(
          x => x.Id !== 0
        );
        this.AppLib.countryList.push(d);
        this.AppLib.countryList.push(new Country());
      }
      d.Id = country.Id;
      d.CountryName = country.CountryName;
    } else {
      console.log(country);
      if (!this.isValid(country)) {
        return;
      }
      this.AppLib.con.invoke('Save_Country', country).then(x => {
        if (country.Id !== x) {
          if (x !== 0) {
            this.AppLib.countryList.push(new Country());
          }
        }
        country.Id = x;
      });
    }
  }

  DeleteCountry(country: Country, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      this.AppLib.countryList = this.AppLib.countryList.filter(
        x => x.Id !== country.Id
      );
    } else {
      if (confirm(`Are you delete this ${country.CountryName}?`)) {
        this.AppLib.con.invoke('Delete_Country', country.Id).then(x => {
          if (x === true) {
            this.AppLib.countryList = this.AppLib.countryList.filter(
              y => y.Id !== country.Id
            );
            alert('deleted');
          }
        });
      }
    }
  }
}
