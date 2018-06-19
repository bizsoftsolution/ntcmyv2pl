export class HolidayDetail {
    Id: number;
    HolidayName: string;
    HolidayDate: Date;

    constructor() {
        this.HolidayName = '';
        this.HolidayDate = new Date();
        this.Id = 0;
     }

}
