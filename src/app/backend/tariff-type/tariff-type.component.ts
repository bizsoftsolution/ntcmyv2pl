import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { TarifTypeService } from '../../services/tarif-type.service';

@Component({
  selector: 'app-tariff-type',
  templateUrl: './tariff-type.component.html',
  styleUrls: ['./tariff-type.component.css']
})
export class TariffTypeComponent implements OnInit {

  constructor(public tarifType: TarifTypeService) { }

  ngOnInit() {
  }

}
