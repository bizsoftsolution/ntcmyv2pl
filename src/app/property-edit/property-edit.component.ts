import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { PropertyDetail } from '../models/PropertyDetail';
import { ApplibService } from '../services/applib.service';

@Component({
  selector: 'app-property-edit',
  templateUrl: './property-edit.component.html',
  styleUrls: ['./property-edit.component.css']
})
export class PropertyEditComponent implements OnInit {
property: PropertyDetail;
  constructor(private activeRoute: ActivatedRoute, private applib: ApplibService) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(x => {
      const id = + x.get('id');
      if (id === 0) {
        this.property = new PropertyDetail();
      } else {
        this.property = this.applib.propertyList.find( y => y.Id === id);
      }
    });

  }

}
