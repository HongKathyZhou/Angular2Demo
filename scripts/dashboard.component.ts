import { Component, OnInit } from '@angular/core';
import { Router }           from '@angular/router';

import { Patient }        from './patient';
import { PatientService } from './patient.service';
import { PatientSearchComponent } from './patient-search.component';

import { Fund }        from './fund';
import { FundService } from './fund.service';
import { FundSearchComponent } from './fund-search.component';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls:  ['app/css/dashboard.component.css'],
  directives: [PatientSearchComponent, FundSearchComponent]
})
export class DashboardComponent implements OnInit {
  patients: Patient[] = [];
  funds: Fund[] = [];

  constructor(
    private router: Router,
    private patientService: PatientService,
    private fundService: FundService) {
    }
  
  ngOnInit() {
    this.patientService.getPatientes()
       .then(patients => this.patients = patients);
      //.then(patients => this.patients = patients.slice(1, 5));
    this.fundService.getFunds()
        .then(funds => this.funds = funds);
  }

  gotoDetail(patient: Patient) {
    let link = ['/detail', patient.id];
    this.router.navigate(link);
  }

  gotoFundDetail(fund: Fund){
    let link = ['/funddetail', fund.id];
    this.router.navigate(link);
  }
}