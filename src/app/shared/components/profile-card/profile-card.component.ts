import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  @Input() name: string;
  @Input() gender: string;
  @Input() imgUrl: string;
  @Input() rating: number;
  @Input() phone: string;
  @Input() email: string;
  @Input() location: string;

  constructor() { }

  ngOnInit(): void {
  }

  getNumber(val){
    if(!val) return 0;
    return Math.round(val);
  }
}
