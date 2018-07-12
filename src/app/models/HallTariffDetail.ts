export class HallTariffDetail {
  Id: number;
  AuditoriumId: number;
  HallTypeId: number;
  PropertyId: number;
  Amount: number;
  AmountSuffix: string;
  IsActive: boolean;
  HallType: string;
  Auditorium: string;
  Property: string;
constructor() {
   this.Id = 0;
   this.AuditoriumId = 0;
   this.HallTypeId = 0;
   this.PropertyId = 0;
   this.Amount = 0;
   this.AmountSuffix =  '';
   this.IsActive =  false;
}
}
