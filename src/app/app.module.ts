import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer-list/customer/customer.component';
import { EmployeeComponent } from './employee-list/employee/employee.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { HistoryComponent } from './history/history.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ScheduleComponent } from './schedule/schedule.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { CatergoryPipe } from './shared/pipes/category-filter.pipe';
import { JobTableComponent } from './home/job-table/job-table.component';
import { JobPipe } from './shared/pipes/job-filter.pipe';
import { JobStatsComponent } from './home/job-stats/job-stats.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AppMaterialModule } from './app-material.module';
import { ArrayFilterPipe } from './shared/pipes/array-filter.pipe';
import { CustomerFilterPipe } from './shared/pipes/customer-filter-pipe';
import { ErrorComponent } from './error/error.component';
import { ChartComponent } from './home/chart/chart.component';
import { NgChartsModule } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomerTableComponent } from './customer-list/customer-table/customer-table.component';
import { ProfileCardComponent } from './shared/components/profile-card/profile-card.component';
import { FeedbackComponent } from './shared/components/feedback/feedback.component';
import { TaskCardComponent } from './shared/components/task-card/task-card.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule,
    NgxPaginationModule
  ],
  declarations: [
    AppComponent,
    CustomerComponent,
    EmployeeComponent,
    HistoryComponent,
    HomeComponent,
    InvoiceComponent,
    ScheduleComponent,
    SidebarMenuComponent,
    ServiceListComponent,
    CompanyProfileComponent,
    CatergoryPipe,
    ArrayFilterPipe,
    CustomerFilterPipe,
    JobPipe,
    JobTableComponent,
    JobStatsComponent,
    EmployeeListComponent,
    CustomerListComponent,
    ErrorComponent,
    ChartComponent,
    CustomerTableComponent,
    ProfileCardComponent,
    FeedbackComponent,
    TaskCardComponent
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class AppModule {}
