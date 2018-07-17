import { NtcMember } from './NtcMember';

export class BookingMaster {
  Id: number;
  Date: Date;
  NtcMember: NtcMember;
  Amount: number;

  constructor() {
    this.Id = 0;
  this.Date = new Date();
  this.NtcMember = new NtcMember();
  this.Amount = 0;

  }

}
