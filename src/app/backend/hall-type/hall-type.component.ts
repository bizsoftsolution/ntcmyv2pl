import { Component, OnInit } from '@angular/core';
import { HallTypeService } from '../../services/hall-type.service';

@Component({
  selector: 'app-hall-type',
  templateUrl: './hall-type.component.html',
  styleUrls: ['./hall-type.component.css']
})
export class HallTypeComponent implements OnInit {

  constructor(public hallTypeService: HallTypeService) { }

  ngOnInit() {
  }

}
