import { Injectable } from '@angular/core';
import { ApplibService } from './applib.service';
import { ItemDetail } from '../models/ItemDetail';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ItemDetailService {

  constructor(public AppLib: ApplibService, private router: Router) {
    // Save
    this.AppLib.con.listenFor<ItemDetail>('ItemDetail_Save').subscribe(x => {
      console.log(x);
      this.SaveItemDetail(x, true);
    });
    // Delete
    this.AppLib.con.listenFor<ItemDetail>('ItemDetail_Delete').subscribe(x => {
      console.log(x);
      this.DeleteItemDetail(x, true);
    });
  }
  isValid(item: ItemDetail): boolean {
    if (!item.ItemName || item.ItemName === '') {
      return false;
    }  else {
      return true;
    }
  }

  SaveItemDetail(itemData: ItemDetail, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      let d = this.AppLib.itemDetailList.find(x => x.Id === itemData.Id);
      if (!d) {
        d = new ItemDetail();
        this.AppLib.itemDetailList = this.AppLib.itemDetailList.filter(
          x => x.Id !== 0
        );
        this.AppLib.itemDetailList.push(d);
        this.AppLib.itemDetailList.push(new ItemDetail());
      }
      d.Id = itemData.Id;
      d.ItemName = itemData.ItemName;
      d.IsActive = itemData.IsActive;
      d.Rate = itemData.Rate;
      d.Stock = itemData.Stock;


    } else {
      console.log(itemData);
      if (!this.isValid(itemData)) {
        return;
      }
      this.AppLib.con.invoke('ItemDetail_Save', itemData).then(x => {
        if (itemData.Id === 0) {
          itemData.Id = x;
          this.AppLib.itemDetailList.push(itemData);
        }
this.router.navigate(['/Admin/']);
      });
    }
  }

  DeleteItemDetail(itemData: ItemDetail, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      this.AppLib.itemDetailList = this.AppLib.itemDetailList.filter(
        x => x.Id !== itemData.Id
      );
    } else {
      if (confirm(`Are you delete this ${itemData.ItemName}?`)) {
        this.AppLib.con.invoke('ItemDetail_Delete', itemData.Id).then(x => {
          if (x === true) {
            this.AppLib.itemDetailList = this.AppLib.itemDetailList.filter(
              y => y.Id !== itemData.Id
            );
            alert('deleted');
          }
        });
      }
    }
  }
}
