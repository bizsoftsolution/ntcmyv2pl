import { Injectable } from '@angular/core';
import {RoomType} from 'src/app/models/RoomType';
import { ApplibService } from './applib.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoomTypeService {

    constructor(public applib: ApplibService, private router: Router) {
    this.applib.con.listenFor<RoomType>('RoomType_Save').subscribe(x => {
    console.log(x);
    this.saveRoomType(x, true);
    });
    this.applib.con.listenFor<RoomType>('RoomType_Delete').subscribe(x => {
    console.log(x);
    this.deleteRoomType(x, true);
    });

   }
   isValid(roomtype: RoomType): boolean {
    if (!roomtype.Type || roomtype.Type === '') {
      return false;
    } else if (!roomtype.OrderNo || roomtype.OrderNo === null || roomtype.OrderNo === 0) {
      return false;
    } else {
      return true;
    }
  }
   saveRoomType(roomtype: RoomType , isServerCalled: Boolean = false) {
    if (isServerCalled) {
      let p = this.applib.roomTypeList.find(x => x.Id === roomtype.Id);
      if (!p) {
        p = new RoomType();
        this.applib.roomTypeList = this.applib.roomTypeList.filter(x => x.Id !== 0);
        this.applib.roomTypeList.push(p);
        this.applib.roomTypeList.push(new RoomType());
      }
      p.Id = roomtype.Id;
      p.Type = roomtype.Type;
      p.OrderNo = roomtype.OrderNo;
      p.IsActive = roomtype.IsActive;
      } else {
        console.log(roomtype);
        if (!this.isValid(roomtype)) {
          return;
        }
        this.applib.con.invoke('RoomType_Save', roomtype).then(x => {
          if (roomtype.Id === 0) {
            roomtype.Id = x;
            this.applib.roomTypeList.push(roomtype);
          }
this.router.navigate(['/Admin/room-type']);
        });
      }
    }

    deleteRoomType(roomtype: RoomType, isServerCalled: Boolean = false) {
        if (isServerCalled) {
        this.applib.roomTypeList = this.applib.roomTypeList.filter(x => x.Id !== roomtype.Id);
        } else {
          if (confirm (`Are you delete this ${roomtype.Type}?`)) {
            this.applib.con.invoke('RoomType_Delete', roomtype.Id).then(x => {
              if (x === true) {
                this.applib.roomTypeList = this.applib.roomTypeList.filter(y => y.Id !== roomtype.Id);
                alert('deleted');
              }
            }
            );
          }
        }
      }

    }

