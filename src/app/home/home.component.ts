import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FilterType } from '../shared/constant/app.const';
import { Job, JobStatus } from '../shared/model/job.model';
import { CatergoryPipe } from '../shared/pipes/category-filter.pipe';
import { HomeService } from '../shared/service/home-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CatergoryPipe]
})
export class HomeComponent implements OnInit {
  jobList: Job[] = [];
  jobStatus: JobStatus = {} as JobStatus;
  mainFilterList: any[] = [];
  mainFilterObj: any = {};
  subFilter: string = "";
  constructor(private homeService: HomeService) {
    this.getJob();
  }

  ngOnInit() {}

  getJob() {
    this.homeService.getJob().subscribe((response) => {
      if (response) {
        this.jobList = response as Job[]
        this.jobStatus = this.homeService.getJobCountByStatusAndEmp(this.jobList); 
        this.getMainFilter();
      }
    });
  }

  getMainFilter(){
    this.mainFilterList = [
      {
        label : "Status", 
        obj:{
          filterType: FilterType.Status,
          list: this.jobStatus.count_by_status
        }
      },
      {
        label : "Person", 
        obj:{
          filterType: FilterType.Person,
          list: this.jobStatus.count_by_person
        }
      },
      {
        label : "Location", 
        obj:{
          filterType: FilterType.Location,
          list: this.jobStatus.count_by_location
        }
      }
    ];
    this.mainFilterObj = this.mainFilterList[0];
  }

  onMainFilterChange(){
    this.subFilter = "";
  }
}
