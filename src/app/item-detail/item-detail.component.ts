import { Component, OnInit } from '@angular/core';
import { ApplibService } from '../services/applib.service';
import { ItemDetailService } from '../services/item-detail.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  constructor(public applib: ApplibService, public itemService: ItemDetailService) { }

  ngOnInit() {
  }

}
