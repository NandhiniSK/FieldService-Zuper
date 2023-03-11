import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Customer, FilterList } from '../shared/model/customer.model';
import { CustomerFilterPipe } from '../shared/pipes/customer-filter-pipe';
import { CustomerService } from '../shared/service/customer-service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerList: Customer[] = [];
  uniqueFilterList: FilterList = {} as FilterList;
  nameFilterValue: string;
  locationFilterValue : string;
  genderFilterValue: string;
  selectedName: string = "";
  selectedLocation: string = "";

  constructor(private customerService: CustomerService) {
    this.getCustomerList();
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
  }
  getCustomerList(){
    this.customerService.getCustomers()
    .subscribe(response => {
      if(response)
        this.customerList = response as Customer[];
        this.uniqueFilterList = this.customerService.getFilterList(this.customerList);
    })
  }
}
