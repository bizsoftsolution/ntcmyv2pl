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
    if (!ntcMember.MemberName || ntcMember.MemberName === '') {
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
      d.MemberName = ntcMember.MemberName;
      d.MemberId = ntcMember.MemberId;
      d.EmailId = ntcMember.EmailId;
      d.Country = ntcMember.Country;
      d.Address1 = ntcMember.Address1;
      d.Address2 = ntcMember.Address2;
      d.City = ntcMember.City;
      d.State = ntcMember.State;
      d.ICNo = ntcMember.ICNo;
      d.MobileNo = ntcMember.MobileNo;
      d.Password = ntcMember.Password;
      this.AppLib.ntcMemberList = this.AppLib.SortRecords(this.AppLib.ntcMemberList);

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
        this.AppLib.ntcMemberList = this.AppLib.SortRecords(this.AppLib.ntcMemberList);
this.router.navigate(['/Admin']);
      });
    }
  }

  DeleteNtcMember(ntcMember: NtcMember, IsServerCalled: Boolean = false) {
    if (IsServerCalled) {
      this.AppLib.ntcMemberList = this.AppLib.ntcMemberList.filter(
        x => x.Id !== ntcMember.Id
      );
      this.AppLib.ntcMemberList = this.AppLib.SortRecords(this.AppLib.ntcMemberList);
    } else {
      if (confirm(`Are you delete this ${ntcMember.MemberName}?`)) {
        this.AppLib.con.invoke('NtcMember_Delete', ntcMember.Id).then(x => {
          if (x === true) {
            this.AppLib.ntcMemberList = this.AppLib.ntcMemberList.filter(
              y => y.Id !== ntcMember.Id
            );
            alert('deleted');
          }
        });
      }
      this.AppLib.ntcMemberList = this.AppLib.SortRecords(this.AppLib.ntcMemberList);
    }
  }
}
