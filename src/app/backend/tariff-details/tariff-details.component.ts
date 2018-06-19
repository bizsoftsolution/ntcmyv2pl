import { Component, OnInit } from '@angular/core';
import { TariffDetailService } from '../../services/tariff-detail.service';
import { PropertyService } from '../../services/property.service';
import { TarifTypeService } from '../../services/tarif-type.service';
import { RoomTypeService } from '../../services/room-type.service';
import { TariffDetail } from '../../models/TariffDetail';

@Component({
  selector: 'app-tariff-details',
  templateUrl: './tariff-details.component.html',
  styleUrls: ['./tariff-details.component.css']
})
export class TariffDetailsComponent implements OnInit {


save() {
  console.log(TariffDetail);
}
  constructor(
    public tariffDetailService: TariffDetailService,
    public propertyService: PropertyService,
    public tariffTypeService: TarifTypeService,
    public roomTypeService: RoomTypeService,

    ) { }

  ngOnInit() {
    console.log(this.propertyService.AppLib.propertyList);
  }

}
