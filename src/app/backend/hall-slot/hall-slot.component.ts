import { Component, OnInit } from '@angular/core';
import { HallSlotService } from '../../services/hall-slot.service';

@Component({
  selector: 'app-hall-slot',
  templateUrl: './hall-slot.component.html',
  styleUrls: ['./hall-slot.component.css']
})
export class HallSlotComponent implements OnInit {

  mytime: Date = new Date();

  constructor(public hallSlotService: HallSlotService) { }

  ngOnInit() {
  }

}
