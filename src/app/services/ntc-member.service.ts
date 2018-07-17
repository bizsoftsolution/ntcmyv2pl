import { Injectable } from '@angular/core';
import { ApplibService } from './applib.service';
import { Router } from '@angular/router';
import { NtcMember } from '../models/NtcMember';
@Injectable({
  providedIn: 'root'
})
export class NtcMemberService {

  constructor(public AppLib: ApplibService, private router: Router) {
    // Save
    this.AppLib.con.listenFor<NtcMember>('NtcMember_Save').subscribe(x => {
      console.log(x);
      this.SaveNtcMember(x, true);
    });
    // Delete
    this.AppLib.con.listenFor<NtcMember>('NtcMember_Delete').subscribe(x => {
      console.log(x);
      this.DeleteNtcMember(x, true);
    });
  }
  isValid(ntcMember: NtcMember): boolean {
    if (!ntcMember.Name || ntcMember.Name === '') {
      return false;
    }  else if (!ntcMember.ICNo || ntcMember.ICNo === '') {
      return false;
    }  else {
      return true;
    }
  }

  SaveNtcMember(ntcMember: NtcMember, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      let d = this.AppLib.ntcMemberList.find(x => x.Id === ntcMember.Id);
      if (!d) {
        d = new NtcMember();
        this.AppLib.ntcMemberList = this.AppLib.ntcMemberList.filter(
          x => x.Id !== 0
        );
        this.AppLib.ntcMemberList.push(d);
        this.AppLib.ntcMemberList.push(new NtcMember());
      }
      d.Id = ntcMember.Id;
      d.Name = ntcMember.Name;
      d.MemberId = ntcMember.MemberId;
      d.EmailId = ntcMember.EmailId;
      d.Country = ntcMember.Country;
      d.Address1 = ntcMember.Address1;
      d.Address2 = ntcMember.Address2;
      d.City = ntcMember.City;
      d.State = ntcMember.State;
      d.ICNo = ntcMember.ICNo;
      d.MobileNo = ntcMember.MobileNo;

    } else {
      console.log(ntcMember);
      if (!this.isValid(ntcMember)) {
        return;
      }
      this.AppLib.con.invoke('NtcMember_Save', ntcMember).then(x => {
        if (ntcMember.Id === 0) {
          ntcMember.Id = x;
          this.AppLib.ntcMemberList.push(ntcMember);
        }
this.router.navigate(['/Admin']);
      });
    }
  }

  DeleteNtcMember(ntcMember: NtcMember, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      this.AppLib.ntcMemberList = this.AppLib.ntcMemberList.filter(
        x => x.Id !== ntcMember.Id
      );
    } else {
      if (confirm(`Are you delete this ${ntcMember.Name}?`)) {
        this.AppLib.con.invoke('NtcMember_Delete', ntcMember.Id).then(x => {
          if (x === true) {
            this.AppLib.ntcMemberList = this.AppLib.ntcMemberList.filter(
              y => y.Id !== ntcMember.Id
            );
            alert('deleted');
          }
        });
      }
    }
  }
}
