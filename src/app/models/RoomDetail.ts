export class RoomDetail {
  Id: number;
  RoomMasterId: number;
  Name: string;
  IsActive: boolean;
  RoomMaster: string;

  constructor() {
this.Id = 0 ;
this.RoomMasterId = 0 ;
this.Name = '';
this.IsActive = false;
  }
}
