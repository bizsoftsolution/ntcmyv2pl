import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplibService } from '../services/applib.service';
import { PromoCodeDetail } from '../models/PromoCodeDetail';

@Component({
  selector: 'app-promo-code-detail-edit',
  templateUrl: './promo-code-detail-edit.component.html',
  styleUrls: ['./promo-code-detail-edit.component.css']
})
export class PromoCodeDetailEditComponent implements OnInit {
promocode: PromoCodeDetail;
  constructor(private activateRoute: ActivatedRoute, private applib: ApplibService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(x => {
      const id = +x.get('id');
      if (id === 0) {
        this.promocode = new PromoCodeDetail();
      } else {
        this.promocode = this.applib.promoCodeDetailList.find(y => y.Id === id);
      }
    });
  }

}
