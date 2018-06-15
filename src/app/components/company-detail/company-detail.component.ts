import { Component, OnInit } from '@angular/core';
import { CompanyDetailService } from '../../services/company-detail.service';
import { CompanyDetail } from '../../models/CompanyDetail';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  cData: CompanyDetail = new CompanyDetail();

  constructor(public compService: CompanyDetailService) { }

  ngOnInit() {
  }

  Save() {
    this.compService.Savecompany(this.cData);
  }
  Delete() {
this.compService.Deletecompany(this.cData);
  }
  Find(Id: number) {
     this.cData = this.compService.FindCompany(Id);
  }

}
