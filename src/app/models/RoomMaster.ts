export class RoomMaster {
  Id: number;
  PropertyId: number;
  Type: number;
  RateofWeekDayMember: number;
  RateofWeekEndMember: number;
  RateOfWeekDayNonMember: number;
  RateOfWeekEndNonMember: number;
  NoOfUnit: number;
  NoOfUnitDescription: string;
  NoOfBed: number;
  NoOfBedDescription: string;
  Mattress: number;
  IsActive: boolean;
  Property: string;

  constructor() {
   this.Id = 0;
   this.PropertyId = 0;
   this.Type = 0;
   this.RateofWeekDayMember = 0;
   this.RateofWeekEndMember = 0;
   this.RateOfWeekDayNonMember = 0;
   this.RateOfWeekEndNonMember = 0;
   this.NoOfUnit = 0;
   this.NoOfUnitDescription = '';
   this.NoOfBed = 0;
   this.NoOfBedDescription = '';
   this.Mattress = 0;
   this.IsActive = false;

  }
}
