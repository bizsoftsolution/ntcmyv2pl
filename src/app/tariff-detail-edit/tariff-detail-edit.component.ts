import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplibService } from '../services/applib.service';
import { RoomTariffDetail } from '../models/RoomTariffDetail';

@Component({
  selector: 'app-tariff-detail-edit',
  templateUrl: './tariff-detail-edit.component.html',
  styleUrls: ['./tariff-detail-edit.component.css']
})
export class TariffDetailEditComponent implements OnInit {
tariffDetail: RoomTariffDetail;
  constructor(private activateRoute: ActivatedRoute, private applib: ApplibService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(x => {
      const id = +x.get('id');
      if (id === 0) {
        this.tariffDetail = new RoomTariffDetail();
      } else {
        this.tariffDetail = this.applib.tariffDetailList.find(y => y.Id === id);
      }

    });
  }

}
