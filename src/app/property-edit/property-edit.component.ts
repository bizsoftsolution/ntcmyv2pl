import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    const id = +this.activeRoute.snapshot.params.get('id');
if (id === 0) {
  this.property = new PropertyDetail();
} else {
  this.property = this.applib.propertyList.find( x => x.Id === id);
}
  }

}
