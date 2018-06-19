import { Component, OnInit } from '@angular/core';
import { AuditoriumService } from '../../services/auditorium.service';

@Component({
  selector: 'app-auditorium',
  templateUrl: './auditorium.component.html',
  styleUrls: ['./auditorium.component.css']
})
export class AuditoriumComponent implements OnInit {

  constructor(public auditoriumService: AuditoriumService) { }

  ngOnInit() {
  }

}
