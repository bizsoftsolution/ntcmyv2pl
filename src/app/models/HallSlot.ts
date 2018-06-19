export class HallSlot {
  Id: number;
  SlotName: string;
  TimeFrom: Date;
  TimeTo: Date;
  OrderNo: number;
  IsActive: boolean;

  constructor() {
    this.Id = 0;
  this.SlotName = '';
  this.TimeFrom = null;
  this.TimeTo = null;
  this.OrderNo = 0;
  this.IsActive = false;
  }
  }
