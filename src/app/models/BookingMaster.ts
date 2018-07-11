export class BookingMaster {
  Id: number;
  Date: Date;
  Name: string;
  ICNo: string;
  MobileNo: number;
  EMailId: string;
  MemberCode: number;
  Amount: number;
  NoOfAdults: number;
  NoOfChildren: number;

  constructor() {
    this.Id = 0;
  this.Date = null;
  this.Name = '';
  this.ICNo = '';
  this.MobileNo = 0;
  this.EMailId = '';
  this.MemberCode = 0;
  this.Amount = 0;
  this.NoOfAdults = 0;
  this.NoOfChildren = 0;
  }

}
