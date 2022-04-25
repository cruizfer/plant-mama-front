import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { Nursery } from '../../interfaces/nursery.interface';

@Component({
  selector: 'app-nurseries',
  templateUrl: './nurseries.component.html',
  styleUrls: ['./nurseries.component.css']
})
export class NurseriesComponent implements OnInit {

  locations: any[];
  latitude: any;
  longitude: any;

  constructor(private locationService: LocationService) {

    this.latitude = 40.41730921117285
    this.longitude = -3.7035693555299476


  }


  async ngOnInit() {


    try {
      this.locations = await this.locationService.getAll()
      console.log(this.locations[2].latitude)
      console.log(this.locations)

    } catch (error) {
      console.log(error)
    };
  }


  onClick($event) {
    switch ($event) {
      case 0: this.latitude = 40.5029
        this.longitude = -3.65059;
        break
      case 1: this.latitude = 40.4632
        this.longitude = -3.65863;
        break
      case 2: this.latitude = 40.4103
        this.longitude = -3.7079;
        break
      case 3: this.latitude = 40.445
        this.longitude = -3.67033;
        break
      case 4: this.latitude = 40.4086
        this.longitude = -3.70752;
        break
      case 5: this.latitude = 40.409
        this.longitude = -3.70477;
        break
      case 6: this.latitude = 40.4108
        this.longitude = -3.70837;
        break
      case 7: this.latitude = 40.4108
        this.longitude = -3.69839;
        break
      case 8: this.latitude = 40.4177
        this.longitude = -3.7101;
        break


    }
  }




}
