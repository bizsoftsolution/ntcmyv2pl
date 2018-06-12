import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { PropertyService } from '../../services/property.service';
import { PropertyDataSource } from './property-datasource';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource : PropertyDataSource;

  displayedColumns = ['id', 'name'];

  constructor(private propertyService : PropertyService) { }

  ngOnInit() {
    this.dataSource = new PropertyDataSource(this.paginator, this.sort);
  }


}
