import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  @Input() taskStatus: any = {};
  constructor() { 
  }

  ngOnInit(): void {
  }

  ngOnChanges(){
    
    console.log(this.taskStatus);
  }
}
