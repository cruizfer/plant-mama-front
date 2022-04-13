import { Component, OnInit } from '@angular/core';
import { Question } from '../interfaces/quiz-question.interface';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  arrQuestions: Question[];
  currentQuestion: number;
  valor: number;
  activeComponent: boolean;


  constructor() {
    this.arrQuestions = [
      {
        number: 1,
        title: 'On average, most house plants can thrive in humidity levels between 40-60%, so tell us, how dry is the air around you?',

        answers: ['Dry as a powder house', 'Average Prototype', 'Humidity is my bread and butter'],
        interval: [5, 6, 7],

      },
      {
        number: 2,
        title: 'Time for light reading: Pick the spot where you’re considering placing your plant. At the brightest time of the day, usually around noon, hold your hand up and look at the shadow. How  does it look like?',
        answers: ['Crisp, well defined shadows and stark contrast.', 'Faint shadows, unclear outline'],
        interval: [10, 20]
      }
    ]
    this.currentQuestion = 0;
    this.valor = 0;
    this.activeComponent = true
  }

  ngOnInit(): void {
  }

  onSelectedAnswer($ind: number) {

    this.valor += this.arrQuestions[this.currentQuestion].interval[$ind]
    console.log(this.valor);
    typeof (this.valor);

    if (this.currentQuestion < this.arrQuestions.length - 1) {
      this.currentQuestion++;
    } else {

      this.activeComponent = false;
      localStorage.setItem('quiz_valor', String(this.valor));

      switch (this.valor) {
        case 15: localStorage.setItem('quiz_role', String('A'));
          break;
        case 25: localStorage.setItem('quiz_role', String('B'));
          break;
        case 16: localStorage.setItem('quiz_role', String('C'));
          break;
        case 26: localStorage.setItem('quiz_role', String('D'));
          break;
        case 17: localStorage.setItem('quiz_role', String('E'));
          break;
        case 27: localStorage.setItem('quiz_role', String('F'));
          break;
        default:
          console.log('Lo lamentamos, por el momento no disponemos de ' + this.valor + '.');
      }

    }


  }





}

