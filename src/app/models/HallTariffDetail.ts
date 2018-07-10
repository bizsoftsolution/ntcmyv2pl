export class HallTariffDetail {
  Id: number;
  AuditoriumId: number;
  HallTYpeId: number;
  Amount: number;
  AmountSuffix: string;
  IsActive: boolean;
  HallType: string;
  Auditorium: string;
constructor() {
   this.Id = 0;
   this.AuditoriumId = 0;
   this.HallTYpeId = 0;
   this.Amount = 0;
   this.AmountSuffix =  '';
   this.IsActive =  false;
}
}
