export class PromoCodeDetail {
  Id: number;
  PromoCode: string;
  DateFrom: Date;
  DateTo: Date;
  MinimumAmount: number;
  DiscountRate: number;
  OrderNo: number;
  IsActive: boolean;

  constructor() {
    this.Id = 0;
  this.PromoCode = '';
  this.DateFrom = null;
  this.DateTo = null;
  this.MinimumAmount = 0;
  this.DiscountRate = 0;
  this.OrderNo = 0;
  this.IsActive = false;
  }
  }
