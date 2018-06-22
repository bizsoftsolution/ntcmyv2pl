import { Component, OnInit } from '@angular/core';
import { HallTariffDetailService } from '../../services/hall-tariff-detail.service';
import { AuditoriumService } from '../../services/auditorium.service';
import { HallTypeService } from '../../services/hall-type.service';

@Component({
  selector: 'app-hall-tariff-details',
  templateUrl: './hall-tariff-details.component.html',
  styleUrls: ['./hall-tariff-details.component.css']
})
export class HallTariffDetailsComponent implements OnInit {

  constructor(
    public hallTariffDetailService: HallTariffDetailService,
    public auditoriumService: AuditoriumService,
    public hallTypeService: HallTypeService
  ) { }

  ngOnInit() {
  }

}
