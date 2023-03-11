import { NgModule } from '@angular/core';
import { CustomerComponent } from './customer-list/customer/customer.component';
import { EmployeeComponent } from './employee-list/employee/employee.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { RouterModule } from '@angular/router'
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ErrorComponent } from './error/error.component';

const routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'customer',
    component: CustomerListComponent,
  },
  {
    path: 'customer/:id',
    component: CustomerComponent,
  },
  {
    path: 'employee',
    component: EmployeeListComponent,
  },
  {
    path: 'employee/:name',
    component: EmployeeComponent,
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
  {
    path: 'service-list',
    component: ServiceListComponent,
  },
  {
    path: 'invoice',
    component: InvoiceComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  { path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
