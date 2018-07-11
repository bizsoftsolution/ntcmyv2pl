export class ItemDetail {
  Id: number;

  ItemName: string;
  Rate: number;
  Stock: number;
  IsActive: boolean;
  RateUnit: number;
  constructor() {
    this.Id =  0;
    this.ItemName =  '';
    this.Rate =  0;
    this.Stock =  0;
    this.RateUnit = 0;
    this.IsActive =  false;
  }

}
