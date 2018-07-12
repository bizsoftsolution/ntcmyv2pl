import { Injectable } from '@angular/core';

import { SignalR, SignalRConnection } from 'ng2-signalr';
import { HolidayDetail } from 'src/app/models/holiday';
import { CompanyDetail } from '../models/CompanyDetail';
import { PropertyDetail } from '../models/PropertyDetail';
import { UserType } from '../models/UserType';
import { UserAccount } from '../models/UserAccount';
import { LoginUser } from '../models/LoginUserDetail';

import { RoomType } from '../models/RoomType';
import { RoomTariffDetail } from '../models/RoomTariffDetail';
import { HallType } from '../models/HallType';
import { Auditorium } from '../models/Auditorium';
import { HallSlot } from '../models/HallSlot';
import { PromoCodeDetail } from '../models/PromoCodeDetail';
import {ItemDetail} from '../models/ItemDetail';
import {RoomDetail} from '../models/RoomDetail';
import { HallTariffDetail } from '../models/HallTariffDetail';
import { RoomTypeDetail } from '../models/RoomTypeDetail';
import { Country } from '../models/Country';
import { State } from '../models/State';
import { promise } from 'protractor';
import { BookingMaster } from '../models/BookingMaster';
import { BookingHallDetail } from '../models/BookingHallDetail';
import { BookingRoomDetail } from '../models/BookingRoomDetail';
import { RoomMaster } from '../models/RoomMaster';

@Injectable({
  providedIn: 'root'
})
export class ApplibService {
  get APIURL(): string {
    return 'http://sl.ntc.my/api/';
  }

  get UrlPropertyDetails(): string {
    return `${this.APIURL}propertydetails`;
  }

  get UrlHolidayDetails(): string {
    return `${this.APIURL}HolidayDetails`;
  }

  con: SignalRConnection;
  loginUser: UserAccount;

  holidayList: HolidayDetail[];
  propertyList: PropertyDetail[];
  companyList: CompanyDetail[];
  userTypeList: UserType[] = [];
  userAccList: UserAccount[];

  roomTypeList: RoomType[];
  tariffDetailList: RoomTariffDetail[];
  hallTypeList: HallType[];
  auditoriumList: Auditorium[];
  hallSlotList: HallSlot[];
  promoCodeDetailList: PromoCodeDetail[];
  itemDetailList: ItemDetail[];
  roomDetailList: RoomDetail[];
  hallTariffDetailList: HallTariffDetail[];
  roomTypeDetailList: RoomTypeDetail[];
  countryList: Country[];
  stateList: State[];
bookingMasterList: BookingMaster[];
bookingHallDetailList: BookingHallDetail[];
bookingRoomDetailList: BookingRoomDetail[];
roomMasterList: RoomMaster[];

  constructor(private s1: SignalR) {
    console.log('connection startincg in client');
    this.con = this.s1.createConnection();
    console.log('started connection');
    this.con.status.subscribe(x => console.log(x));
    this.con.start().then(x => {
      console.log('Done', x);
      this.con.invoke('CompanyDetail_List').then(c => {
        console.log(c);
        this.companyList = c;
      });
      this.con.invoke('Holiday_List').then(y => {
        console.log(y);
        this.holidayList = y;

      });
      this.con.invoke('List_Property').then(p => {
        console.log(p);
        this.propertyList = p;
      });

      this.con.invoke('RoomType_List').then(rt => {
        console.log(rt);
        this.roomTypeList = rt;
      });
        this.con.invoke('TarrifList').then(t => {
        console.log(t);
        this.tariffDetailList = t;
        });
        this.con.invoke('Auditorium_List').then(a => {
          console.log(a);
          this.auditoriumList = a;
        });
        this.con.invoke('HallSlot_List').then(hs => {
          console.log(hs);
          this.hallSlotList = hs;
        });
        this.con.invoke('PromoCodeDetail_List').then(pc => {
          console.log(pc);
          this.promoCodeDetailList = pc;
        });
        this.con.invoke('HallType_List').then(ht => {
          console.log(ht);
          this.hallTypeList = ht;
        });
        this.con.invoke('Itemdetail_List').then(it => {
          console.log(it);
          this.itemDetailList = it;
        });
        this.con.invoke('RoomDetail_List').then(rd => {
          console.log(rd);
          this.roomDetailList = rd;
        });
        this.con.invoke('HallTariffList').then(ht => {
          console.log(ht);
          this.hallTariffDetailList = ht;
        });
        this.con.invoke('RoomTypeDetail_List').then(rt => {
          console.log(rt);
          this.roomTypeDetailList = rt;
        });
        this.con.invoke('Country_List').then(c => {
          console.log(c);
          this.countryList = c;

        });
        this.con.invoke('State_List').then(s => {
          console.log(s);
          this.stateList = s;

        });
        this.con.invoke('BookingMaster_List').then(bkm => {
          console.log(bkm);
          this.bookingMasterList = bkm;
        });
        this.con.invoke('BookingHallDetail_List').then(bhd => {
          console.log(bhd);
          this.bookingHallDetailList = bhd;
        });
        this.con.invoke('BookingRoomDetail_List').then(brd => {
          console.log(brd);
          this.bookingRoomDetailList = brd;
        });
        this.con.invoke('RoomMaster_List').then(rm => {
          console.log(rm);
          this.roomMasterList = rm;
        });
  });
}

}
