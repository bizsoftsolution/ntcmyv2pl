export class HallMaster {
    Id: number;
    AuditoriumId: number;
    PropertyId: number;
    Type: string;
    OrderNo: number;
    IsActive: boolean;
    Amount: number;
    AmountSuffix: string;
    Auditorium: string;
    Property: string;

    constructor() {
        this.Id = 0;
        this.AuditoriumId = 0;
        this.PropertyId = 0;
        this.Type = '';
        this.OrderNo = 0;
        this.IsActive = false;
        this.Amount = 0;
        this.AmountSuffix = '';

    }

}
