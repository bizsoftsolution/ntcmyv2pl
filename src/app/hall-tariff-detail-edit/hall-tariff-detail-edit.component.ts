import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplibService } from '../services/applib.service';
import { HallTariffDetail } from '../models/HallTariffDetail';
import { HallTariffDetailService } from '../services/hall-tariff-detail.service';
import { AuditoriumService } from '../services/auditorium.service';
import { HallTypeService } from '../services/hall-type.service';

@Component({
  selector: 'app-hall-tariff-detail-edit',
  templateUrl: './hall-tariff-detail-edit.component.html',
  styleUrls: ['./hall-tariff-detail-edit.component.css']
})
export class HallTariffDetailEditComponent implements OnInit {
    hallTariffDetail: HallTariffDetail;
  constructor(private activateroute: ActivatedRoute, private applib: ApplibService,
    public auditoriumService: AuditoriumService,
    public hallTypeService: HallTypeService,
    public hallTariffService: HallTariffDetailService
  ) { }

  ngOnInit() {
    this.activateroute.paramMap.subscribe(x => {
      const id = +x.get('id');
      if (id === 0) {
        this.hallTariffDetail = new HallTariffDetail();
      } else {
      this.hallTariffDetail = this.applib.hallTariffDetailList.find(y => y.Id === id);
      }
    });
  }

}
