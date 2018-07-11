import { Component, OnInit } from '@angular/core';
import { ItemDetail } from '../models/ItemDetail';
import { ActivatedRoute } from '@angular/router';
import { ApplibService } from '../services/applib.service';
import { ItemDetailService } from '../services/item-detail.service';

@Component({
  selector: 'app-item-detail-edit',
  templateUrl: './item-detail-edit.component.html',
  styleUrls: ['./item-detail-edit.component.css']
})
export class ItemDetailEditComponent implements OnInit {
itemDetail: ItemDetail;
  constructor(private activateroute: ActivatedRoute, public applib: ApplibService, public itemDetailService: ItemDetailService) { }

  ngOnInit() {
    this.activateroute.paramMap.subscribe(x => {
      const id = +x.get('id');
      if (id === 0) {
        this.itemDetail = new ItemDetail();
      } else {
        this.itemDetail = this.applib.itemDetailList.find(y => y.Id === id);
      }
    });
  }

}
