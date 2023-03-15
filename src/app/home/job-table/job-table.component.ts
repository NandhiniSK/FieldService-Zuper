import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../../shared/model/job.model';
import { JobPipe } from '../../shared/pipes/job-filter.pipe';

@Component({
  selector: 'app-job-table',
  templateUrl: './job-table.component.html',
  styleUrls: ['./job-table.component.css'],
  providers: [JobPipe],
})
export class JobTableComponent implements OnInit {
  sortable: sortable;
  columnList: any[] = [];
  @Input() jobList: Job[] = [];
  @Input() filterVal: string = '';
  @Input() filterType: string = '';
  filteredList: Job[] = [];
  rowCount: number = 5;
  rowCountList: number[] = [5, 10, 15];
  p: number = 1;
  constructor(private jobFilterPipe: JobPipe) {
    this.getColumns();
  }

  ngOnInit(): void {}

  getColumns() {
    this.columnList = [
      { label: 'Job ID', key: 'job_id', sortable: true },
      { label: 'Status', key: 'status', sortable: true },
      { label: 'Assigned To', key: 'assigned_to', sortable: true },
      { label: 'Location', key: 'location', sortable: true },
    ];
    this.sortable = { columnName: this.columnList[0].key, isAscending: true };
  }

  ngOnChanges() {
    let filterList = this.jobFilterPipe.transform(
      this.jobList,
      this.filterType,
      this.filterVal
    );
    this.onFilterChange(filterList);
  }

  onFilterChange(filterList) {
    if (this.sortable.isAscending)
      this.filteredList = filterList.sort((a, b) =>
        a[this.sortable.columnName] < b[this.sortable.columnName]
          ? -1
          : a[this.sortable.columnName] > b[this.sortable.columnName]
          ? 1
          : 0
      );
    else
      this.filteredList = filterList.sort((a, b) =>
        a[this.sortable.columnName] > b[this.sortable.columnName]
          ? -1
          : a[this.sortable.columnName] < b[this.sortable.columnName]
          ? 1
          : 0
      );
  }

  OnSortClicked(key, isSameKey) {
    this.sortable.columnName = key;
    this.sortable.isAscending = isSameKey ? !this.sortable.isAscending : true;
    this.onFilterChange(this.filteredList);
    this.p = 1;
  }
}

class sortable {
  columnName: string;
  isAscending: boolean;
}
