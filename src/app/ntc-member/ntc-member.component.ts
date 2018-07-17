import { Component, OnInit } from '@angular/core';
import { NtcMemberService } from '../services/ntc-member.service';

@Component({
  selector: 'app-ntc-member',
  templateUrl: './ntc-member.component.html',
  styleUrls: ['./ntc-member.component.css']
})
export class NtcMemberComponent implements OnInit {

  constructor(public ntcmService: NtcMemberService) { }

  ngOnInit() {
  }

}
