import { Injectable } from '@angular/core';

import { SignalR, SignalRConnection } from 'ng2-signalr';
import { HolidayDetail } from 'src/app/models/holiday';
import { CompanyDetail } from '../models/CompanyDetail';
import { PropertyDetail } from '../models/PropertyDetail';
import { UserType } from '../models/UserType';
import { UserAccount } from '../models/UserAccount';
import { LoginUser } from '../models/LoginUserDetail';
import { TariffType } from '../models/TariffType';
import { RoomType } from '../models/RoomType';
import { TariffDetail } from '../models/TariffDetail';
import { HallType } from '../models/HallType';
import { Auditorium } from '../models/Auditorium';
import { HallSlot } from '../models/HallSlot';
import { PromoCodeDetail } from '../models/PromoCodeDetail';
import {ItemDetail} from '../models/ItemDetail';
import {RoomDetail} from '../models/RoomDetail';

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
  tarifTypeList: TariffType[];
  roomTypeList: RoomType[];
  tariffDetailList: TariffDetail[];
  hallTypeList: HallType[];
  auditoriumList: Auditorium[];
  hallSlotList: HallSlot[];
  promoCodeDetailList: PromoCodeDetail[];
  itemDetailList: ItemDetail[];
roomDetailList: RoomDetail[];

  constructor(private s1: SignalR) {
    this.con = this.s1.createConnection();
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
        this.holidayList.push(new HolidayDetail());
      });
      this.con.invoke('List_Property').then(p => {
        console.log(p);
        this.propertyList = p;
        this.propertyList.push(new PropertyDetail());
      });
       this.con.invoke('TariffType_List').then(tl => {
        console.log(tl);
        this.tarifTypeList = tl;
        this.tarifTypeList.push(new TariffType());
       });
      this.con.invoke('RoomType_List').then(rt => {
        console.log(rt);
        this.roomTypeList = rt;
        this.roomTypeList.push(new RoomType());
      });
        this.con.invoke('TarrifList').then(t => {
        console.log(t);
        this.tariffDetailList = t;
        this.tariffDetailList.push(new TariffDetail());
        });
        this.con.invoke('Auditorium_List').then(a => {
          console.log(a);
          this.auditoriumList = a;
          this.auditoriumList.push(new Auditorium());
        });
        this.con.invoke('HallSlot_List').then(hs => {
          console.log(hs);
          this.hallSlotList = hs;
          this.hallSlotList.push(new HallSlot());
        });
        this.con.invoke('PromoCodeDetail_List').then(pc => {
          console.log(pc);
          this.promoCodeDetailList = pc;
          this.promoCodeDetailList.push(new PromoCodeDetail());
        });
        this.con.invoke('HallType_List').then(ht => {
          console.log(ht);
          this.hallTypeList = ht;
          this.hallTypeList.push(new HallType());
        });
        this.con.invoke('Itemdetail_List').then(it => {
          console.log(it);
          this.itemDetailList = it;
          this.itemDetailList.push(new ItemDetail());
        });
        this.con.invoke('RoomDetail_List').then(rd => {
          console.log(rd);
          this.roomDetailList = rd;
          this.roomDetailList.push(new RoomDetail());
        });

  });
}

  Login(username: string, password: string, compName: string): Boolean {
    this.con.invoke('UserAccount_Login', 'c', username, password).then(y => {
      console.log('user Login', y);
      this.loginUser = y ;
    });

      //  this.con.invoke('UserAccount_List').then(ua => {
      //   console.log(ua);
      //   this.userAccList = ua;
      // });
      // this.con.invoke('UserType_List').then(ut => {
      //   console.log(ut);
      //   this.userTypeList = ut;
      //   // const i: UserType = new UserType();
      //   // i.CompanyId = this.loginUser.UserType.CompanyId;
      //   this.userTypeList.push(new UserType);
      // });
      if (this.loginUser !== undefined) {
        return false;
      } else {
        return true;
      }
      }

}
