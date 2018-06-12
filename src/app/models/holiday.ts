export class Holiday {
    Id : number;
    HolidayName : string;
    HolidayDate? : Date;

    constructor(){
        this.HolidayName = '';
        this.HolidayDate = null;
        this.Id = 0;
     }

}
