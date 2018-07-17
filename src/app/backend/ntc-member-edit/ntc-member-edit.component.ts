import { Component, OnInit } from '@angular/core';
import { NtcMember } from '../../models/NtcMember';
import { ActivatedRoute } from '@angular/router';
import { ApplibService } from '../../services/applib.service';
import { NtcMemberService } from '../../services/ntc-member.service';

@Component({
  selector: 'app-ntc-member-edit',
  templateUrl: './ntc-member-edit.component.html',
  styleUrls: ['./ntc-member-edit.component.css']
})
export class NtcMemberEditComponent implements OnInit {
	// tslint:disable-next-line:indent
	ntcMember: NtcMember;
  constructor(private activeRoute: ActivatedRoute, private applib: ApplibService, public ntcMemberService: NtcMemberService) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(x => {
      const id = + x.get('id');
      if (id === 0) {
        this.ntcMember = new NtcMember();
      } else {
        this.ntcMember = this.applib.ntcMemberList.find( y => y.Id === id);
      }
    });
  }

}
