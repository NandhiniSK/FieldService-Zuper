import { Component, OnInit } from '@angular/core';
import { LoremIpsum } from 'lorem-ipsum';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  subject: string;
  rating: number;
  feedbackSentence: string;

  lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });
  
  
  constructor() { }

  ngOnInit(): void {
    this.subject = this.lorem.generateWords(4);
    this.feedbackSentence = this.lorem.generateSentences(3);
    this.rating = 4;
    
  }

  getNumber(val){
    if(!val) return 0;
    return Math.round(val);
  }

}
