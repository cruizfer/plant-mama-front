import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  route: any
  displayElement: boolean


  constructor(private router: Router) {
    this.displayElement = false
  }
  ngOnInit(): void {


  }

  ngDoCheck() {
    this.route = window.location.href.split('http://localhost:4200')[1].trim();
    console.log(this.route)

    if (localStorage.getItem('token_user')) {
      this.displayElement = true
    }
    else {
      this.displayElement = false
    }

  }

  onClick() {
    localStorage.removeItem('token_user');
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 100);


  }

}
