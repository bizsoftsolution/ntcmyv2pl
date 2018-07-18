import { NtcMember } from './NtcMember';
import { BookingHallDetail } from './BookingHallDetail';

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
  RoomBooking: {
    Id: number,
    BookingMasterId: number,
    RoomDetailId: number,
    BookingDate: Date,
    Amount: number,
    IsMember: boolean,
    BookingStatusId: number
  }[];

  HallBooking: BookingHallDetail[];
}
