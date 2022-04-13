import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  route: any
  constructor() {

  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.route = window.location.href.split('http://localhost:4200')[1]
    console.log(this.route)

  }
}
