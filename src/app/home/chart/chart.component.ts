import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartData, ChartType } from 'chart.js';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() chartData: KeyValue<string, number> = {} as KeyValue<string, number>;
  public column: string[] = [];
  public data: any;
  chartOptions = {};
  constructor() {
  }

  ngOnInit(): void {
    this.chartOptions ={
      responsive: true
    }
  }

  ngOnChanges(){
    if(this.chartData){
      this.data = {
        datasets: [{
            data: Object.values(this.chartData)
        }],
        labels: Object.keys(this.chartData)
      };
    }
  }
}
