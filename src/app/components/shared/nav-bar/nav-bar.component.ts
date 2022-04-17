import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  route: any


  constructor() {


  }
  ngOnInit(): void {

  }

  ngDoCheck() {
    this.route = window.location.href.split('http://localhost:4200')[1]


  }


}


