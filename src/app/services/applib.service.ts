import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplibService {

  get APIURL():string {
    return 'http://sl.ntc.my/api/';
  }

  get UrlPropertyDetails():string {
    return `${this.APIURL}propertydetails`;
  }

  get UrlHolidayDetails():string {
    return `${this.APIURL}HolidayDetails`;
  }
  
  constructor() { }
}
