import { Component, OnInit } from '@angular/core';
import { Fund } from './fund';
import { FundDetailComponent } from './fund-detail.component';
import { FundService } from './fund.service';
import { Router } from '@angular/router';
import {OrderByPipe} from './orderby';

@Component({
  selector: 'my-funds',
   templateUrl: 'app/funds.component.html',
   styleUrls:  ['app/css/funds.component.css'],
   directives: [FundDetailComponent],
   pipes: [ OrderByPipe ]
})

export class FundsComponent implements OnInit {
  funds: Fund[];
  selectedFund: Fund;
  addingFund = false;
  error: any;

  constructor(
    private router: Router,
    private fundService: FundService) { }

  getFunds() {
    this.fundService
        .getFunds()
        .then(funds => this.funds = funds)
        .catch(error => this.error = error);
  }

  addFund() {
    this.addingFund = true;
    this.selectedFund = null;
  }

  close(savedFund: Fund) {
    this.addingFund = false;
    if (savedFund) { this.getFunds(); }
  }

  deleteFund(fund: Fund, event: any) {
    event.stopPropagation();
    this.fundService
        .delete(fund)
        .then(res => {
          this.funds = this.funds.filter(f => f !== fund);
          if (this.selectedFund === fund) { this.selectedFund = null; }
        })
        .catch(error => this.error = error);
  }

  ngOnInit() {
    this.getFunds();
  }

  onSelect(fund: Fund) {
    this.selectedFund = fund;
    this.addingFund = false;
  }

  gotoFundDetail() {
    this.router.navigate(['/funddetail', this.selectedFund.id]);
  }
}
