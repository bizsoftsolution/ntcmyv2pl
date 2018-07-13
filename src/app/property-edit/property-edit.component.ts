import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { PropertyDetail } from '../models/PropertyDetail';
import { ApplibService } from '../services/applib.service';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-property-edit',
  templateUrl: './property-edit.component.html',
  styleUrls: ['./property-edit.component.css']
})
export class PropertyEditComponent implements OnInit {
property: PropertyDetail;
  constructor(private activeRoute: ActivatedRoute, private applib: ApplibService, public propertyService: PropertyService) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(x => {
      const id = + x.get('id');
      if (id === 0) {
        this.property = new PropertyDetail();
        this.property.OrderNo = this.applib.NextOrderNo(this.applib.propertyList);
      } else {
        this.property = this.applib.propertyList.find( y => y.Id === id);
      }
    });

  }

}
