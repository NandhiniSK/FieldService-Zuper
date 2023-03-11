import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIURL } from '../constant/api-url.const';
import { Customer, FilterList } from '../model/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomers() {
    let url = APIURL.getCustomers();
    return this.http.get(url, { responseType: 'json' });
  }

  getFilterList(list: Customer[]): FilterList{
    let filterList = new FilterList();
    filterList.nameList = [...new Set(list.map(item => item.name))];
    filterList.locationList = [...new Set(list.map(item => item.location))];
    filterList.genderList = [...new Set(list.map(item => item.gender))];
    return filterList;
  }
}