import { Component, OnInit } from '@angular/core';
import { UserPlacesService, UserPlace } from '../../service/user-places.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  places: Observable<UserPlace[]>;

  constructor(private userPlaceService: UserPlacesService) {
    this.places = this.userPlaceService.getPlaces();  
  }

  ngOnInit() {
  }

  addPlace() {
    this.userPlaceService.addPlace('placeId1');
  }

}
