export class TariffDetail {
  Id: number;
  PropertyId: number;
  RoomTypeId: number;
  RateOfWeekDayMember: number;
  RateOfWeekDayNonMember: number;
  RateOfWeekEndMember: number;
  RateOfWeekEndNonMember: number;
  IsActive: boolean;

  constructor() {
    this.PropertyId = 0;
    this.RoomTypeId = 0;
    this.RateOfWeekDayMember = 0;
    this.RateOfWeekDayNonMember = 0;
    this.RateOfWeekEndMember = 0;
    this.RateOfWeekEndNonMember = 0;
    this.IsActive = true;
  }
}
