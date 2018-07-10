export class RoomTypeDetail {
  Id: number;
  RoomTypeId: number;
  NoOfUnit: number;
  NoOfUnitDescription: string;
  NoOfBed: number;
  NoOfBedDescription: string;
  Mattress: number;
  RoomType: string;

constructor() {
  this.Id =  0;
  this.RoomTypeId = 0;
  this.NoOfUnit =  0;
  this.NoOfUnitDescription =  '';
  this.NoOfBed =  0;
  this.NoOfBedDescription =  '';
  this.Mattress =  0;
}
}
