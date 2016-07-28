"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const fund_detail_component_1 = require('./fund-detail.component');
const fund_service_1 = require('./fund.service');
const router_1 = require('@angular/router');
const orderby_1 = require('./orderby');
let FundsComponent = class FundsComponent {
    constructor(router, fundService) {
        this.router = router;
        this.fundService = fundService;
        this.addingFund = false;
    }
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
    close(savedFund) {
        this.addingFund = false;
        if (savedFund) {
            this.getFunds();
        }
    }
    deleteFund(fund, event) {
        event.stopPropagation();
        this.fundService
            .delete(fund)
            .then(res => {
            this.funds = this.funds.filter(f => f !== fund);
            if (this.selectedFund === fund) {
                this.selectedFund = null;
            }
        })
            .catch(error => this.error = error);
    }
    ngOnInit() {
        this.getFunds();
    }
    onSelect(fund) {
        this.selectedFund = fund;
        this.addingFund = false;
    }
    gotoFundDetail() {
        this.router.navigate(['/funddetail', this.selectedFund.id]);
    }
};
FundsComponent = __decorate([
    core_1.Component({
        selector: 'my-funds',
        templateUrl: 'app/funds.component.html',
        styleUrls: ['app/css/funds.component.css'],
        directives: [fund_detail_component_1.FundDetailComponent],
        pipes: [orderby_1.OrderByPipe]
    }), 
    __metadata('design:paramtypes', [router_1.Router, fund_service_1.FundService])
], FundsComponent);
exports.FundsComponent = FundsComponent;
