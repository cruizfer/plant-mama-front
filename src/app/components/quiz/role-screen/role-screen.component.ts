import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-role-screen',
  templateUrl: './role-screen.component.html',
  styleUrls: ['./role-screen.component.css']
})
export class RoleScreenComponent implements OnInit {
  plantImage: string
  plantResult: string
  form: FormGroup
  constructor() {
    this.plantImage = ''
    this.plantResult = ''
    this.form = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      nickname: new FormControl('', [Validators.required, Validators.minLength(10)]),
      mail: new FormControl('',
        [Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/)]
      ),
      password: new FormControl('',
        [Validators.pattern(/^[a-zA-Z]\w{3,14}$/)]
      ),
      birthday_date: new FormControl(''),
      expertise: new FormControl(''),

    })
  }

  ngOnInit(): void {
    this.plantResult = localStorage.getItem('quiz_role');
    switch (this.plantResult) {
      case 'Geranium': this.plantImage = '../../../../assets/plants/geranium.jpeg';
        break;
      case 'Cactus Selenicereus Anthonianus': this.plantImage = '../../../../assets/plants/cactus.jpeg';
        break;
      case 'Aloe Godzilla': this.plantImage = '../../../../assets/plants/aloegodzilla.jpeg';
        break;
      case 'Peperomia Hope': this.plantImage = '../../../../assets/plants/peperomiacolgante.jpeg';
        break;
      case 'Sanseviera': this.plantImage = '../../../../assets/plants/sansevieria.jpeg';
        break;
      case 'Zamioculca': this.plantImage = '../../../../assets/plants/zamioculca.jpeg';
        break;
      case 'Pothos': this.plantImage = '../../../../assets/plants/pothos.jpeg';
        break;
      case 'Ficus Lyrata': this.plantImage = '../../../../assets/plants/ficuslyrata.jpeg';
        break;
      case 'Croton Fire': this.plantImage = '../../../../assets/plants/croton.jpeg';
        break;
      case 'Monstera Adansonii': this.plantImage = '../../../../assets/plants/monsteraadansonii.jpeg';
        break;
      case 'Begonia Maculata': this.plantImage = '../../../../assets/plants/begonia.jpeg';
        break;
      case 'Fern': this.plantImage = '../../../../assets/plants/fern.jpeg';
        break;
      default:
        console.log('not available image for this role');

    }

  }

  onSubmit() {
    console.log(123)
  }
}

