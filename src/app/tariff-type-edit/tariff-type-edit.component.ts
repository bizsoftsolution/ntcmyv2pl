import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplibService } from '../services/applib.service';
import { RoomTariffDetail } from '../models/RoomTariffDetail';
import { TariffType } from '../models/TariffType';

@Component({
  selector: 'app-tariff-type-edit',
  templateUrl: './tariff-type-edit.component.html',
  styleUrls: ['./tariff-type-edit.component.css']
})
export class TariffTypeEditComponent implements OnInit {
roomTariffDetail: TariffType;
  constructor(private activatRoute: ActivatedRoute, private applib: ApplibService) { }

  ngOnInit() {
    this.activatRoute.paramMap.subscribe(x => {
      const id = +x.get('id');
      if (id === 0) {
        this.roomTariffDetail = new TariffType();
      } else {
        this.roomTariffDetail = this.applib.tarifTypeList.find(y => y.Id === id);
      }
    });
  }

}
