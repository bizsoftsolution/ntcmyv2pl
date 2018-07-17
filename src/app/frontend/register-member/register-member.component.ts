import { Component, OnInit } from '@angular/core';
import { ApplibService } from '../../services/applib.service';
import { NtcMemberService } from '../../services/ntc-member.service';
import { NtcMember } from '../../models/NtcMember';

@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.component.html',
  styleUrls: ['./register-member.component.css']
})
export class RegisterMemberComponent implements OnInit {

  registerMember: NtcMember = new NtcMember();
  title: string;

  constructor(public applib: ApplibService, public ntcMemberService: NtcMemberService) {
    if (!applib.loginUser) {
      this.title = 'Registration Member';
      this.registerMember = new NtcMember();
    } else {
      this.title = 'Member Profile';
      this.registerMember = this.applib.ntcMemberList.find( y => y.EmailId === applib.loginUser.LoginId);
    }
  }

  ngOnInit() {
  }

}
