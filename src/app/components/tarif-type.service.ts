import { Injectable } from '@angular/core';
import { ApplibService } from '../services/applib.service';
import { TariffType } from '../models/TariffType';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarifTypeService {

  constructor(public AppLib: ApplibService) {
    // Save
    this.AppLib.con.listenFor<TariffType>('TariffType_Save').subscribe(x => {
      console.log(x);
      this.SaveTarif(x, true);
    });
    // Delete
    this.AppLib.con.listenFor<TariffType>('TariffType_Delete').subscribe(x => {
      console.log(x);
      this.DeleteTarrif(x, true);
    });
  }
  isValid(ttype: TariffType): boolean {
    if (!ttype.Type || ttype.Type === '') {
      return false;
    } else {
      return true;
    }
  }

  SaveTarif(TData: TariffType, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      let d = this.AppLib.tarifTypeList.find(x => x.Id === TData.Id);
      if (!d) {
        d = new TariffType();
        this.AppLib.tarifTypeList.push(d);
        this.AppLib.tarifTypeList.filter(x => x.Id !== 0) ;
      }
      d.Id = TData.Id;
      d.Type = TData.Type;
    } else {
      console.log(TData);
      if (!this.isValid(TData)) {
        return;
      }
      this.AppLib.con.invoke('TariffType_Save', TData).then(x => {
        if (TData.Id !== x) {
          if (x !== 0) {
            this.AppLib.tarifTypeList.push(new TariffType());
          }
        }
        TData.Id = x;
      });
    }
  }

  DeleteTarrif(TData: TariffType, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      this.AppLib.holidayList = this.AppLib.holidayList.filter(
        x => x.Id !== TData.Id
      );
    } else {
      if (confirm(`Are you delete this ${TData.Type}?`)) {
        this.AppLib.con.invoke('TariffType_Delete', TData.Id).then(x => {
          if (x === true) {
            this.AppLib.tarifTypeList = this.AppLib.tarifTypeList.filter(
              y => y.Id !== TData.Id
            );
            alert('deleted');
          }
        });
      }
    }
  }
}
