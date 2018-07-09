import { Component, OnInit } from '@angular/core';
import { ApplibService } from '../../services/applib.service';

@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.css']
})
export class TariffComponent implements OnInit {
  constructor(public applib: ApplibService) {
    applib.con.invoke('').then();
  }

  ngOnInit() {}
  hallTariffDetail(hallTypeId: number, auditoriumid: number): number {
    const data = this.applib.hallTariffDetailList.find(
      x => x.HallTYpeId === hallTypeId && x.AuditoriumId === auditoriumid
    );
    if (!data) {
      return null;
    } else {
      return data.Amount;
    }
  }
RoomTotal(RoomId: number) {
  const room = this.applib.roomTypeDetailList.filter(x => x.Id === RoomId);
let total = 0;
room.forEach(x => total = x.NoOfBed * x.NoOfUnit);
return total === 0 ? null : total;
}
  AuditoriumTotal(auditoriumId: number): number {
   const auditorium = this.applib.hallTariffDetailList.filter(x => x.AuditoriumId === auditoriumId);
let total = 0;
auditorium.forEach(x => total += x.Amount);
return total === 0 ? null : total;
  }
}
