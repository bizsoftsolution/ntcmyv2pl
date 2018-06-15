import { Component, OnInit } from '@angular/core';
import { TarifTypeService } from '../tarif-type.service';
import { Pipe, PipeTransform } from '@angular/core';

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
