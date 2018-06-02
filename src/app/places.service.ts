import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Place } from './model/place';
import { PlaceDetail } from './model/placedetail';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private http: HttpClient) { }

  getPlaceDetail(data): Observable<PlaceDetail> {
    return this.http.get('http://localhost:3000/google/place/detail', { params: data })
      .pipe(map(place => new PlaceDetail(place)));
  }

  getPlacesNearby(data): Observable<Place[]> {
    return this.http.get('http://localhost:3000/google/places/nearby', { params: data })
      .pipe(map(results => {
        let places = [];

        console.log("results %o", results);
        for (const key in results) {
          places.push(new Place(results[key]));
        }

        return places;
      }));
  }
}
