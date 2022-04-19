import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private userService: UserService) {
    this.form = new FormGroup({
      nickname: new FormControl(''),
      password: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(123)
  }
}
