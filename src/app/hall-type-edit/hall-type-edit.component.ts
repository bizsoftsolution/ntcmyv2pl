import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplibService } from '../services/applib.service';
import { HallType } from '../models/HallType';
import { HallTypeService } from '../services/hall-type.service';

@Component({
  selector: 'app-hall-type-edit',
  templateUrl: './hall-type-edit.component.html',
  styleUrls: ['./hall-type-edit.component.css']
})
export class HallTypeEditComponent implements OnInit {
halltype: HallType;
  constructor(private activateRoute: ActivatedRoute, private applib: ApplibService, public hallTypeService: HallTypeService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(x => {
      const id = +x.get('id');
      if (id === 0) {
        this.halltype = new HallType();
      } else {
        this.halltype = this.applib.hallTypeList.find(y => y.Id === id);
      }
    });


  }

}
