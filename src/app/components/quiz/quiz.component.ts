import { Component, OnInit } from '@angular/core';
import { Question } from '../../interfaces/quiz-question.interface';
import { Router } from '@angular/router';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  arrQuestions: Question[];
  currentQuestion: number;
  valor: number;
  idRole: any;
  exception: string
  activeComponent: boolean;


  constructor(private router: Router) {

    this.arrQuestions = [
      {

        title: 'On average, most house plants can thrive in humidity levels between 40-60%, so tell us, how dry is the air around you?',

        answers: ['Dry as a powder house', 'Average Prototype', 'Humidity is my bread and butter'],
        interval: [5, 6, 7],

      },
      {
        title: 'Time for light reading: Pick the spot where you’re considering placing your plant. At the brightest time of the day, usually around noon, hold your hand up and look at the shadow. How  does it look like?',
        answers: ['Crisp, well defined shadows and stark contrast.', 'Faint shadows, unclear outline'],
        interval: [10, 20]
      }, {
        title: 'Do you travel often, or are you likely to forget to water?',
        answers: ['Unfortunately, yes', 'Not at all, I am a proud Plant Mama'],
        interval: [0, 100]
      }
    ]
    this.currentQuestion = 0;
    this.valor = 0;
    this.activeComponent = true;
    this.exception = ''

  }

  ngOnInit(): void {
  }

  onSelectedAnswer($ind: number) {

    //Saving the role on LocalStorage (based on selected answer in question 1)
    this.idRole = this.arrQuestions[0].answers[$ind]
    switch (this.idRole) {
      case 'Dry as a powder house': localStorage.setItem('quiz_idRole', '1');
        break;
      case 'Average Prototype': localStorage.setItem('quiz_idRole', '2');
        break;
      case 'Humidity is my bread and butter': localStorage.setItem('quiz_idRole', '3');
        break;
      default:
        console.log(+ this.idRole + 'is not valid as a quiz value');
    }

    //Saving total point result.
    this.valor += this.arrQuestions[this.currentQuestion].interval[$ind]
    if (this.currentQuestion < this.arrQuestions.length - 1) {
      this.currentQuestion++;
    } else {

      this.activeComponent = false;
      localStorage.setItem('quiz_valor', String(this.valor));

      switch (this.valor) {
        case 15: localStorage.setItem('quiz_role', String('Cactus Selenicereus Anthonianus'));
          break;
        case 25: localStorage.setItem('quiz_role', String('Aloe Godzilla'));
          break;
        case 16: localStorage.setItem('quiz_role', String('Peperomia Hope'));
          break;
        case 26: localStorage.setItem('quiz_role', String('Sanseviera'));
          break;
        case 17: localStorage.setItem('quiz_role', String('Zamioculca'));
          break;
        case 27: localStorage.setItem('quiz_role', String('Pothos'));
          break;
        case 115: localStorage.setItem('quiz_role', String('Geranium'));
          break;
        case 125: localStorage.setItem('quiz_role', String('Ficus Lyrata'));
          break;
        case 116: localStorage.setItem('quiz_role', String('Croton Fire'));
          break;
        case 126: localStorage.setItem('quiz_role', String('Monstera Adansonii'));
          break;
        case 117: localStorage.setItem('quiz_role', String('Begonia Maculata'));
          break;
        case 127: localStorage.setItem('quiz_role', String('Fern'));
          break;
        default:
          console.log(+ this.valor + 'is not valid as a quiz value');
      }

    }


  }





}

