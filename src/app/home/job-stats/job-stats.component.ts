import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-stats',
  templateUrl: './job-stats.component.html',
  styleUrls: ['./job-stats.component.css']
})

export class JobStatsComponent implements OnInit {

  @Input()totalJobCount: number = 0;
  @Input()filterValue = "";
  @Input()selectedList: KeyValue<string, number> = {} as KeyValue<string, number>;

  constructor() { }

  ngOnInit(): void {
  }

}
