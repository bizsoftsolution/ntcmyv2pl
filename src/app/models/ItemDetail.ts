export class ItemDetail {
  Id: number;

  ItemName: string;
  Rate: number;
  Stock: number;
  IsActive: boolean;
  constructor() {
    this.Id =  0;
    this.ItemName =  '';
    this.Rate =  0;
    this.Stock =  0;
    this.IsActive =  false;
  }

}
