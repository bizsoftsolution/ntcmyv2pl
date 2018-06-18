import { Component, OnInit } from '@angular/core';
import { TariffDetailService } from '../../services/tariff-detail.service';
import { PropertyService } from '../../services/property.service';
import { TarifTypeService } from '../../services/tarif-type.service';
import { RoomTypeService } from '../../services/room-type.service';

@Component({
  selector: 'app-tariff-details',
  templateUrl: './tariff-details.component.html',
  styleUrls: ['./tariff-details.component.css']
})
export class TariffDetailsComponent implements OnInit {

  checked: Number = 1;
  disabled = false;
    onChange(value) {
    if (value.checked === true) {
      this.checked = 1;
      console.log(1);
    } else {
      this.checked = 0;
      console.log(0);
    }
  }

  constructor(
    public tariffDetailService: TariffDetailService,
    public propertyService: PropertyService,
    public tariffTypeService: TarifTypeService,
    public roomTypeService: RoomTypeService
    ) { }

  ngOnInit() {
  }

}
