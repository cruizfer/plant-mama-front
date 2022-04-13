import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionsComponent implements OnInit {
  @Input() question: string
  @Input() number: number

  constructor() {
    this.question = '';
    this.number = 1;
  }

  ngOnInit(): void {
  }

}
