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
    return this.http.get<PlaceDetail>('http://localhost:3000/google/place/detail', { params: data })
      .pipe(map(place => new PlaceDetail(place)));
  }

  getPlacesNearby(data): Observable<Place[]> {
    return this.http.get<Place[]>('http://localhost:3000/google/places/nearby', { params: data })
      .pipe(map((results: Place[]) => {
        let places: Place[] = [];

        for (const key in results) {
          let place = new Place(results[key]);
          places.push(place);
        }
        
        return places;
      }));
  }

  getPlacePhoto(data): Observable<string> {
    return this.http.get('http://localhost:3000/google/place/photo', {params: data})
      .pipe(map((result: any) => {
        return 'https://lh4.googleusercontent.com/' + result.photo_url;
        // return result + "";
      }));
  }
}
