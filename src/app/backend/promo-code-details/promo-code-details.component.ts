import { Component, OnInit } from '@angular/core';
import { PromoCodeDetailService } from '../../services/promo-code-detail.service';

@Component({
  selector: 'app-promo-code-details',
  templateUrl: './promo-code-details.component.html',
  styleUrls: ['./promo-code-details.component.css']
})
export class PromoCodeDetailsComponent implements OnInit {

  constructor(public promoCodeService: PromoCodeDetailService) { }

  ngOnInit() {
  }

}
