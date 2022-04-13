import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  @Input() answers: string[]
  @Output() selectedAnswer: EventEmitter<number>

  constructor() {
    this.answers = [];
    this.selectedAnswer = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(ind: number) {
    this.selectedAnswer.emit(ind);


  }
}
