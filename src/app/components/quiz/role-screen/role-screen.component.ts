import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-role-screen',
  templateUrl: './role-screen.component.html',
  styleUrls: ['./role-screen.component.css']
})
export class RoleScreenComponent implements OnInit {
  plantImage: string;
  plantResult: string;
  userRoleId: number;
  userRoleName: string;
  form: FormGroup


  constructor(private userService: UserService) {
    this.plantImage = '';
    this.plantResult = '';
    this.userRoleId = 0;
    this.userRoleName = '';


    this.form = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      nickname: new FormControl('', [Validators.required, Validators.minLength(10)]),
      mail: new FormControl('',
        [Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/)]
      ),
      password: new FormControl('',
        [Validators.pattern(/^[a-zA-Z]\w{3,14}$/)] //The password's first character must be a letter, it must contain at least 4 characters and no more than 15 characters and no characters other than letters, numbers and the underscore may be used
      ),
      birthday_date: new FormControl(''),
      expertise: new FormControl(''),
      user_rol_id: new FormControl(''),


    })
  }

  ngOnInit(): void {

    //Getting the idRole from LocalStorage
    this.userRoleId = parseInt(localStorage.getItem('quiz_idRole'));
    console.log(this.userRoleId);

    //Renaming the idRole (from number to text)
    switch (this.userRoleId) {
      case 1: this.userRoleName = 'Dry climate';
        break;
      case 2: this.userRoleName = 'Average climate';
        break;
      case 3: this.userRoleName = 'Humid climate';
        break;
      default:
        console.log('not role available');

    };

    //Getting the role(plant result) from LocalStorage
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

    }
    console.log(this.plantImage)
  }

  async onSubmit() {
    try {
      this.form.value.user_rol_id = this.userRoleId;
      this.form.value.user_image = this.plantImage;
      const response = await this.userService.createUser(this.form.value);
      console.log(response)
    } catch (error) {
      console.log(error)
    };


  }
}

