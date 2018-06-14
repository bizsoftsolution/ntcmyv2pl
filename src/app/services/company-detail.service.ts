import { Injectable } from '@angular/core';
import {ApplibService} from '../services/applib.service';
import { CompanyDetail } from '../models/CompanyDetail';


@Injectable({
  providedIn: 'root'
})
export class CompanyDetailService {

  constructor(public AppLib: ApplibService) {
// Save
this.AppLib.con.listenFor<CompanyDetail>('CompanyDetail_Save').subscribe(x => {
  console.log(x);
  this.Savecompany(x, true);
});
// Delete
this.AppLib.con.listenFor<CompanyDetail>('CompanyDetail_Delete').subscribe(x => {
  console.log(x);
  this.Deletecompany(x, true);
});

    }
    isValid(company: CompanyDetail): boolean {
      if (!company.CompanyName || company.CompanyName === '') {
        return false;
      } else {
        return true;
      }
    }
    Savecompany(companyData: CompanyDetail, IsServerCalled: Boolean = false) {
      if (IsServerCalled) {
        let d = this.AppLib.companyList.find(x => x.Id === companyData.Id);
        if (!d) {
          d = new CompanyDetail();
          this.AppLib.companyList = this.AppLib.companyList.filter(
            x => x.Id !== 0
          );
          this.AppLib.companyList.push(d);
          this.AppLib.companyList.push(new CompanyDetail());
        }
        d.Id = companyData.Id;
        d.CompanyName = companyData.CompanyName;
        d.AddressLine1 = companyData.AddressLine1;
        d.AddressLine2 = companyData.AddressLine2;
        d.CityName = companyData.CityName;
        d.CompanyType = companyData.CompanyType;
        d.EMailId = companyData.EMailId;
        d.GSTNo = companyData.GSTNo;
        d.IsActive = companyData.IsActive;
        d.Password = companyData.Password;
        d.PostalCode = companyData.PostalCode;
        d.TelephoneNo = companyData.TelephoneNo;
        d.UnderCompanyId = companyData.UnderCompanyId;
        d.UserId = companyData.UserId;
        d.MobileNo = companyData.MobileNo;
        d.WebSite = companyData.WebSite;
        d.FaxNo = companyData.FaxNo;
      } else {
        console.log(companyData);
        if (!this.isValid(companyData)) {
          return;
        }
        this.AppLib.con.invoke('CompanyDetail_Save', companyData).then(x => {
          if (companyData.Id !== x) {
            if (x !== 0) {
              this.AppLib.companyList.push(new CompanyDetail());
            }
          }
          companyData.Id = x;
        });
      }
    }

    Deletecompany(companyData: CompanyDetail, IsServerCalled: Boolean = false) {
      if (IsServerCalled) {
        this.AppLib.companyList = this.AppLib.companyList.filter(
          x => x.Id !== companyData.Id
        );
      } else {
        if (confirm(`Are you delete this ${companyData.CompanyName}?`)) {
          this.AppLib.con.invoke('CompanyDetail_Delete', companyData.Id).then(x => {
            if (x === true) {
              this.AppLib.companyList = this.AppLib.companyList.filter(
                y => y.Id !== companyData.Id
              );
              alert('deleted');
            }
          });
        }
      }
    }

FindCompany(Id: number): CompanyDetail {
    return this.AppLib.companyList.find(x => x.Id === Id);
  }
}
