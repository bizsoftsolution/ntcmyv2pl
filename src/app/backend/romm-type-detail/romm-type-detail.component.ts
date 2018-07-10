import { Component, OnInit } from '@angular/core';
import { RoomTypeDetailServiceService } from '../../services/room-type-detail-service.service';

@Component({
  selector: 'app-romm-type-detail',
  templateUrl: './romm-type-detail.component.html',
  styleUrls: ['./romm-type-detail.component.css']
})
export class RommTypeDetailComponent implements OnInit {

  constructor(public rtdService: RoomTypeDetailServiceService) { }

  ngOnInit() {
  }

}
