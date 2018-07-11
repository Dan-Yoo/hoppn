import { Component, OnInit } from '@angular/core';
import { UserPlacesService, UserPlace } from '../../service/user-places.service';
import { Observable } from 'rxjs';
import { PlaceDetail } from '../../model/placedetail';
import { PlacesService } from '../../service/places.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    places$: Observable<UserPlace[]>;
    placeDetail$: Observable<PlaceDetail>;
    placeDetail: any;

    constructor(private placeService: PlacesService,
        private userPlaceService: UserPlacesService) {
        this.places$ = this.userPlaceService.getPlaces();
    }

    ngOnInit() {
    }

    seeDetails(placeId: string): void {
        this.placeDetail$ = this.placeService.getPlaceDetail({ placeid: placeId });
        this.placeDetail$.subscribe(res => this.placeDetail = res);
    }
}
