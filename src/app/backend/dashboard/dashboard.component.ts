import { Component } from '@angular/core';
import { ApplibService } from '../../services/applib.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public AppLib: ApplibService) {}
}
