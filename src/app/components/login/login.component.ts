import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  arrResponse: string[];

  constructor(private userService: UserService, private router: Router) {
    this.form = new FormGroup({
      nickname: new FormControl(''),
      password: new FormControl(''),
    });
    this.arrResponse = ['']
  }

  ngOnInit(): void {
  }
  async onSubmit() {
    try {
      const response = await this.userService.login(this.form.value);


      if (response.success == 'valid nickname') {
        sessionStorage.setItem('token_user', String(response.token));
        setTimeout(() => {
          this.router.navigate(['/feed']);
        }, 1000);

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Your nickname or password is invalid!'
        })
      }

    } catch (error) {
      console.log(error)

    };
  }
}
