import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/model/customer.model';
import { CustomerFilterPipe } from 'src/app/shared/pipes/customer-filter-pipe';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css'],
  providers: [CustomerFilterPipe]
})
export class CustomerTableComponent implements OnInit {
  
  columnList: string[] = [];
  @Input() customerList: Customer[] = [];
  @Input() selectedName: string;
  @Input() selectedLocation: string;
  @Input() selectedGender: string;

  filteredList: Customer[] = [];
  rowCount: number = 5;
  rowCountList: number[] = [5,10,15];
  p: number = 1;

  constructor(private customerPipe: CustomerFilterPipe) {
    this.getColumn();
   }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.filteredList = this.customerPipe.transform(this.customerList, this.selectedName, this.selectedLocation, this.selectedGender);
  }

  ngOnChange(){
    this.filteredList = this.customerPipe.transform(this.customerList, this.selectedName, this.selectedLocation, this.selectedGender); 
  }
  getColumn(){
    this.columnList=[
      "Name",
      "Email",
      "Phone",
      "Gender",
      "location",
      "total request",
      "customer rating"
    ]
  }

  getNumber(val){
    if(!val) return 0;
    return Math.round(val);
  }

}
