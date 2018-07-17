import { TestBed, inject } from '@angular/core/testing';

import { NtcMemberService } from './ntc-member.service';

describe('NtcMemberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NtcMemberService]
    });
  });

  it('should be created', inject([NtcMemberService], (service: NtcMemberService) => {
    expect(service).toBeTruthy();
  }));
});
