import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, CustomerDetails } from '../../shared/model/customer.model';
import { CustomerService } from '../../shared/service/customer-service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  taskList: any = {};
  customerID: number = 0;
  customerDetails: CustomerDetails = {} as CustomerDetails;
  isFeedbackOpen: boolean = false;
  isSevicePersonFeedbackOpen: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {
    this.route.params.subscribe((param) => {
      if (param['id']) {
        this.customerID = +param['id'];
        this.getCustomer(this.customerID);
      }
      this.getTaskList();
    });
  }

  ngOnInit() {}

  getCustomer(customerID: number) {
    this.customerService.getCustomers().subscribe((response: Customer[]) => {
      if (response) {
        this.customerDetails = response.find(
          (x) => x.id == customerID
        ) as CustomerDetails;
        if (!this.customerDetails) {
          this.router.navigate(['/error']);
        }
      } else this.router.navigate(['error']);
    });
  }

  getTaskList() {
    this.taskList['total count'] = 30;
    this.taskList['pending'] = 2;
    this.taskList['confirmed'] = 2;
    this.taskList['On the way'] = 5;
    this.taskList['completed'] = 21;
  }
}
