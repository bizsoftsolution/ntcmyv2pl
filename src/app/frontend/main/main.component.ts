import { Component, OnInit } from '@angular/core';
import { ApplibService } from '../../services/applib.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public applib: ApplibService) { }

  ngOnInit() {
  }

}
